import * as S from "./AllItems.styles";
import ItemCard from "../ItemCard/ItemCard";
import img from "../../../assets/icons/panda.svg";

const data = [
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
  { image: img, name: "애옹", price: 100000, favoriteCount: 230 },
];

export default function AllItems() {
  return (
    <S.AllContainer>
      <S.Title>전체 상품</S.Title>
      <S.ItemCardContainer>
        {data.map((v, idx) => (
          <ItemCard key={idx} list="all" {...v} />
        ))}
      </S.ItemCardContainer>
    </S.AllContainer>
  );
}
