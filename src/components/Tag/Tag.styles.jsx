import { styled } from "styled-components";

export const TagContainer = styled.li`
  height: 36px;
  background-color: var(--gray100);
  border-radius: 26px;
  padding: 6px 12px;
`;

export const Tag = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const TagName = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--gray800);
`;

export const DeleteTag = styled.img`
  width: 22px;
  height: 24px;
`;
