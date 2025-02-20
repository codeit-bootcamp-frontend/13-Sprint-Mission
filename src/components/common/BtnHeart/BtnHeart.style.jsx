import styled, { css } from "styled-components";
import theme from "../../../style/theme";
//

export const InactiveBtnHeart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: 87px;
  height: 40px;
  border: none;
  border-radius: 35px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  background: ${theme.color.white};
  color: ${theme.color.gray500};
  ${(props) =>
    props.$small &&
    css`
      width: 79px;
      height: 32px;
    `};
  ${(props) =>
    props.$border &&
    css`
      border: 1px solid ${theme.color.gray200};
    `};
`;

export const ActiveBtnHeart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 87px;
  height: 40px;
  border: none;
  border-radius: 35px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  background: ${theme.color.white};
  color: ${theme.color.gray500};
  ${(props) =>
    props.$small &&
    css`
      width: 79px;
      height: 32px;
    `};
  ${(props) =>
    props.$border &&
    css`
      border: 1px solid ${theme.color.gray200};
    `};
`;

export const HeartImg = styled.img`
  width: 26px;
  height: 23px;

  ${(props) =>
    props.$small &&
    css`
      width: 20px;
      height: 17px;
    `}
`;
