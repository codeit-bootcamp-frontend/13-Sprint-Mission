import styled from "styled-components";
import theme from "../../../style/theme";

type isOpen = {
  $isOpen: boolean;
};
export const DropDown = styled.div`
  position: relative;
`;

export const Selected = styled.div`
  background-color: ${theme.color.white};
  cursor: pointer;
  border: 1px solid ${theme.color.gray200};
  border-radius: 8px;
  padding: 16px 12px;
  color: ${theme.color.gray400};
  display: flex;
  height: 42px;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
`;

export const Options = styled.ul<isOpen>`
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
  top: 50%;
  right: 80%;
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

export const SortImgWrapper = styled.div`
  width: 42px;
  height: 42px;
  left: 302px;
  padding: 9px;
  border: 1px solid ${theme.color.gray200};
  border-radius: 12px;
`;
export const SortImg = styled.img`
  width: 24px;
  height: 24px;
`;
//editSelect
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
