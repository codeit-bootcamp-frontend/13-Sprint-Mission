import { useNavigate, useParams } from "react-router-dom";
//
import ProductInfo from "./ProductInfo";
import Comments from "./Comments";
import * as S from "./Product.style";
//

export default function Product() {
  const navigate = useNavigate();
  const { productId } = useParams<Record<string, string>>();

  if (!productId) {
    navigate("/items");
    alert("해당 상품을 찾을 수 없습니다.");
    return;
  }
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
