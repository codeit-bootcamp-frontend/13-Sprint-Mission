import { useState, useEffect } from "react";
//
import profile from "../../assets/icons/default.profile.icon.svg";
//
import { getProductInfo, ResponseData } from "../../api/product.api";
import * as S from "./ProductInfo.style";
import Tag from "../../components/Tag/Tag";
import BtnHeart from "../../components/common/BtnHeart/BtnHeart";
import { EditSelect } from "../../components/common/Select/Select";
import { useFormatDate, useFormatPrice } from "../../hooks/useFormatting";
//

export default function ProductInfo({ productId }: Params) {
  const [product, setProduct] = useState<ResponseData>();
  const formattedDate = useFormatDate(product?.createdAt || "");
  const formattedPrice = useFormatPrice(product?.price || 0, "KRW");

  //
  const handleLoad = async () => {
    const info = await getProductInfo({ productId });
    setProduct(info);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  const handleOnChange = () => {};
  return (
    <S.ProductInfoWrapper>
      {product?.images && product?.images?.length > 0 ? (
        <S.ImgDiv>
          <S.ProductImg src={product?.images[0]} alt="Product" />
        </S.ImgDiv>
      ) : (
        <S.ImgDiv>이미지가 없습니다.</S.ImgDiv>
      )}
      <S.InfoProfileWrapper>
        <S.InfoTagWrapper>
          <S.TitleEditBtnWrapper>
            <S.TitlePriceWrapper>
              <S.ProductTitle>
                {product?.name ?? "상품 이름 없음"}
              </S.ProductTitle>
              <S.ProductPrice>{formattedPrice || 0}원</S.ProductPrice>
            </S.TitlePriceWrapper>
            <EditSelect onChange={handleOnChange} />
          </S.TitleEditBtnWrapper>
          <div>
            <S.DesTitleContentWrapper>
              <S.DescriptionTitle>상품소개</S.DescriptionTitle>
              <S.ProductContent>
                {product?.description ?? "상품 설명 없음"}
              </S.ProductContent>
            </S.DesTitleContentWrapper>
            <S.DesTitleContentWrapper>
              <S.DescriptionTitle>상품 태그</S.DescriptionTitle>
              <Tag $product tags={product?.tags ?? []} />
            </S.DesTitleContentWrapper>
          </div>
        </S.InfoTagWrapper>
        <S.ProfileFavorite>
          <S.ProfileWrapper>
            <S.ProfileImg src={profile} alt="프로필이미지" />
            <div>
              <S.NickName>{product?.ownerNickname ?? "닉네임"}</S.NickName>
              <S.CreatedAt>{formattedDate || "날짜 정보 없음"}</S.CreatedAt>
            </div>
          </S.ProfileWrapper>
          <S.BorderLeft>
            <BtnHeart $small $border value={product?.favoriteCount ?? 0} />
          </S.BorderLeft>
        </S.ProfileFavorite>
      </S.InfoProfileWrapper>
    </S.ProductInfoWrapper>
  );
}
