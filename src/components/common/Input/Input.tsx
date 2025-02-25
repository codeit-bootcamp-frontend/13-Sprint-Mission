import * as S from "./Input.styles";
import { CSSProperties, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  style?: CSSProperties;
  isTextarea?: boolean;
  height?: string;
  largeHeight?: string;
}

export default function Input({
  label,
  style,
  isTextarea,
  height,
  largeHeight,
  ...rest
}: InputProps) {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.StyledInput
        height={height}
        $largeHeight={largeHeight}
        style={style}
        {...rest}
        as={isTextarea ? "textarea" : "input"}
      />
    </S.InputContainer>
  );
}
