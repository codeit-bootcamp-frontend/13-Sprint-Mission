import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item from "../pages/Items";
import AddItem from "../pages/AddItem";
import Layout from "./Layout";
import FreeBoard from "../pages/FreeBoard";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Item />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/free-board" element={<FreeBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
