import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo/panda-market-logo.svg";
import UserIcon from "../assets/user/default-profile.png";
import styles from "./Nav.module.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "var(--blue)" : "",
  };
}

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.menu}>
        <Link to="/">
          <img src={logoImg} alt="판다마켓 로고" />
        </Link>
        <ul>
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
      </div>
      <img src={UserIcon} className={styles.user} alt="유저 메뉴" />
    </div>
  );
}

export default Nav;
