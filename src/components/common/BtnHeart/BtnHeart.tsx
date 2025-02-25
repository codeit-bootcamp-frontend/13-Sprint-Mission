import activeHeart from "../../../assets/icons/active.heart.icon.svg";
import inactiveHeart from "../../../assets/icons/inactive.heart.icon.svg";
//
import * as S from "./BtnHeart.style";
//
interface Props extends S.StyledProps {
  value: number;
  active?: boolean;
}
export default function BtnHeart({ value, ...props }: Props) {
  const { active, ...rest } = props;
  return (
    <>
      {active ? (
        <S.ActiveBtnHeart {...rest}>
          <S.HeartImg src={activeHeart} {...rest} alt="좋아요" />
          {value}
        </S.ActiveBtnHeart>
      ) : (
        <S.InactiveBtnHeart {...rest}>
          <S.HeartImg src={inactiveHeart} {...rest} alt="좋아요" />
          {value}
        </S.InactiveBtnHeart>
      )}
    </>
  );
}
