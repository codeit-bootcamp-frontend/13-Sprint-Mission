"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

body, ul, li, p, h2 {
    margin: 0;
}

ul, li{
  margin:0;
  padding:0;
}

button, input, textarea {
  border:none;
}

@font-face {
  font-family: 'ROKAF Sans';
  src: url("/font/ROKAF.ttf");
  font-weight: 700;
  font-style: normal;
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
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff2') format('woff2');
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-display: swap;
    font-weight: 600;
    font-style: normal;
}
`;

export default GlobalStyle;
