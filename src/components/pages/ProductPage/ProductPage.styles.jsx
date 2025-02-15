import styled from "styled-components";
import theme from "../../../styles/theme";

export const Product = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px;
  margin: 24px 0 60px;
  gap: 62px;

  @media (max-width: 375px) {
    padding: 0 16px;
    gap: 40px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    padding: 0 16px;
    gap: 56px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const GoBackToList = styled.div`
  width: 240px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
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
