import * as S from "./ItemCard.styles";
import heart from "../../../assets/icons/heart.svg";
import NoneImage from "../../NoneImage/NoneImage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Card {
  list: string;
  id: string;
  images: string;
  name: string;
  price: number;
  favoriteCount: number;
}

export default function ItemCard({
  list = "best",
  id,
  images,
  name,
  price,
  favoriteCount,
}: Card) {
  const [isImgError, setIsImgError] = useState(false);
  const navigate = useNavigate();

  return (
    <S.ItemContainer list={list} onClick={() => navigate(`/items/${id}`)}>
      {images[0] && !isImgError ? (
        <S.ItemImg
          src={images[0]}
          alt="productImage"
          list={list}
          onLoad={() => setIsImgError(false)}
          onError={() => setIsImgError(true)}
        />
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
