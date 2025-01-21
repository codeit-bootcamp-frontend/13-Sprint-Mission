import * as S from "./BestItems.styles";
import { useState, useEffect, useCallback } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { getProducts } from "../../../api/products";

export default function BestItems() {
  const [bestItems, setBestItems] = useState([]);
  const [showItems, setShowItems] = useState(4);

  useEffect(() => {
    getProducts({
      page: 1,
      pageSize: showItems,
      orderBy: "favorite",
      keyword: "",
    }).then((result) => {
      if (!result) return;
      const sortedBestItems = [...result.list].slice(0, 4);
      setBestItems(sortedBestItems);
    });
  }, [showItems]);

  const updateBestItems = useCallback(() => {
    if (window.innerWidth <= 767) {
      setShowItems(1);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
      setShowItems(2);
    } else {
      setShowItems(4);
    }
  }, []);

  const responsiveItems = bestItems.slice(0, showItems);

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
        {responsiveItems.map((items, idx) => (
          <ItemCard key={idx} list="best" {...items} />
        ))}
      </S.ItemCardContainer>
    </S.BestContainer>
  );
}
