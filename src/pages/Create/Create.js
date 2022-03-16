import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import SelectItem from "./SelectItem";

export default function Create() {
  const [genre, setGenre] = useState("장르");
  const [contentName, setContentName] = useState("");
  const [content, setContent] = useState("컨텐츠");

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handlecontent = (e) => {
    setContent(e.target.value);
  };
  const fakeData = ["로비", "뽑기", "pve", "pvp", "상점", "영웅", "친구", "장비", "업적"];

  return (
    <CreateBody>
      <Header pageName="TestCase 생성 페이지" />
      <MainWrap>
        <SelectWrap>
          <p>장르 선택</p>
          <SelectList>
            <SelectItem name="수집형RPG" btnType="button" onClick={handleGenre} />
            <SelectItem name="MMORPG" btnType="button" onClick={handleGenre} />
          </SelectList>
          <Titles>{genre}</Titles>
        </SelectWrap>

        <SelectWrap>
          <p>컨텐츠 선택</p>
          <SelectList>
            {fakeData.map((data) => (
              <SelectItem key={`list_${data}`} name={data} btnType="button" onClick={handlecontent} />
            ))}
          </SelectList>
          <Titles>{content}</Titles>
        </SelectWrap>

        <WrapInput>
          <input
            type="text"
            value={contentName}
            onChange={(e) => setContentName(e.target.value)}
            placeholder="T.C 제목입력"
          />
          <CreateButton type="button">생성</CreateButton>
        </WrapInput>
      </MainWrap>
    </CreateBody>
  );
}

const CreateBody = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const MainWrap = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 5em;
  justify-content: center;
  align-items: center;
`;

const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelectList = styled.ul`
  width: 10em;
  height: 10em;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const Titles = styled.p`
  margin-top: 30px;
  font-weight: bold;
  font-size: 2em;
`;

const CreateButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  background: #c6edc8;
`;

const WrapInput = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  margin-bottom: 70px;
`;
