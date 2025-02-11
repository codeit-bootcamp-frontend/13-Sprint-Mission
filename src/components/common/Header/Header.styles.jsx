import styled from "styled-components";
import theme from "../../../styles/theme";

export const HeaderContainer = styled.div`
  background: ${theme.color.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #dfdfdf;
  width: 100%;
  height: 70px;
  z-index: 1;
  @media (min-width: 1200px) {
    padding: 9px 200px;
  }
  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 9px 24px;
  }
  @media (max-width: 768px) {
    padding: 9px 16px;
  }
`;

export const Nav = styled.div`
  display: flex;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 16px;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const Title = styled.div`
  font-family: ROKAF Sans;
  font-size: 25px;
  font-weight: 700;
  color: ${theme.color.blue};

  @media (max-width: 375px) {
    display: none;
  }
`;

export const NavList = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavItems = styled.div`
  font: ${theme.font.H4Bold};
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  padding: 15px 21px;
  color: ${theme.color.gray00};
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

export const User = styled(Logo)``;
