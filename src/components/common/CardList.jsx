// CardList.jsx
import styled from "styled-components";
import Card from "./Card";

export default function CardList({ items, size }) {
  return (
    <CardListWrapper>
      {items.length === 0 ? (
        <EmptyMessage>상품이 없습니다.</EmptyMessage>
      ) : (
        items.map((item) => <Card key={item.id} item={item} size={size} />)
      )}
    </CardListWrapper>
  );
}

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  width: 100%;
  /* width: 1200px; */
  /* grid-auto-rows: 1fr; // */
`;

const EmptyMessage = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  color: #999;
  margin: 32px 0;
`;
