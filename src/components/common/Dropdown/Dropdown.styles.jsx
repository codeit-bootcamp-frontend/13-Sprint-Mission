import { styled } from "styled-components";
import down from "../../../assets/icons/arrowDown.svg";
import up from "../../../assets/icons/arrowUp.svg";
import dropdown from "../../../assets/icons/dropdown.svg";

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
  border: 1px solid #e5e7eb;
  background-color: white;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    justify-content: flex-end;
    padding: 9px;
  }
`;

export const PresentValue = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--gray800);

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
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  position: absolute;
  top: 55px;
  color: var(--gray800);
`;

export const ListItem = styled.div`
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }

  &:last-child {
    border-bottom: none;
  }
`;
