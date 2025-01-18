import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../styles/Layout";
import ItemPage from "./pages/ItemPage/ItemPage";
import FreeBoardPage from "./pages/FreeBoardPage/FreeBoardPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/items" element={<ItemPage />} />
          <Route path="/freeBoard" element={<FreeBoardPage />} />
          <Route path="/addItem" element={<AddItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
