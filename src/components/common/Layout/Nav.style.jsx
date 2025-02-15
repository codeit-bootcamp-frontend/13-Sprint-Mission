import styled from "styled-components";
import theme from "../../../style/theme";
//

export const HeaderArea = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  background-color: ${theme.color.white};
  padding: 10px 200px;
  z-index: 50;
  @media (max-width: 375px) {
    padding: 15px 15px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    padding: 10px 24px;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Contents = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavContents = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 375px) {
    gap: 8px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 9px;
`;
export const PandaImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const Logo = styled.img`
  width: 103px;
  height: 51px;
  cursor: pointer;
  @media (max-width: 375px) {
    width: 81px;
  }
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 375px) {
    gap: 8px;
  }
`;
export const activeLink = ({ isActive }) => ({
  color: isActive ? "#3692FF" : "#4b5563",
  width: `${({ $device }) => ($device === "mobile" ? "70px" : "108px")}`,
  padding: `${({ $device }) =>
    $device === "mobile" ? "7px 0px" : "11px 0px"}`,
  fontSize: `${({ $device }) => ($device === "mobile" ? "16px" : "18")}`,
  fontWeight: "700",
  lineHeight: "26px",
  textAlign: "center",
  justifyContent: "center",
});
export const MyLogoButton = styled.img`
  width: 40px;
  height: 40px;
`;
