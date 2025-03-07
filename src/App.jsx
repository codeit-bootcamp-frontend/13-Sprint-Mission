import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import Home from "@/pages/Home.jsx";
import Login from "@/pages/Login.jsx";
import Signup from "@/pages/Signup.jsx";
import Items from "@/pages/Items.jsx";
import AddItem from "@/pages/AddItem.jsx";
import Boards from "@/pages/Boards";
import Policy from "@/pages/Policy.jsx";
import Faq from "@/pages/Faq.jsx";
import Layout from "./components/MainLayout";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/boards" element={<Boards />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy" element={<Policy />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
