import { Outlet } from "react-router-dom";
import React from "react";
import Nav from "./components/common/Layout/Nav";
import styled from "styled-components";

const Contents = styled.div`
  width: 100%;
  margin: 70px auto;
`;
function App() {
  return (
    <div>
      <Nav />
      <Contents>
        <Outlet />
      </Contents>
    </div>
  );
}

export default App;
