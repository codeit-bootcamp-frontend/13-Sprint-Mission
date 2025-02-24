import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import RegisterItemPage from "./pages/RegisterItemPage/RegisterItemPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="items">
            <Route index element={<MarketPage />} />
            <Route path=":productId" element={<ItemPage />} />
          </Route>
          <Route path="additem" element={<RegisterItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
