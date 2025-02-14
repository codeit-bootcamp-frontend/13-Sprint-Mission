import * as S from "./Input.styles";

export default function Input({
  label,
  style,
  isTextarea,
  onChange,
  height,
  largeHeight,
  ...rest
}) {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.StyledInput
        height={height}
        $largeHeight={largeHeight}
        onChange={onChange}
        style={style}
        {...rest}
        as={isTextarea ? "textarea" : "input"}
      />
    </S.InputContainer>
  );
}
