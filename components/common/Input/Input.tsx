import Image from "next/image";
import * as S from "./Input.styles";
import { CSSProperties, InputHTMLAttributes } from "react";

import search from "@/public/icons/search.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  style?: CSSProperties;
  isTextarea?: boolean;
  leftSlot?: string;
  slotSize?: number;
  height?: string;
  largeHeight?: string;
}

export default function Input({
  label,
  style,
  isTextarea,
  leftSlot,
  slotSize,
  height,
  largeHeight,
  ...rest
}: InputProps) {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Input>
        {leftSlot && (
          <S.Icon>
            <Image fill src={leftSlot} alt="" />
          </S.Icon>
        )}
        <S.StyledInput
          height={height}
          $largeHeight={largeHeight}
          size={slotSize}
          style={style}
          {...rest}
          as={isTextarea ? "textarea" : "input"}
        />
      </S.Input>
    </S.InputContainer>
  );
}
