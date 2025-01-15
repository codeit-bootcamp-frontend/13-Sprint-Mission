import * as S from "./ItemPage.styles";
import BestItems from "../../Items/BestItems/BestItems";
import AllItems from "../../Items/AllItems/AllItems";
import { useEffect, useState } from "react";
import { getProducts } from "../../../api/products";

export default function ItemPage() {
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [sortOption, setSortOption] = useState("최신순");
  const [keyword, setKeyword] = useState("");

  const orderByValue = sortOption === "최신순" ? "recent" : "favorite";

  useEffect(() => {
    getProducts({ page: 1, pageSize: 207, orderBy: orderByValue, keyword: keyword }).then((result) => {
      if (!result) return;
      setItems(result.list);

      if (bestItems.length === 0) {
        const sortedBestItems = [...result.list].sort((a, b) => b["favoriteCount"] - a["favoriteCount"]).slice(0, 4);
        setBestItems(sortedBestItems);
      }
    });
  }, [orderByValue, keyword, bestItems.length]);

  return (
    <S.Container>
      <BestItems bestItems={bestItems} />
      <AllItems items={items} sortOption={sortOption} setSortOption={setSortOption} setKeyword={setKeyword} />
    </S.Container>
  );
}
