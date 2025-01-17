import * as S from "./Tag.styles";
import x from "../../assets/icons/delete.svg";

export default function Tag({ tag }) {
  return (
    <S.TagContainer>
      <S.Tag>
        <S.TagName>#{tag}</S.TagName>
        <S.DeleteTag src={x} />
      </S.Tag>
    </S.TagContainer>
  );
}
