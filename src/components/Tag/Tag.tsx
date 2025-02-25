import * as S from "./Tag.styles";
import x from "../../assets/icons/delete.svg";

interface TagProps {
  tag: string;
  onClick?: () => void;
  readonly?: boolean;
}

export default function Tag({ tag, onClick, readonly }: TagProps) {
  return (
    <S.TagContainer>
      <S.Tag>
        <S.TagName>#{tag}</S.TagName>
        <S.DeleteTag $readonly={readonly} src={x} onClick={onClick} />
      </S.Tag>
    </S.TagContainer>
  );
}
