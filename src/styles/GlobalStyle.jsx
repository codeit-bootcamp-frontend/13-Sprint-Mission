import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

body {
    margin: 0;
}

:root {
    --primary: #3692ff;
    --primary-hover: #1967d6;
    --dark-text: #374151;
    --bright-text: #f3f4f6;
    --white: #ffffff;
    --main-background: #fcfcfc;
    --footer-background: #111827;
    --landing-background: #cfe5ff;
    --easy-login: #e6f2ff;
    --gray50: #f9fafb;
    --gray100: #f3f4f6;
    --gray200: #e5e7eb;
    --gray400: #9ca3af;
    --gray500: #6b7280;
    --gray600: #4b5563;
    --gray700: #374151;
    --gray800: #1f2937;
    --gray900: #111827;
    --error-red: #f74747;
    --font: "Pretendard", sans-serif;
}

@font-face {
    font-family: ROKAF Sans;
    src: url("font/ROKAF\ Slab\ Serif\ Bold.ttf");
}
`;

export default GlobalStyle;
