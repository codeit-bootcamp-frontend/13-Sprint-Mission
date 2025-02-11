import styled from "styled-components";
import theme from "../../../styles/theme";

export const BestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font: ${theme.font.H3Bold};
  text-align: left;
  color: ${theme.color.gray900};
  margin: 0;
  margin-bottom: 16px;
`;

export const ItemCardContainer = styled.div`
  display: flex;
  gap: 24px;
  margin: auto;
`;
