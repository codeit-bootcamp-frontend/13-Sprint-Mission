import * as S from "./Button.style";
import { ReactNode } from "react";

//

interface Props extends S.ButtonProps {
  onClick: onClick;
  children: ReactNode;
  disabled?: boolean;
}
export default function Button({ onClick, children, ...props }: Props) {
  return (
    <>
      <S.Button onClick={onClick} {...props}>
        {children}
      </S.Button>
    </>
  );
}
