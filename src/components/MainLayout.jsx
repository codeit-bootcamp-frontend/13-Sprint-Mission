import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {pathname === "/" ? <Footer /> : null}
    </>
  );
}

export default MainLayout;
