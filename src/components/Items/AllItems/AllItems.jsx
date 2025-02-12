import * as S from "./AllItems.styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import Dropdown from "../../common/Dropdown/Dropdown";
import Search from "../../Search/Search";
import NoneItem from "../../NoneItem/NoneItem";
import { getProducts } from "../../../api/products";
import Paging from "../../Paging/Paging";
import useResize from "../../../hooks/useResize";

const LIST = ["최신순", "좋아요순"];

export default function AllItems() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("최신순");
  const [keyword, setKeyword] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const { showItems } = useResize(4, 6, 10);

  const orderByValue = sortOption === "최신순" ? "recent" : "favorite";

  useEffect(() => {
    getProducts({
      page: currentPage,
      pageSize: showItems,
      orderBy: orderByValue,
      keyword: keyword,
    }).then((result) => {
      if (!result) return;
      setItems(result.list);
      setTotalItems(result.totalCount);
    });
  }, [currentPage, showItems, orderByValue, keyword]);

  const handleChangeClick = (sortOption) => {
    setSortOption(sortOption);
    setCurrentPage(1);
  };

  return (
    <S.AllItems>
      <S.AllContainer>
        <S.AllHeader>
          <S.Div>
            <S.Title>전체 상품</S.Title>
            <Link to="/addItem">
              <S.AddBtnForMedia>상품 등록하기</S.AddBtnForMedia>
            </Link>
          </S.Div>
          <S.Filter>
            <Search onSearch={setKeyword} />
            <Link to="/addItem">
              <S.AddBtn>상품 등록하기</S.AddBtn>
            </Link>
            <Dropdown
              sortOption={sortOption}
              list={LIST}
              onChange={handleChangeClick}
            />
          </S.Filter>
        </S.AllHeader>
        {items.length !== 0 ? (
          <S.ItemCardContainer>
            {items.map((items, idx) => (
              <ItemCard key={items.id} list="all" {...items} />
            ))}
          </S.ItemCardContainer>
        ) : (
          <NoneItem />
        )}
      </S.AllContainer>
      {items.length !== 0 && (
        <Paging
          currentPage={currentPage}
          pageSize={showItems}
          totalItemsCount={totalItems}
          setPage={setCurrentPage}
        />
      )}
    </S.AllItems>
  );
}
