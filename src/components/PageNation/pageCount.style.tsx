import styled from "styled-components";
import theme from "../../style/theme";

export interface StyleProps {
  page: number;
  value?: number;
}
export const PageBtn = styled.div`
  display: flex;
  gap: 4px;
  margin: 43px auto 58px;
  text-align: center;
  width: 304px;
`;

export const Btn = styled.button<StyleProps>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid ${theme.color.gray200};
  opacity: 0px;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  background-color: ${({ page, value }) =>
    page === value ? "#2f80ed" : "#ffffff"};
  color: ${({ page, value }) => (page === value ? "#f9fafb" : "#6b7280")};

  &:active {
    background-color: ${theme.color.blue};
    color: ${theme.color.gray50};
  }

  &:hover {
    background-color: ${theme.color.blue};
    color: ${theme.color.gray50};
  }
`;
export const NextPrevBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid ${theme.color.gray200};
  background-color: ${theme.color.white};
`;
