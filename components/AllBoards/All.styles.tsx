import theme from "@/styles/theme";
import styled from "styled-components";

export const AllBoards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: ${theme.color.gray900};
    font: ${theme.font.H3Bold};
  }
`;

export const WriteBtn = styled.button`
  padding: 8px 24px;
  border-radius: 8px;
  color: ${theme.color.white};
  background-color: ${theme.color.blue};
  font: ${theme.font.H5Bold};
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
