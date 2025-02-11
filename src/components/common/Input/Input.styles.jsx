import { styled } from "styled-components";
import theme from "../../../styles/theme";

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: ${theme.color.gray800};
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: ${theme.color.gray100};
  padding: 16px 24px;
  border-radius: 12px;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font: ${theme.font.H5Regular};
    color: ${theme.color.gray400};
  }
`;
