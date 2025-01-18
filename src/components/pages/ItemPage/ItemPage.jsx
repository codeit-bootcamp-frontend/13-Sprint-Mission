import * as S from "./ItemPage.styles";
import BestItems from "../../Items/BestItems/BestItems";
import AllItems from "../../Items/AllItems/AllItems";
import { useEffect, useState } from "react";
import { getProducts } from "../../../api/products";
import Paging from "../../Paging/Paging";

export default function ItemPage() {
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOption, setSortOption] = useState("최신순");
  const [keyword, setKeyword] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [showItems, setShowItems] = useState(4);

  const orderByValue = sortOption === "최신순" ? "recent" : "favorite";

  const updateItems = () => {
    if (window.innerWidth <= 767) {
      setPageSize(4);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
      setPageSize(6);
    } else {
      setPageSize(10);
    }
  };

  const updateBestItems = () => {
    if (window.innerWidth <= 767) {
      setShowItems(1);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
      setShowItems(2);
    } else {
      setShowItems(4);
    }
  };

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

  useEffect(() => {
    getProducts({
      page: currentPage,
      pageSize: pageSize,
      orderBy: orderByValue,
      keyword: keyword,
    }).then((result) => {
      if (!result) return;
      setItems(result.list);
      setTotalItems(result.totalCount);
    });
  }, [currentPage, pageSize, orderByValue, keyword]);

  useEffect(() => {
    updateItems();
    window.addEventListener("resize", updateItems);

    return () => {
      window.removeEventListener("resize", updateItems);
    };
  }, []);

  const handleChangeClick = (sortOption) => {
    setSortOption(sortOption);
  };

  const responsiveItems = bestItems.slice(0, showItems);

  return (
    <S.Container>
      <BestItems bestItems={responsiveItems} updateBestItems={updateBestItems} />
      <AllItems items={items} sortOption={sortOption} onChange={handleChangeClick} setKeyword={setKeyword} />
      {items.length !== 0 && (
        <Paging currentPage={currentPage} pageSize={pageSize} totalItemsCount={totalItems} setPage={setCurrentPage} />
      )}
    </S.Container>
  );
}
