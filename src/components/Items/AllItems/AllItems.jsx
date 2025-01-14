import * as S from "./AllItems.styles";
import ItemCard from "../ItemCard/ItemCard";

export default function AllItems({ items }) {
  return (
    <S.AllContainer>
      <S.Title>전체 상품</S.Title>
      <S.ItemCardContainer>
        {items.map((items, idx) => (
          <ItemCard key={idx} list="all" {...items} />
        ))}
      </S.ItemCardContainer>
    </S.AllContainer>
  );
}
