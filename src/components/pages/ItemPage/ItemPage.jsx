import * as S from "./ItemPage.styles";
import BestItems from "../../Items/BestItems/BestItems";
import AllItems from "../../Items/AllItems/AllItems";
import { useEffect, useState } from "react";
import { getProducts } from "../../../api/products";
import Paging from "../../Paging/Paging";

export default function ItemPage() {
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [sortOption, setSortOption] = useState("최신순");
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  const orderByValue = sortOption === "최신순" ? "recent" : "favorite";

  const updateItems = () => {
    if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
      setPageSize(6);
    } else if (window.innerWidth <= 767) {
      setPageSize(4);
    } else {
      setPageSize(10);
    }
  };

  useEffect(() => {
    getProducts({
      page: 1,
      pageSize: totalItems,
      orderBy: "favorite",
      keyword: "",
    }).then((result) => {
      if (!result) return;
      const sortedBestItems = [...result.list].slice(0, 4);
      setBestItems(sortedBestItems);
    });
  }, [totalItems]);

  useEffect(() => {
    getProducts({ page: currentPage, pageSize: pageSize, orderBy: orderByValue, keyword: keyword }).then((result) => {
      if (!result) return;
      setItems(result.list);
      setTotalItems(result.totalCount);

      updateItems();
      window.addEventListener("resize", updateItems);

      return () => {
        window.removeEventListener("resize", updateItems);
      };
    });
  }, [currentPage, pageSize, orderByValue, keyword]);

  return (
    <S.Container>
      <BestItems bestItems={bestItems} />
      <AllItems items={items} sortOption={sortOption} setSortOption={setSortOption} setKeyword={setKeyword} />
      <Paging currentPage={currentPage} pageSize={pageSize} totalItemsCount={totalItems} setPage={setCurrentPage} />
    </S.Container>
  );
}
