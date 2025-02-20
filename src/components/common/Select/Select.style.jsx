import styled from "styled-components";
import theme from "../../../style/theme";

export const DropDown = styled.div`
  width: 139px;
  height: 92px;
  position: relative;
`;

export const Selected = styled.div`
  background-color: ${theme.color.white};
  cursor: pointer;
  border: ${({ $isOpen }) =>
    $isOpen
      ? `2px solid ${theme.color.gray500}`
      : `1px solid ${theme.color.gray400}`};
  border-radius: 8px;
  padding: 16px 12px;
  color: ${theme.color.gray400};
  display: flex;
  justify-content: space-between;
  z-index: 99;
`;

export const Options = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  background-color: ${theme.color.white};
  color: ${theme.color.gray400};
  list-style: none;
  border-radius: 8px;
  border: 1px solid ${theme.color.gray200};
  text-align: center;
  padding: 0px;
  width: 139px;
  position: absolute;
  top: 100%;
  right: 0;
  transform: translateY(8px);
  z-index: 101;
`;
export const OptionList = styled.li`
  width: 100%;
  height: 46px;
  padding: 16px 12px;
  border-radius: 8px;
  background-color: ${theme.color.white};
  &:hover {
    background-color: ${theme.color.gray100};
  }
`;

export const EditDropDown = styled.div`
  position: relative;
  height: 24px;
`;
export const KebobButton = styled.div`
  background-color: ${theme.color.white};
  cursor: pointer;
  height: 24px;
  border: "none";
`;
