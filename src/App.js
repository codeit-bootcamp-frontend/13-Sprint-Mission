import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ItemDetailPage from "./pages/ItemsDetailPage/ItemsDetailPage";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";
import { ThemeProvider } from "styled-components";
import Header from "./components/Layout/Header";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* Global Navigation Bar */}
        <Header />

        <div className="withHeader">
          <Routes>
            {/* React Router v6부터는 path="/" 대신 간단하게 `index`라고 표기하면 돼요 */}
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="items" element={<MarketPage />} />
            <Route path="additem" element={<AddItemPage />} />
            <Route path="community" element={<CommunityFeedPage />} />
            <Route path="/products/:productId" element={<ItemDetailPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
