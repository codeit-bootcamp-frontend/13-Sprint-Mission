//MarketPage.jsx
import React from "react";
import { useEffect, useState } from "react";
import CardList from "../../components/common/CardList";
import { getProducts } from "../../api/itemApi";
import theme from "../../styles/theme";
import styled from "styled-components";

export default function MarketPage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts({ orderBy: "favorite", page: 1, pageSize: 10 })
      .then((response) => {
        setItems(response.list);
      })
      .catch((error) => {
        console.error("상품 불러오기 실패:", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const bestItems = [...items]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 4);

  return (
    <div style={{ overflowY: "auto" }}>
      <Title>베스트 상품</Title>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : (
        <CardList items={bestItems} size="large" />
      )}

      <Title>전체 상품</Title>
      {isLoading ? <p>로딩 중...</p> : <CardList items={items} size="small" />}
    </div>
  );
}

const Title = styled.h2`
  font: ${(props) => props.$font};
`;
