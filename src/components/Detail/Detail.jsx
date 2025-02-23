import * as S from "./Detail.styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductInfo } from "../../api/products";
import Tag from "../Tag/Tag";
import User from "../User/User";
import emptyHeart from "../../assets/icons/emptyHeart.svg";
import fullHeart from "../../assets/icons/fullHeart.svg";
import dots from "../../assets/icons/dots.svg";
import noneImg from "../../assets/icons/image.svg";

export default function Detail() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    tags: [],
    images: null,
    favoriteCount: 0,
    createdAt: "",
    updatedAt: "",
    ownerNickname: "",
  });
  const [isFull, setIsFull] = useState(false);
  const [isImgError, setIsImgError] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    getProductInfo(productId)
      .then((result) => setProduct(result))
      .catch((error) => console.error(error));
  }, [productId]);

  const handleHeartChange = () => {
    setIsFull((prev) => !prev);
  };

  return (
    <S.DetailContainer>
      {product.images && !isImgError ? (
        <S.Image
          src={product.images}
          onLoad={() => setIsImgError(false)}
          onError={() => setIsImgError(true)}
        />
      ) : (
        <S.NoneImageContainer>
          <S.NoneImage src={noneImg} />
        </S.NoneImageContainer>
      )}

      <S.Detail>
        <div>
          <S.Header>
            <S.TitleWrapper>
              <S.Title>{product.name}</S.Title>
              <S.Dots src={dots} />
            </S.TitleWrapper>
            <S.Price>{product.price.toLocaleString()}원</S.Price>
          </S.Header>
          <S.ProductInfo>
            <div>
              <S.Label>상품 소개</S.Label>
              <S.Content>{product.description}</S.Content>
            </div>
            <div>
              <S.Label>상품 태그</S.Label>
              <S.TagWrapper>
                {product.tags.map((tag) => (
                  <Tag key={tag} tag={tag} readOnly />
                ))}
              </S.TagWrapper>
            </div>
          </S.ProductInfo>
        </div>
        <S.UserWrapper>
          <User
            owner={product.ownerNickname}
            createdAt={
              product.updatedAt !== "" ? product.updatedAt : product.createdAt
            }
            detail={true}
          />
          <S.HeartWrapper onClick={handleHeartChange}>
            <S.Heart src={isFull ? fullHeart : emptyHeart} />
            <S.HeartCount>{product.favoriteCount}</S.HeartCount>
          </S.HeartWrapper>
        </S.UserWrapper>
      </S.Detail>
    </S.DetailContainer>
  );
}
