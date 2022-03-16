import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Header({ pageName }) {
  return (
    <HeaderWrap>
      <Title>
        <PageHead>{pageName}</PageHead>
        <Link to="/">📄 AUTC</Link>
      </Title>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  display: flex;
  padding: 30px;
  padding-left: 10%;
  background-color: #eee;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 2em;
`;

const PageHead = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
};
