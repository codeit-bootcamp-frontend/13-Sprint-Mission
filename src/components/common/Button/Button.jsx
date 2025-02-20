import * as S from "./Button.style";
//
//버튼 컨테이너 필요
export default function Button({ onClick, ...props }) {
  const {
    $small,
    medium,
    value,
    toggle,
    square,
    circle,
    heart,
    children,
    disabled,
    ...rest
  } = props;
  //...rest: $square,$small,$medium,toggle,$circle,children,disabled
  const onClickChange = (e) => {
    onClick(e);
  };
  return (
    <>
      {toggle ? (
        <button />
      ) : (
        <S.Button
          onClick={onClickChange}
          $square={square}
          $circle={circle}
          $medium={medium}
          disabled={disabled}
          {...rest}
        >
          {children}
        </S.Button>
      )}
    </>
  );
}
