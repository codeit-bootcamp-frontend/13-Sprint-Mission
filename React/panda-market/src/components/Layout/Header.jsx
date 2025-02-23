import { Link, NavLink, useLocation } from "react-router-dom";
import useWindowSize from "../..//hooks/useWindowSize";
import BREAKPOINTS from "../../utils/breakpoints";
import PrimaryButton from "../UI/PrimaryButton";
import logoImg from "../../assets/logo/panda-market-logo.svg";
import logoWordImg from "../../assets/logo/panda-market-logo-only-word.svg";
import UserIcon from "../../assets/image/default-profile.png";
import styles from "./Header.module.css";

function Header() {
  const { width } = useWindowSize();
  const location = useLocation();

  function communityLinkStyle({ isActive }) {
    return {
      color: isActive ? "var(--blue)" : "",
    };
  }

  function marketLinkStyle({ isActive }) {
    const isMarketRelatedPage = ["/items", "/additem"].includes(
      location.pathname
    );

    return {
      color: isActive || isMarketRelatedPage ? "var(--blue)" : "",
    };
  }

  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <Link to="/">
          {width >= BREAKPOINTS.TABLET ? (
            <img src={logoImg} alt="판다마켓 로고" />
          ) : (
            <img src={logoWordImg} alt="판다마켓 로고" />
          )}
        </Link>
        {!["/"].includes(location.pathname) && (
          <ul className={styles.menu}>
            <li>
              <NavLink style={communityLinkStyle} to="/community">
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink style={marketLinkStyle} to="/items">
                중고마켓
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      {!["/"].includes(location.pathname) && (
        <img src={UserIcon} className={styles.user} alt="유저 메뉴" />
      )}
      {["/"].includes(location.pathname) && (
        <Link to="/signin">
          <PrimaryButton type="button" className={styles.loginButton}>
            로그인
          </PrimaryButton>
        </Link>
      )}
    </div>
  );
}

export default Header;
