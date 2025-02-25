import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  body {
    font-family: 'Pretendard', sans-serif;
    font-display: swap;
    margin: 0; 
    padding: 0;
  }
  html {
  margin: 0; 
  padding: 0;
  }
 
  a {
    text-decoration: none; 
    color: #ffffff;
  }
  p{
    margin: 0px;
  }
  button {
    padding: 0px
  }
  ul{
    list-style: none;

  }
  @font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff2') format('woff2');
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-display: swap;
  font-weight: 400;
  font-style: normal;
}

@font-face {
font-family: "Pretendard";
src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff2') format('woff2');
src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
  font-display: swap;
  font-weight: 600;
  font-style: normal;
}`;

export default GlobalStyle;
