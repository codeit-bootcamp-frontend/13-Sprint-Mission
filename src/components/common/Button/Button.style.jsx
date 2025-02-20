import styled, { css } from "styled-components";
import theme from "../../../style/theme";
//

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  line-height: 26px;
  font-weight: 600px;
  color: ${theme.color.white};
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
