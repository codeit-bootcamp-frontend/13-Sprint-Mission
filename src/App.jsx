import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/login.jsx";
import SignupPage from "./pages/SIgnUpPage.jsx";
import ItemsPage from "./pages/ItemsPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        {/* <App></App> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/items" element={<ItemsPage />}></Route>
          <Route path="/privacy" element={<PrivacyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
