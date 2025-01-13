import React, { useState } from "react";
import styled from "styled-components";
import sortImg from "../assets/images/sortImg.svg";

const DropdownProduct = ({ onSortOrderChange, browserWidth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("최신순");

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleSelect = (optionValue, optionLabel) => {
    setSelectedValue(optionLabel);
    setIsOpen(false);
    onSortOrderChange(optionValue);
  };

  return (
    <DropdownWrapper browserWidth={browserWidth}>
      <DropdownButton browserWidth={browserWidth} onClick={handleToggle}>
        {browserWidth < 768 ? (
          <SortImg src={sortImg} alt="분류 이미지" />
        ) : (
          selectedValue
        )}
      </DropdownButton>
      <DropdownMenu open={isOpen}>
        <DropdownItem onClick={() => handleSelect("orderByLatest", "최신순")}>
          최신순
        </DropdownItem>
        <DropdownItem
          onClick={() => handleSelect("orderByFavoriteCount", "좋아요순")}
        >
          좋아요순
        </DropdownItem>
      </DropdownMenu>
    </DropdownWrapper>
  );
};

export default DropdownProduct;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ browserWidth }) => (browserWidth < 768 ? "42px" : "130px")};
  height: 42px;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background-color: #ffffff;
  font-size: 14px;
  color: #1f2937;
  cursor: pointer;
  text-align: left;

  &:after {
    content: ${({ browserWidth }) => (browserWidth < 768 ? "" : "▼")};
    float: right;
    font-size: 12px;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  width: 130px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 5px 0;
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  color: #1f2937;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const SortImg = styled.img`
  width: 24px;
  height: 24px;
`;
