import React from "react";
import styled from "styled-components";
import heartImg from "../assets/images/heartImg.svg";

const Cards = ({ items }) => {
  return (
    <ProductsListWrapper>
      {items.map((item) => {
        return (
          <ProductsList key={item.id}>
            <ProductsImg src={item.images[0]} alt="상품 이미지" />
            <ProductsInformationWrapper>
              <ProductInformation>{item.name}</ProductInformation>
              <ProductInformation>{item.price}</ProductInformation>
              <FavoriteWrapper>
                <FavoriteImg src={heartImg} alt="비어있는 하트 이미지" />
                <ProductInformation>{item.favoriteCount}</ProductInformation>
              </FavoriteWrapper>
            </ProductsInformationWrapper>
          </ProductsList>
        );
      })}
    </ProductsListWrapper>
  );
};

export default Cards;

const ProductsListWrapper = styled.ul`
  display: flex;
  width: 1200px;
  flex-wrap: wrap;
  gap: 24px;
`;

const ProductsList = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductsImg = styled.img`
  width: 282px;
  height: 282px;
  border-radius: 16px;
`;

const ProductsInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ProductInformation = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: #1f2937;
`;

const FavoriteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const FavoriteImg = styled.img`
  width: 16px;
  height: 16px;
`;
