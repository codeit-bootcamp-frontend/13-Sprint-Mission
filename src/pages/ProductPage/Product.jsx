import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//
import ProductInfo from "./ProductInfo";
import Comments from "./Comments";
import * as S from "./Product.style";
//
export default function Product() {
  const { productId } = useParams();

  return (
    <>
      <S.PageWrapper>
        <S.ContentsWrapper>
          <S.Contents>
            <ProductInfo productId={productId} />
            <Comments productId={productId} />
          </S.Contents>
        </S.ContentsWrapper>
      </S.PageWrapper>
    </>
  );
}
