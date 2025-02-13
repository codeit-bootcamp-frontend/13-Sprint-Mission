import styled from "styled-components";
import theme from "../../styles/theme";

export const CommentContainer = styled.div`
  width: 100%;
`;

export const RegisterBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    padding: 12px 23px;
    border-radius: 8px;
    font: ${theme.font.H5Bold};
    color: ${theme.color.gray100};
    background-color: ${theme.color.blue};
    margin-top: 24px;
    cursor: pointer;

    &:disabled {
      background-color: ${theme.color.gray400};

      &:hover {
        background-color: ${theme.color.gray400};
      }
    }

    &:hover {
      background-color: ${theme.color.blueHover};
    }
  }
`;
