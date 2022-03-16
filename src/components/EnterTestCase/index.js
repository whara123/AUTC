import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import plusImg from "../../assets/plus.png";
import caseImg from "../../assets/testcase.png";

export default function EnterTestCase({ isHave }) {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/create");
  };

  const handleMoveCase = () => {
    console.log("이동");
  };

  return (
    <div>
      <WrapArticle onClick={isHave ? handleMoveCase : handleCreate}>
        <WrapImg>
          {isHave ? (
            <ImgCanvas style={{ width: "100%", height: "100%" }} src={caseImg} alt="TC이미지" />
          ) : (
            <ImgCanvas src={plusImg} alt="생성이미지" />
          )}
        </WrapImg>
        <WrapTitle>{isHave ? "version" : "생성하기"}</WrapTitle>
      </WrapArticle>
    </div>
  );
}

const WrapArticle = styled.article`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

const WrapImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #eee;
`;

const ImgCanvas = styled.img`
  width: 25%;
  height: 25%;
`;

const WrapTitle = styled.p`
  padding: 10px;
`;

EnterTestCase.propTypes = {
  isHave: PropTypes.bool.isRequired,
};
