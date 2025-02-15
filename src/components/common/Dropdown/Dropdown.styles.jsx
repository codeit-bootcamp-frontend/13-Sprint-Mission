import { styled } from "styled-components";
import down from "../../../assets/icons/arrowDown.svg";
import up from "../../../assets/icons/arrowUp.svg";
import dropdown from "../../../assets/icons/dropdown.svg";
import theme from "../../../styles/theme";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  width: 130px;
  height: 42px;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 42px;
  }
`;

export const Present = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid ${theme.color.gray200};
  background-color: ${theme.color.white};
  cursor: pointer;

  @media screen and (max-width: 767px) {
    justify-content: flex-end;
    padding: 9px;
  }
`;

export const PresentValue = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.gray800};

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Arrow = styled.img`
  width: 24px;
  height: 24px;
  user-select: none;
  content: url(${({ $isOpen }) => ($isOpen ? up : down)});

  @media screen and (max-width: 767px) {
    content: url(${dropdown});
  }
`;

export const List = styled.div`
  width: 130px;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.gray200};
  border-radius: 12px;
  position: absolute;
  top: 55px;
  color: ${theme.color.gray800};
`;

export const ListItem = styled.div`
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.color.gray200};
  font: ${theme.font.H5Regular};
  cursor: pointer;

  &:hover {
    color: ${theme.color.blue};
  }

  &:last-child {
    border-bottom: none;
  }
`;
