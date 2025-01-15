import * as S from "./AllItems.styles";
import ItemCard from "../ItemCard/ItemCard";
import Dropdown from "../../common/Dropdown/Dropdown";
import { Link } from "react-router-dom";
import Search from "../../Search/Search";

const list = ["최신순", "좋아요순"];

export default function AllItems({ items, sortOption, setSortOption, setKeyword }) {
  const handleChangeClick = (sortOption) => {
    setSortOption(sortOption);
  };

  return (
    <S.AllContainer>
      <S.AllHeader>
        <S.Title>전체 상품</S.Title>
        <S.Filter>
          <Search onSearch={setKeyword} />
          <Link to="/addItem">
            <S.AddBtn>상품 등록하기</S.AddBtn>
          </Link>
          <Dropdown sortOption={sortOption} list={list} onChange={handleChangeClick} />
        </S.Filter>
      </S.AllHeader>
      <S.ItemCardContainer>
        {items.map((items, idx) => (
          <ItemCard key={idx} list="all" {...items} />
        ))}
      </S.ItemCardContainer>
    </S.AllContainer>
  );
}
