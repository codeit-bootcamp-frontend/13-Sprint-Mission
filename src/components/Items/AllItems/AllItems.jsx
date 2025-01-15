import * as S from "./AllItems.styles";
import ItemCard from "../ItemCard/ItemCard";
import Dropdown from "../../common/Dropdown/Dropdown";

const list = ["최신순", "좋아요순"];

export default function AllItems({ items, sortOption, setSortOption }) {
  const handleChangeClick = (sortOption) => {
    setSortOption(sortOption);
  };

  return (
    <S.AllContainer>
      <S.AllHeader>
        <S.Title>전체 상품</S.Title>
        <S.Filter>
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
