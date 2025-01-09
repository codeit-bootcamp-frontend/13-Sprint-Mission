import React from "react";
import styled from "styled-components";
import SearchProducts from "./SearchProducts";
import DropdownProduct from "./DropdownProduct";
import { useNavigate } from "react-router-dom";

const Utils = () => {
  const navigate = useNavigate();
  const handleMoveAddProduct = () => {
    navigate("/additem");
  };

  return (
    <Wrapper>
      <SearchProducts />
      <AddProductButton onClick={handleMoveAddProduct}>
        상품 등록하기
      </AddProductButton>
      <DropdownProduct />
    </Wrapper>
  );
};

export default Utils;

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const AddProductButton = styled.span`
  padding: 8px 23px;
  background-color: #3692ff;
  border-radius: 8px;
  color: #f3f4f6;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  cursor: pointer;
`;
