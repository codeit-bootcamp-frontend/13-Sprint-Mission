import * as S from "./BestItems.styles";
import ItemCard from "../ItemCard/ItemCard";
import { useState, useEffect } from "react";

export default function BestItems({ bestItems }) {
  const [showItems, setShowItems] = useState(4);

  const updateItems = () => {
    if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
      setShowItems(2);
    } else if (window.innerWidth <= 767) {
      setShowItems(1);
    } else {
      setShowItems(4);
    }
  };

  useEffect(() => {
    updateItems();
    window.addEventListener("resize", updateItems);

    return () => {
      window.removeEventListener("resize", updateItems);
    };
  }, []);

  const responsiveItems = bestItems.slice(0, showItems);

  return (
    <S.BestContainer>
      <S.Title>베스트 상품</S.Title>
      <S.ItemCardContainer>
        {responsiveItems.map((items, idx) => (
          <ItemCard key={idx} list="best" {...items} />
        ))}
      </S.ItemCardContainer>
    </S.BestContainer>
  );
}
