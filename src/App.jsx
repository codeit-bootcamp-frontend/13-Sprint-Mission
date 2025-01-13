import { createGlobalStyle } from "styled-components";
import Routers from "./components/Routers";
import reset from "styled-reset";
import React from "react";

const GlobalStyle = createGlobalStyle`
  ${reset}

  *{
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
  font-family: 'ROKAF_Sans_Bold';
  src: url('./fonts/ROKAF_Sans_Bold.ttf') format('woff2');
  font-weight: 700;
  font-size: normal;
}
  body{
    font-family: Pretendard-Regular,ROKAF_Sans_Bold;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routers />
    </React.Fragment>
  );
}

export default App;
