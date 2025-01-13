import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Cards from "../components/Cards";
import Utils from "../components/Utils";
import Pagination from "../components/Pagination";
import { getItems } from "../apis/api";
import { debounce } from "lodash";
import AddProductButton from "../components/AddProductButton";
import SearchProducts from "../components/SearchProducts";
import DropdownProduct from "../components/DropdownProduct";

const Items = () => {
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("orderByLatest");
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const ONE_ITEM = 1;
  const TWO_ITEMS = 2;
  const FOUR_ITEMS = 4;

  const bestItems = useMemo(() => {
    if (768 < browserWidth && browserWidth < 1200) {
      return [...items]
        .sort((a, b) => b["favoriteCount"] - a["favoriteCount"])
        .slice(0, TWO_ITEMS);
    }
    if (374 < browserWidth && browserWidth < 769) {
      return [...items]
        .sort((a, b) => b["favoriteCount"] - a["favoriteCount"])
        .slice(0, ONE_ITEM);
    }
    return [...items]
      .sort((a, b) => b["favoriteCount"] - a["favoriteCount"])
      .slice(0, FOUR_ITEMS);
  }, [browserWidth, items]);

  const filteredAndSortedItems = useMemo(() => {
    let filtered = items.filter((item) => item.name.includes(keyword));
    if (sortOrder === "orderByFavoriteCount") {
      filtered = filtered.sort(
        (a, b) => b["favoriteCount"] - a["favoriteCount"]
      );
    } else {
      filtered = filtered.sort(
        (a, b) => new Date(b["createdAt"]) - new Date(a["createdAt"])
      );
    }
    return filtered;
  }, [items, keyword, sortOrder]);

  useEffect(() => {
    const handleResizeBrowserWidth = debounce(() => {
      setBrowserWidth(window.innerWidth);
    }, 200);

    getItems("/products").then((result) => setItems(result.list));
    window.addEventListener("resize", handleResizeBrowserWidth);
    return () => {
      window.removeEventListener("resize", handleResizeBrowserWidth);
    };
  }, []);

  return (
    <div>
      <ProductsWrapper>
        <BestProductsList>
          <Title>베스트 상품</Title>
          <Cards items={bestItems} browserWidth={browserWidth} name={"best"} />
        </BestProductsList>
        <AllProductsList>
          <UtilsWrapper>
            {browserWidth < 768 ? (
              <UtilBoxWrapper>
                <UtilBox>
                  <Title>전체 상품</Title>
                  <AddProductButton />
                </UtilBox>
                <UtilBox>
                  <SearchProducts
                    onFilterItems={setKeyword}
                    browserWidth={browserWidth}
                  />
                  <DropdownProduct
                    onSortOrderChange={setSortOrder}
                    browserWidth={browserWidth}
                  />
                </UtilBox>
              </UtilBoxWrapper>
            ) : (
              <React.Fragment>
                <Title>전체 상품</Title>
                <Utils
                  onFilterItems={setKeyword}
                  onSortOrderChange={setSortOrder}
                  browserWidth={browserWidth}
                />
              </React.Fragment>
            )}
          </UtilsWrapper>
          <Cards
            items={filteredAndSortedItems}
            browserWidth={browserWidth}
            name={"all"}
          />
        </AllProductsList>
      </ProductsWrapper>
      <Pagination />
    </div>
  );
};

export default Items;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: #111827;
`;

const BestProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AllProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const UtilsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UtilBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const UtilBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
`;
