import * as S from "./NoneImage.styles";
import noneImg from "../../assets/icons/image.svg";

export default function NoneImage({ list, detail }) {
  return (
    <S.NoneImgContainer list={list} $detail={detail}>
      <S.NoneImg src={noneImg} />
    </S.NoneImgContainer>
  );
}
