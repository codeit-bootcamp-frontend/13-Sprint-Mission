import * as S from "./BestItems.styles";
import ItemCard from "../ItemCard/ItemCard";
import { useEffect } from "react";

export default function BestItems({ bestItems, updateBestItems }) {
  useEffect(() => {
    updateBestItems();
    window.addEventListener("resize", updateBestItems);

    return () => {
      window.removeEventListener("resize", updateBestItems);
    };
  }, [updateBestItems]);

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
