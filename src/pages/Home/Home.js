import React from "react";
import styled from "styled-components";
import EnterTestCase from "../../components/EnterTestCase";
import Header from "../../components/Header";

export default function Home() {
  const isHave = true;
  const isNotHave = false;
  return (
    <div>
      <Header pageName="AUTC 메인 페이지" />
      <MainWarp>
        <EnterTestCase isHave={isHave} />
        <EnterTestCase isHave={isNotHave} />
      </MainWarp>
    </div>
  );
}

const MainWarp = styled.main`
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 90px;
  margin: 5% 10%;
`;
