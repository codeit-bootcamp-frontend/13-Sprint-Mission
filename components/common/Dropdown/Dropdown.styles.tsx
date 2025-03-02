import styled from "styled-components";
import theme from "../../../styles/theme";

export const DropdownContainer = styled.div`
  flex-shrink: 0;
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
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid ${theme.color.gray200};
  background-color: ${theme.color.white};
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: none;
    justify-content: flex-end;
    padding: 9px;
  }
`;

export const PresentValue = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.gray800};
`;

export const Small = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${theme.color.gray200};
  background-color: ${theme.color.white};
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: flex;
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
  z-index: 99;
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
