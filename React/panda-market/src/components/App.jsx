import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./App.module.css";
import "./App.font.css";
import "./App.color.css";

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
