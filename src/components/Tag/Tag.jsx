import DeleteButton from "../../assets/icons/DeleteIcon.svg";
import * as S from "./Tag.style";
export default function Tag({ value, onClick }) {
  const handleClickDeleteBtm = () => {
    onClick(value);
  };
  return (
    <S.Container>
      <S.FlexContents>
        <S.Tag>#{value}</S.Tag>
        <S.DeleteButton onClick={handleClickDeleteBtm} src={DeleteButton} />
      </S.FlexContents>
    </S.Container>
  );
}
