// CardList.jsx
import styled from "styled-components";
import Card from "./Card";

export default function CardList({ items, size }) {
  const displayItems =
    size === "large"
      ? items.slice(
          0,
          window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 4
        )
      : items;

  return (
    <CardListWrapper size={size}>
      {items.length === 0 ? (
        <EmptyMessage>상품이 없습니다.</EmptyMessage>
      ) : (
        displayItems.map((item) => (
          <Card key={item.id} item={item} size={size} />
        ))
      )}
    </CardListWrapper>
  );
}

const CardListWrapper = styled.div`
  display: grid;
  gap: 24px;
  width: 100%;

  ${({ size }) =>
    size === "large"
      ? `
    grid-template-columns: repeat(4, 1fr); // 베스트 상품 (기본)
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr); // 태블릿
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr); // 모바일
    }
  `
      : `
    grid-template-columns: repeat(5, 1fr); // 전체 상품 (기본)
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr); // 태블릿
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr); // 모바일
    }
  `}
`;

const EmptyMessage = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  color: #999;
  margin: 32px 0;
`;
