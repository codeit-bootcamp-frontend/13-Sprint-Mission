import React from "react";

const DropdownProduct = ({ onSortOrderChange }) => {
  const handleSortOrderChange = (e) => {
    onSortOrderChange(e.target.value);
  };
  return (
    <div>
      <select
        name="order_by"
        id="sortOrderSelector"
        onChange={handleSortOrderChange}
      >
        <option value="orderByLatest">최신순</option>
        <option value="orderByFavoriteCount">좋아요순</option>
      </select>
    </div>
  );
};

export default DropdownProduct;
