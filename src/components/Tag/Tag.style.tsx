import styled, { css } from "styled-components";
import theme from "../../style/theme";

export interface StyledProps {
  $product?: boolean;
}
interface DeleteButtonProps {
  tag: Tag;
  onClick?: () => void;
}
export const TagsContainer = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  ${(props) =>
    props.$product &&
    css`
      gap: 8px;
    `}
`;
export const Container = styled.div`
  background-color: ${theme.color.gray100};
  width: auto;
  height: 36px;
  padding: 6px 12px;
  border-radius: 26px;
  border: none;
`;

export const FlexContents = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export const Tag = styled.div`
  color: ${theme.color.gray800};
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  @media (max-width: 375px) {
  }
  @media (min-width: 376px) and (max-width: 768px) {
  }
`;
export const DeleteButton = styled.img<DeleteButtonProps>`
  width: 22px;
  height: 22px;
`;
