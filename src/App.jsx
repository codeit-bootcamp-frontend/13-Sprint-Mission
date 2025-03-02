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

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/items" element={<Items />}></Route>
          <Route path="/additem" element={<AddItem />}></Route>
          <Route path="/privacy" element={<Policy />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/boards" element={<Boards />}></Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
