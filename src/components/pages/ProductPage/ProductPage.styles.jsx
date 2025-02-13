import styled from "styled-components";
import theme from "../../../styles/theme";

export const Product = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 24px 0 60px;
  gap: 40px;
`;

export const GoBackToList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 64px;
  background-color: ${theme.color.blue};
  border-radius: 40px;
  font: ${theme.font.H4Bold};
  color: ${theme.color.gray100};
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${theme.color.blueHover};
  }
`;
