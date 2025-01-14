import * as S from "./NoneImage.styles";
import noneImg from "../../assets/icons/image.svg";

export default function NoneImage({ list }) {
  return (
    <S.NoneImgContainer list={list}>
      <S.NoneImg src={noneImg} />
    </S.NoneImgContainer>
  );
}
