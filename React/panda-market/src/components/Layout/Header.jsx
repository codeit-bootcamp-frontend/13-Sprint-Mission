import { Link, NavLink, useLocation } from "react-router-dom";
import useWindowSize from "../..//hooks/useWindowSize";
import logoImg from "../../assets/logo/panda-market-logo.svg";
import logoWordImg from "../../assets/logo/panda-market-logo-only-word.svg";
import UserIcon from "../../assets/user/default-profile.png";
import styles from "./Header.module.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "var(--blue)" : "",
  };
}

function Header() {
  const { width } = useWindowSize();
  const location = useLocation();

  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <Link to="/">
          {width >= 768 ? (
            <img src={logoImg} alt="판다마켓 로고" />
          ) : (
            <img src={logoWordImg} alt="판다마켓 로고" />
          )}
        </Link>
        {!["/"].includes(location.pathname) && (
          <ul className={styles.menu}>
            <li>
              <NavLink style={getLinkStyle} to="/community">
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink style={getLinkStyle} to="/items">
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
          <button type="button" className={styles.loginButton}>
            로그인
          </button>
        </Link>
      )}
    </div>
  );
}

export default Header;
