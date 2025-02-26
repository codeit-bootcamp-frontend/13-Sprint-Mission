import styled from "styled-components";
import theme from "../../styles/theme";

export const NoneCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  span {
    font: ${theme.font.H5Regular};
    color: ${theme.color.gray400};
  }
`;

export const None = styled.img`
  width: 196px;
  height: 196px;
`;
