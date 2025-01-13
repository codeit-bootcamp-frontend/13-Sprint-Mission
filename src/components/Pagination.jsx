import React from "react";
import styled from "styled-components";

const Pagination = () => {
  return (
    <PaginationWrapper>
      <PaginationItem>{`<`}</PaginationItem>
      <PaginationItem>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>5</PaginationItem>
      <PaginationItem>{`>`}</PaginationItem>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 43px 0 58px;
  gap: 4px;
`;
const PaginationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  font-weight: 600;
  background-color: transparent;

  &:hover {
    color: #f9fafb;
    background-color: #2f80ed;
    border-color: #2f80ed;
    cursor: pointer;
  }
`;
