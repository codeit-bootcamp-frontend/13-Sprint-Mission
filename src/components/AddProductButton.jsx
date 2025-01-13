import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddProductButton = () => {
  const navigate = useNavigate();

  const handleMoveAddProduct = () => {
    navigate("/additem");
  };

  return (
    <AddProductButtonStyle onClick={handleMoveAddProduct}>
      상품 등록하기
    </AddProductButtonStyle>
  );
};

export default AddProductButton;

const AddProductButtonStyle = styled.span`
  padding: 8px 23px;
  background-color: #3692ff;
  border-radius: 8px;
  color: #f3f4f6;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  cursor: pointer;
`;
