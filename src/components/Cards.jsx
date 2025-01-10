import React from "react";
import styled from "styled-components";
import heartImg from "../assets/images/heartImg.svg";

const Cards = ({ items, browserWidth, name }) => {
  return (
    <ProductsListWrapper browserWidth={browserWidth}>
      {items.map((item) => {
        return (
          <ProductsList key={item.id}>
            <ProductsImg
              browserWidth={browserWidth}
              name={name}
              src={item.images[0]}
              alt="상품 이미지"
            />
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
  width: ${({ browserWidth }) => {
    if (767 < browserWidth && browserWidth < 1200) {
      return "696px";
    }
    if (374 < browserWidth && browserWidth < 768) {
      return "344px";
    }
    return "1200px";
  }};
  flex-wrap: wrap;
  gap: ${({ browserWidth }) => {
    if (374 < browserWidth && browserWidth < 1200) {
      if (browserWidth < 767) {
        return "8px";
      }
      return "10px";
    }

    return "23px";
  }};
`;

const ProductsList = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductsImg = styled.img`
  width: ${({ browserWidth, name }) => {
    if (browserWidth > 1200 && name === "all") {
      return "221px";
    }
    if (374 < browserWidth && browserWidth < 1200) {
      if (name === "all") {
        if (browserWidth < 768) {
          return "168px";
        }
        return "221px";
      }
      return "343px";
    }

    return "282px";
  }};
  height: ${({ browserWidth, name }) => {
    if (browserWidth > 1200 && name === "all") {
      return "221px";
    }
    if (374 < browserWidth && browserWidth < 1200) {
      if (name === "all") {
        if (browserWidth < 768) {
          return "168px";
        }
        return "221px";
      }
      return "343px";
    }
    return "282px";
  }};
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
