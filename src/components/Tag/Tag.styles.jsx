import { styled } from "styled-components";
import theme from "../../styles/theme";

export const TagContainer = styled.li`
  height: 36px;
  background-color: ${theme.color.gray100};
  border-radius: 26px;
  padding: 6px 12px;
`;

export const Tag = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const TagName = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.gray800};
`;

export const DeleteTag = styled.img`
  width: 22px;
  height: 24px;
  cursor: pointer;
`;
