// itemDetail.jsx
import * as S from "./ItemDetail.styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductInfo } from "../api/itemApi";
import img_default from "../assets/images/icons/img_default.svg";
import ic_heart from "../assets/images/icons/ic_heart.svg";
import ic_user from "../assets/images/icons/ic_user.svg";

export default function ItemDetail() {
  const { productId } = useParams();
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
  const [isImgError, setIsImgError] = useState(false);

  useEffect(() => {
    getProductInfo(productId)
      .then((result) => setProduct(result))
      .catch((error) => console.error(error));
  }, [productId]);

  return (
    <S.DetailContainer>
      {/* 아이템 이미지 */}
      {product.images && !isImgError ? (
        <S.Image
          src={product.images}
          onLoad={() => setIsImgError(false)}
          onError={() => setIsImgError(true)}
        />
      ) : (
        <S.NoneImageContainer>
          <S.NoneImage src={img_default} />
        </S.NoneImageContainer>
      )}

      {/* 아이템 정보 */}
      <S.Detail>
        <div>
          <S.Header>
            <S.TitleWrapper>
              <S.Title>{product.name}</S.Title>
              {/* edit버튼 */}
            </S.TitleWrapper>
            <S.Price>{product.price.toLocaleString()}원</S.Price>
          </S.Header>
          <S.ItemInfo>
            <div>
              <S.Label>상품소개</S.Label>
              <S.Content>{product.description}</S.Content>
            </div>
            <S.TagContainer>
              <S.Label>상품태그</S.Label>
              <S.TagWrapper>
                {product.tags.map((tag) => (
                  <S.Tag key={tag}>#{tag}</S.Tag>
                ))}
              </S.TagWrapper>
            </S.TagContainer>
          </S.ItemInfo>
        </div>

        <S.UserWrapper>
          {/* 판매자 정보 */}
          <S.SellerContainer>
            <img src={ic_user} alt="판매자 프로필이미지" />
            <S.SellerInfo>
              <S.SellerName>{product.ownerNickname}</S.SellerName>
              <S.Updated>{product.createdAt}</S.Updated>
            </S.SellerInfo>
          </S.SellerContainer>
          {/* 좋아요버튼 */}
          <S.LikeWrapper>
            <S.Like src={ic_heart} />
            <S.LikeCount>{product.favoriteCount}</S.LikeCount>
          </S.LikeWrapper>
        </S.UserWrapper>
      </S.Detail>
    </S.DetailContainer>
  );
}
