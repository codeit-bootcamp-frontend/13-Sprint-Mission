import styled from "styled-components";
import theme from "../../style/theme";

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
`;
export const DeleteButton = styled.img`
  width: 22px;
  height: 24px;
`;
