import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWarp>
      <Title>
        <Link to="/">📄 AUTC</Link>
      </Title>
    </HeaderWarp>
  );
}

const HeaderWarp = styled.header`
  display: flex;
  padding: 30px;
  padding-left: 10%;
  background-color: #eee;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2em;
`;
