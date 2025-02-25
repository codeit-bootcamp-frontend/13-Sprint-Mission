import * as S from "./BestItems.styles";
import { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { getProducts, Items } from "../../../api/products";
import useResize from "../../../hooks/useResize";

export interface BestItem {
  list: Items[];
}

export default function BestItems() {
  const [bestItems, setBestItems] = useState<Items[]>([]);
  const { showItems } = useResize(1, 2, 4);

  useEffect(() => {
    getProducts({
      page: 1,
      pageSize: 4,
      orderBy: "favorite",
      keyword: "",
    }).then((result: BestItem) => {
      if (!result) return;
      const sortedBestItems = [...result.list].slice(0, 4);
      setBestItems(sortedBestItems);
    });
  }, []);

  const responsiveItems = bestItems.slice(0, showItems);

  return (
    <S.BestContainer>
      <S.Title>베스트 상품</S.Title>
      <S.ItemCardContainer>
        {responsiveItems.map((items) => (
          <ItemCard key={items.id} list="best" {...items} />
        ))}
      </S.ItemCardContainer>
    </S.BestContainer>
  );
}
