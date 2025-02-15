import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
//
import LandingPage from "../pages/LandingPage/LandingPage.jsx";
import App from "../App";
import HomePage from "../pages/HomePage";
import AddItem from "../pages/AddItem/AddItem.jsx";
//
import useWindowSize from "../hooks/useWindowSize";
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
`;
//
function Main() {
  const deviceType = useWindowSize();
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<App />}>
            <Route path="/items" element={<HomePage device={deviceType} />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Main;
