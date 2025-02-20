import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
//
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import App from "./App.js";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AddItem from "./pages/AddItem/AddItem.jsx";
import Product from "./pages/ProductPage/Product.jsx";
import Test from "./components/TestPage.jsx";
//
//
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
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
}
`;
//
function Main() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<App />}>
            <Route path="/test" element={<Test />} />
            <Route path="/items" element={<HomePage />} />
            <Route path="/items/:productId" element={<Product />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Main;
