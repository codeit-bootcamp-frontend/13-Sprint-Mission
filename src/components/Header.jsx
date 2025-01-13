import React from "react";
import logoImg from "../assets/images/pandaLogo.svg";
import userImg from "../assets/images/userImg.svg";
import styled from "styled-components";
import responsive from "../utils/responsive";

const Header = () => {
  return (
    <Nav responsive={responsive}>
      <NavList>
        <LogoWrapper>
          <img src={logoImg} alt="판다 얼굴 이미지" />
          <HeaderTitle>판다마켓</HeaderTitle>
        </LogoWrapper>
        <NavItemWrapper>
          <NavListItem href="/free-board">자유게시판</NavListItem>
          <NavListItem href="/">중고마켓</NavListItem>
        </NavItemWrapper>
      </NavList>

      <img src={userImg} alt="판다 캐릭터 이미지" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  padding: 10px 200px;
  @media ${({ responsive }) => responsive.device.tablet} {
    padding: 10px 24px;
  }
  @media ${({ responsive }) => responsive.device.mobile} {
    padding: 10px 16px;
  }

  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  z-index: 1;
  background-color: #ffffff;
`;

const NavList = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HeaderTitle = styled.span`
  font-family: ROKAF_Sans_Bold;
  font-size: 25px;
  font-weight: 700;
  line-height: 34px;
  color: #3692ff;
`;

const NavItemWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

const NavListItem = styled.a`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  color: #4b5563;
`;
