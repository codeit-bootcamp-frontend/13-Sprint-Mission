import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import Home from "@/pages/Home.jsx";
import Login from "@/pages/Login.jsx";
import Signup from "@/pages/Signup.jsx";
import ItemsPage from "@/pages/ItemsPage.jsx";
import PrivacyPage from "@/pages/PrivacyPage.jsx";
import FAQ from "@/pages/FAQ.jsx";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/items" element={<ItemsPage />}></Route>
          <Route path="/privacy" element={<PrivacyPage />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
