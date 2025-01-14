import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #dfdfdf;
  height: 70px;
  z-index: 1;
  @media (min-width: 1200px) {
    padding: 9px 200px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding: 9px 24px;
  }
  @media screen and (max-width: 767px) {
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
  color: var(--primary);
`;

export const NavList = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavItems = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  padding: 15px 21px;
  color: var(--gray600);
  cursor: pointer;
`;

export const User = styled(Logo)``;
