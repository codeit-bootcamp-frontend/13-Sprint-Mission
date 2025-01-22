import * as S from "./Header.styles";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/icons/panda.svg";
import user from "../../../assets/icons/user.svg";

export default function Header() {
  const location = useLocation().pathname;

  const activeLink = ({ isActive }) => {
    const isItemsOrAddItem = isActive || location.startsWith("/addItem");

    return {
      color: isItemsOrAddItem ? "var(--primary)" : "var(--gray600)",
    };
  };

  const navLink = [
    {
      to: "/freeBoard",
      style: ({ isActive }) => ({ color: isActive ? "var(--primary)" : "var(--gray600)" }),
      name: "자유게시판",
    },
    { to: "/items", style: activeLink, name: "중고마켓" },
  ];

  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.LogoContainer>
          <S.Logo src={logo} alt="logo" />
          <S.Title>판다마켓</S.Title>
        </S.LogoContainer>
        <S.NavList>
          {navLink.map((l, idx) => (
            <S.NavItems key={idx}>
              <NavLink to={l.to} style={l.style}>
                {l.name}
              </NavLink>
            </S.NavItems>
          ))}
        </S.NavList>
      </S.Nav>
      <S.User src={user} alt="user" />
    </S.HeaderContainer>
  );
}
