//ItemsHeader.jsx
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";
import ic_search from "../../assets/images/icons/ic_search.svg";
import Dropdown from "../../components/common/Dropdown";

export default function ItemsHeader({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
}) {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Title>전체 상품</Title>
      <Container>
        <SearchInput
          type="text"
          placeholder="검색할 상품을 입력해 주세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={() => navigate("/additem")}>상품 등록하기</Button>
        <Dropdown sortOption={sortOption} setSortOption={setSortOption} />
      </Container>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Title = styled.h2`
  font: ${(props) => props.$font};
`;

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const SearchInput = styled.input`
  background-color: ${theme.colors.Gray100};
  background-image: url(${ic_search});
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 16px 16px;

  padding: 9px 20px 9px 40px;
  border: none;
  border-radius: 12px;
  width: 325px;
  height: 42px;
  /* position: fixed; */
  /* flex-grow: 1; */
  color: ${theme.colors.Gray400};
  font: ${theme.fonts.H5Bold};

  &::placeholder {
    color: ${theme.colors.Gray400};
    font: ${theme.fonts.H5Bold};
  }

  &:focus {
    outline: 1px solid ${theme.colors.Primary200};
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 23px;
  width: 133px;
  height: 42px;
  border: none;
  background-color: ${theme.colors.Primary200};
  color: white;
  font: ${theme.fonts.H5Regular};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.Primary300};
  }
`;
