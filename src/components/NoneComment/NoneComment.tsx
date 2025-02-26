import * as S from "./NoneComment.styles";
import calling from "../../assets/icons/calling.svg";

export default function NoneComment() {
  return (
    <S.NoneCommentContainer>
      <S.None src={calling} alt="" />
      <span>아직 문의가 없어요</span>
    </S.NoneCommentContainer>
  );
}
