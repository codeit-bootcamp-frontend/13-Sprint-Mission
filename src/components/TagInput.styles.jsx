import styled from "styled-components";
import theme from "../styles/theme";

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 16px 24px;
  gap: 10px;
  border: none;
  border-radius: 12px;
  background-color: ${theme.colors.Gray100};
  font: ${theme.fonts.H5Regular};
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 36px;
  gap: 12px;
`;

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 6px 12px 6px 16px;
  border-radius: 26px;
  background-color: ${theme.colors.Gray100};
  color: ${theme.fonts.H5Regular};
  gap: 10px;
`;

export const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
`;
