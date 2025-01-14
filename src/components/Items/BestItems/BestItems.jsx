import * as S from "./BestItems.styles";
import ItemCard from "../ItemCard/ItemCard";
import img from "../../../assets/icons/panda.svg";

const data = [
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
];

export default function BestItems() {
  return (
    <S.BestContainer>
      <S.Title>베스트 상품</S.Title>
      <S.ItemCardContainer>
        {data.map((v, idx) => (
          <ItemCard key={idx} list="best" {...v} />
        ))}
      </S.ItemCardContainer>
    </S.BestContainer>
  );
}
