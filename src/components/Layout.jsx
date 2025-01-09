import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutStyle>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </LayoutStyle>
  );
};

export default Layout;

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
`;
