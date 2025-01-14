import * as S from "./ItemCard.styles";
import heart from "../../../assets/icons/heart.svg";

export default function ItemCard({ list = "best", image, name, price, favoriteCount }) {
  return (
    <S.ItemContainer list={list}>
      <S.ItemImg src={image} alt="productImage" list={list} />
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
