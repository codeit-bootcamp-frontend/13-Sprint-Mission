import { Route, BrowserRouter, Routes } from "react-router-dom";
import GlobalStyle from "./style/globalStyle.js";
//
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import App from "./App.js";
import ItemsPage from "./pages/ItemsPage/ItemsPage.tsx";
import AddItem from "./pages/AddItem/AddItem.tsx";
import Product from "./pages/ProductPage/Product.tsx";
//
function Main() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<App />}>
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/items/:productId" element={<Product />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Main;
