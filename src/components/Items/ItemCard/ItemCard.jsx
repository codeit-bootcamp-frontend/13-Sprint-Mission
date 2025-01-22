import * as S from "./ItemCard.styles";
import heart from "../../../assets/icons/heart.svg";
import NoneImage from "../../NoneImage/NoneImage";
import { useState } from "react";

export default function ItemCard({ list = "best", images, name, price, favoriteCount }) {
  const [isImgError, setIsImgError] = useState(false);

  return (
    <S.ItemContainer list={list}>
      {images[0] && !isImgError ? (
        <S.ItemImg src={images[0]} alt="productImage" list={list} onError={() => setIsImgError(true)} />
      ) : (
        <NoneImage list={list} />
      )}
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
