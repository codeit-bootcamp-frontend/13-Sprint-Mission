import * as S from "./Tag.styles";
import x from "../../assets/icons/delete.svg";

export default function Tag({ tag, onClick }) {
  return (
    <S.TagContainer>
      <S.Tag>
        <S.TagName>#{tag}</S.TagName>
        <S.DeleteTag src={x} onClick={onClick} />
      </S.Tag>
    </S.TagContainer>
  );
}
