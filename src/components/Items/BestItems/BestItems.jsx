import * as S from "./BestItems.styles";
import ItemCard from "../ItemCard/ItemCard";

export default function BestItems({ bestItems }) {
  return (
    <S.BestContainer>
      <S.Title>베스트 상품</S.Title>
      <S.ItemCardContainer>
        {bestItems.map((items, idx) => (
          <ItemCard key={idx} list="best" {...items} />
        ))}
      </S.ItemCardContainer>
    </S.BestContainer>
  );
}
