import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "../components/Cards";
import Utils from "../components/Utils";
import Pagination from "../components/Pagination";
import { getItems } from "../apis/api";

const Items = () => {
  const [items, setItems] = useState([]);
  const bestItems = [...items]
    .sort((a, b) => b["favoriteCount"] - a["favoriteCount"])
    .slice(0, 4);

  useEffect(() => {
    getItems("/products").then((result) => setItems(result.list));
  }, []);

  return (
    <div>
      <ProductsWrapper>
        <BestProductsList>
          <span>베스트 상품</span>
          <Cards items={bestItems} />
        </BestProductsList>
        <AllProductsList>
          <div>
            <span>전체 상품</span>
            <Utils />
          </div>
          <Cards items={items} />
        </AllProductsList>
      </ProductsWrapper>
      <Pagination />
    </div>
  );
};

export default Items;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const BestProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AllProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
