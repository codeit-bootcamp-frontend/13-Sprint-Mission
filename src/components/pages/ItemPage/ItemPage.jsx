import * as S from "./ItemPage.styles";
import BestItems from "../../Items/BestItems/BestItems";
import AllItems from "../../Items/AllItems/AllItems";
import { useEffect, useState } from "react";
import { getProducts } from "../../../api/products";

export default function ItemPage() {
  const [items, setItems] = useState([]);

  const bestItems = [...items].sort((a, b) => b["favoriteCount"] - a["favoriteCount"]).slice(0, 4);

  useEffect(() => {
    getProducts({ page: 1, pageSize: 10, orderBy: "recent", keyword: "" }).then((result) => {
      if (result) setItems(result.list);
    });
  }, []);

  return (
    <S.Container>
      <BestItems bestItems={bestItems} />
      <AllItems items={items} />
    </S.Container>
  );
}
