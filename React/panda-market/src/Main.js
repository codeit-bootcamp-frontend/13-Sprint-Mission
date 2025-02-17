import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage/HomePage";
import ItemPage from "./pages/ItemPage/ItemPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import RegisterItemPage from "./pages/RegisterItemPage/RegisterItemPage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
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
