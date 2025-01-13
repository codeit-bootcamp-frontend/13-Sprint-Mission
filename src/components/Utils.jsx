import React from "react";
import styled from "styled-components";
import SearchProducts from "./SearchProducts";
import DropdownProduct from "./DropdownProduct";
import AddProductButton from "./AddProductButton";

const Utils = ({ onFilterItems, onSortOrderChange, browserWidth }) => {
  return (
    <Wrapper>
      <SearchProducts
        onFilterItems={onFilterItems}
        browserWidth={browserWidth}
      />
      <AddProductButton />
      <DropdownProduct onSortOrderChange={onSortOrderChange} />
    </Wrapper>
  );
};

export default Utils;

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
