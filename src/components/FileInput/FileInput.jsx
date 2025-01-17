import * as S from "./FileInput.styles";
import plus from "../../assets/icons/plus.svg";

export default function FileInput({ lable, onChange }) {
  return (
    <S.FileContainer>
      <S.Label>{lable}</S.Label>
      <S.File>
        <S.Div>
          <S.PlusIcon src={plus} />
          <S.AddImg>이미지 등록</S.AddImg>
        </S.Div>
        <input onChange={onChange} type="file" accept="image/jpeg, image/png" style={{ display: "none" }} />
      </S.File>
    </S.FileContainer>
  );
}
