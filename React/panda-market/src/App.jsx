import { Outlet } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import styles from "./styles/App.module.css";
import "./styles/App.font.css";
import "./styles/App.color.css";

function App() {
  return (
    <>
      <Header className={styles.nav} />
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
