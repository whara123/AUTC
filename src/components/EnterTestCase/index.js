import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import plusImg from "../../assets/plus.png";
import caseImg from "../../assets/testcase.png";

export default function EnterTestCase({ isHave }) {
  const handleCreate = () => {
    console.log("생성");
  };

  const handleMoveCase = () => {
    console.log("이동");
  };

  return (
    <div>
      <WarpArticle onClick={isHave ? handleMoveCase : handleCreate}>
        <WarpImg>
          {isHave ? (
            <ImgCanvas style={{ width: "100%", height: "100%" }} src={caseImg} alt="TC이미지" />
          ) : (
            <ImgCanvas src={plusImg} alt="생성이미지" />
          )}
        </WarpImg>
        <WarpTitle>{isHave ? "version" : "생성하기"}</WarpTitle>
      </WarpArticle>
    </div>
  );
}

const WarpArticle = styled.article`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

const WarpImg = styled.div`
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

const WarpTitle = styled.p`
  padding: 10px;
`;

EnterTestCase.propTypes = {
  isHave: PropTypes.bool.isRequired,
};
