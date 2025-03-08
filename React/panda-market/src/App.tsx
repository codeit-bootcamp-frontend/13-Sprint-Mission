import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import styles from "./styles/App.module.css";
import "./styles/App.font.css";
import "./styles/App.color.css";

function App() {
  const location = useLocation();

  const isAuthPage = ["/login", "/signup"].includes(location.pathname);
  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isAuthPage && <Header />}
      <div className={styles.body}>
        <Outlet />
      </div>
      {isHomePage && <Footer />}
    </>
  );
}

export default App;
