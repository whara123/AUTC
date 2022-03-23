import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";

export default function Create() {
  const [genre, setGenre] = useState("장르");
  const [content, setContent] = useState("컨텐츠");

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <CreateBody>
      <Header pageName="TestCase 생성 페이지" />
      <main>
        <WrapCreateSelect>
          <SelectOption value={genre} onChange={handleGenre}>
            <option value="수집형 RPG">수집형 RPG</option>
          </SelectOption>

          <SelectOption value={content} onChange={handleContent}>
            <option value="로비">로비</option>
            <option value="모험">모험</option>
            <option value="던전">던전</option>
            <option value="소환">소환</option>
          </SelectOption>

          <CreateBtn type="button">생성</CreateBtn>
        </WrapCreateSelect>
      </main>
    </CreateBody>
  );
}

const CreateBody = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SelectOption = styled.select`
  padding: 5px;
  font-size: 20px;
  box-sizing: border-box;
`;

const CreateBtn = styled.button`
  padding: 10px;
  background-color: #8fdbbf;
  border-radius: 5px;
`;

const WrapCreateSelect = styled.div`
  display: flex;
  gap: 20px;
`;
