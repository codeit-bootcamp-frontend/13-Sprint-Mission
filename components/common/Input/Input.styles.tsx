import styled from "styled-components";
import theme from "../../../styles/theme";

interface InputProps {
  $largeHeight?: string;
  size?: number;
}

export const InputContainer = styled.div<{ label?: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ label }) => (label ? "16px" : "0px")};
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: ${theme.color.gray800};
`;

export const Input = styled.div`
  width: 100%;
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  top: 48%;
  left: 12px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: ${({ height }) => height || "42px"};
  background-color: ${theme.color.gray100};
  padding: 9px 20px;
  ${({ size }) => size && `padding-left: calc(12px + ${size}px);`}
  border-radius: 12px;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font: ${theme.font.H5Regular};
    color: ${theme.color.gray400};
  }

  @media (max-width: 375px) {
    height: ${({ $largeHeight }) => $largeHeight};
    &::placeholder {
      font: ${theme.font.H7Regular};
    }
  }

  @media (min-width: 376px) and (max-width: 768px) {
    height: ${({ $largeHeight }) => $largeHeight};
  }
`;
