import styled, { css } from "styled-components";
import theme from "../../../style/theme";
//
export interface ButtonProps {
  $medium?: boolean;
  $circle?: boolean;
}
export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: none;
  font: ${theme.font.H5Bold};
  color: ${theme.color.gray100};
  background-color: ${theme.color.blue};

  &:disabled {
    background-color: ${theme.color.gray400};
  }

  ${(props) =>
    props.$medium &&
    css`
      width: 240px;
      height: 48px;
    `};
  ${(props) =>
    props.$circle &&
    css`
      border-radius: 40px;
    `};
`;
