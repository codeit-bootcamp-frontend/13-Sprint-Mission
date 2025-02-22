// CardList.jsx
import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { BREAKPOINTS } from "../../constants/constants";

export default function CardList({ items, size }) {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const updateVisibleItems = () => {
      const maxItems =
        window.innerWidth <= BREAKPOINTS.MOBILE
          ? size === "large "
            ? 1
            : 4
          : window.innerWidth <= BREAKPOINTS.TABLET
          ? size === "large"
            ? 2
            : 6
          : window.innerWidth <= BREAKPOINTS.LAPTOP
          ? size === "large"
            ? 3
            : 8
          : size === "large"
          ? 4
          : 10;

      setVisibleItems(items.slice(0, maxItems));
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [items, size]);

  return (
    <CardListWrapper size={size}>
      {visibleItems.length === 0 ? (
        <EmptyMessage>상품이 없습니다.</EmptyMessage>
      ) : (
        visibleItems.map((item) => (
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
    @media (max-width: ${BREAKPOINTS.LAPTOP}) {
    grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: ${BREAKPOINTS.TABLET}px) {
      grid-template-columns: repeat(2, 1fr); 
    }
    @media (max-width: ${BREAKPOINTS.MOBILE}px) {
      grid-template-columns: repeat(1, 1fr); 
    }
  `
      : `
    grid-template-columns: repeat(5, 1fr); // 전체 상품 (기본)
        @media (max-width: ${BREAKPOINTS.LAPTOP}px) {
      grid-template-columns: repeat(4, 1fr); 
    }
    @media (max-width: ${BREAKPOINTS.TABLET}px) {
      grid-template-columns: repeat(3, 1fr); 
    }
    @media (max-width: ${BREAKPOINTS.MOBILE}px) {
      grid-template-columns: repeat(2, 1fr); 
    }
  `}
`;

const EmptyMessage = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  color: #999;
  margin: 32px 0;
`;
