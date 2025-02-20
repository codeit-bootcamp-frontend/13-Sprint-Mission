import activeHeart from "../../../assets/icons/active.heart.icon.svg";
import inactiveHeart from "../../../assets/icons/inactive.heart.icon.svg";
//
import * as S from "./BtnHeart.style";
//
export default function BtnHeart({ value, ...props }) {
  const { border, active, onClick, small, ...rest } = props;
  const onClickChange = (e) => {
    onClick(e);
  };
  return (
    <>
      {active ? (
        <S.ActiveBtnHeart
          onClick={onClickChange}
          $border={border}
          $small={small}
          {...rest}
        >
          <S.HeartImg src={activeHeart} $small={small ? small : undefined} />
          {value}
        </S.ActiveBtnHeart>
      ) : (
        <S.InactiveBtnHeart
          onClick={onClickChange}
          $border={border}
          $small={small}
          {...rest}
        >
          <S.HeartImg src={inactiveHeart} $small={small ? small : undefined} />
          {value}
        </S.InactiveBtnHeart>
      )}
    </>
  );
}
