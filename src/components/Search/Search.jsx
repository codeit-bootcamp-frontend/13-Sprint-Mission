import * as S from "./Search.styles";
import searchImg from "../../assets/icons/search.svg";
import { useMemo } from "react";
import { debounce } from "lodash";

export default function Search({ onSearch }) {
  const debouncedOnSearch = useMemo(() => debounce(onSearch, 500), [onSearch]);

  const handleSearchChange = (e) => {
    const search = e.target.value;
    debouncedOnSearch(search);
  };

  return (
    <S.SearchContainer>
      <S.SearchImg src={searchImg} />
      <S.Input type="text" placeholder="검색할 상품을 입력해주세요" onChange={handleSearchChange} />
    </S.SearchContainer>
  );
}
