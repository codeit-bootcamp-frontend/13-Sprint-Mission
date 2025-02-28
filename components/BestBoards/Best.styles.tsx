import theme from "@/styles/theme";
import styled from "styled-components";

export const BestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  h2 {
    color: ${theme.color.gray900};
    font: ${theme.font.H3Bold};
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;
