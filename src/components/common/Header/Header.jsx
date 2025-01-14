import { NavLink } from "react-router-dom";
import * as S from "./Header.styles";
import logo from "../../../assets/icons/panda.svg";
import user from "../../../assets/icons/user.svg";

const activeLink = ({ isActive }) => {
  return {
    color: isActive ? "var(--primary)" : "var(--gray600)",
  };
};

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.LogoContainer>
          <S.Logo src={logo} alt="logo" />
          <S.Title>판다마켓</S.Title>
        </S.LogoContainer>
        <S.NavList>
          <S.NavItems>
            <NavLink to="/freeBoard" style={activeLink}>
              자유게시판
            </NavLink>
          </S.NavItems>
          <S.NavItems>
            <NavLink to="/items" style={activeLink}>
              중고마켓
            </NavLink>
          </S.NavItems>
        </S.NavList>
      </S.Nav>
      <S.User src={user} alt="user" />
    </S.HeaderContainer>
  );
}
