import * as S from "./Button.style";
//
//버튼 컨테이너 필요
export default function Button({ children, disabled, ...props }) {
  return (
    <S.Button {...props} disabled={disabled}>
      {children}
    </S.Button>
  );
}
