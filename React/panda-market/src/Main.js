import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import ItemListPage from "./pages/ItemListPage";
import RegisterItemPage from "./pages/RegisterItemPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="items">
            <Route index element={<ItemListPage />} />
            <Route path=":productId" element={<ItemPage />} />
          </Route>
          <Route path="additem" element={<RegisterItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
