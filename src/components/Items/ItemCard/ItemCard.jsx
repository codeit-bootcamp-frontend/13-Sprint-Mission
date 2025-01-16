import * as S from "./ItemCard.styles";
import heart from "../../../assets/icons/heart.svg";
import NoneImage from "../../NoneImage/NoneImage";

// images 값이 없으면 NoneImage 컴포넌트가 보이도록 구현했는데 images 배열 안에 값이 있지만 사진이 안 불러와지는 경우에는 어떻게 처리해야 하는지 고민입니다.
export default function ItemCard({ list = "best", images, name, price, favoriteCount }) {
  return (
    <S.ItemContainer list={list}>
      {images[0] ? <S.ItemImg src={images[0]} alt="productImage" list={list} /> : <NoneImage list={list} />}
      <S.ContentContainer>
        <S.Title>{name}</S.Title>
        <S.Price>{price.toLocaleString()}원</S.Price>
        <S.HeartContainer>
          <S.Heart src={heart} alt="heart" />
          <S.HeartCount>{favoriteCount}</S.HeartCount>
        </S.HeartContainer>
      </S.ContentContainer>
    </S.ItemContainer>
  );
}
