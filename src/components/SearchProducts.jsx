import React from "react";
import searchImg from "../assets/images/searchImg.svg";
import styled from "styled-components";

const SearchProducts = ({ onFilterItems }) => {
  const handleFilterItems = (e) => {
    onFilterItems(e.target.value);
  };

  return (
    <SearchInputWrapper>
      <img src={searchImg} alt="검색 이미지" />
      <SearchInput
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        onChange={handleFilterItems}
      />
    </SearchInputWrapper>
  );
};

export default SearchProducts;

const SearchInputWrapper = styled.div`
  display: flex;
  width: 325px;
  gap: 8px;
  align-items: center;
  background-color: #f3f4f6;
  padding: 9px 16px;
  border-radius: 12px;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  min-width: 202px;
  outline: none;
`;
