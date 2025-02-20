// Pagination.jsx
import styled from "styled-components";
import theme from "../../styles/theme";
import arrow_left from "../../assets/images/icons/arrow_left.svg";
import arrow_right from "../../assets/images/icons/arrow_right.svg";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <PaginationWrapper>
      <ArrowButton onClick={handlePrev} disabled={currentPage === 1}>
        <img src={arrow_left} alt="이전" />
      </ArrowButton>

      {pageNumbers.map((number) => (
        <PageButton
          key={number}
          $isActive={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </PageButton>
      ))}

      <ArrowButton onClick={handleNext} disabled={currentPage === totalPages}>
        <img src={arrow_right} alt="다음" />
      </ArrowButton>
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 8px;
`;

const PageButton = styled.button`
  background-color: ${({ $isActive }) =>
    $isActive ? theme.colors.Primary200 : "white"};
  color: ${({ $isActive }) => ($isActive ? "white" : theme.colors.Gray500)};
  border: 1px solid ${theme.colors.Gray200};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font: ${theme.fonts.H5Regular};
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.Primary300};
    color: white;
  }
`;

const ArrowButton = styled.button`
  background-color: white;
  border: 1px solid ${theme.colors.Gray200};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:img {
    width: 16px;
    height: 16px;
  }
`;
