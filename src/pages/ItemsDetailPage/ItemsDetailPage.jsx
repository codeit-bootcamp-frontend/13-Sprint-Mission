// itemsDetailPage.jsx
import styled from "styled-components";
import ItemDetail from "../../components/ItemDetail";
import theme from "../../styles/theme";
import { useNavigate, useParams } from "react-router-dom";
import backToListBtn from "../../assets/images/icons/backToListBtn.svg";
import ProductInquiry from "../../components/ProductInquiry";

export default function ItemsPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  console.log("ItemsPage에서 가져온 productId:", productId);

  return (
    <ItemContainer>
      <Item>
        <ItemDetail productId={productId} />
        <ProductInquiry productId={productId} />
      </Item>
      <BackToList onClick={() => navigate("/items")}>
        <img src={backToListBtn} alt="목록으로 돌아가기" />
      </BackToList>
    </ItemContainer>
  );
}

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
  margin: 24px 0 60px;
  gap: 62px;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const BackToList = styled.div`
  width: 240px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  font: ${theme.fonts.H4Bold};
  color: ${theme.colors.Gray100};
  cursor: pointer;
  img {
    width: 240px;
    height: 48px;
  }
`;
