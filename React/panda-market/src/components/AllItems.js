import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
import "./AllItems.css";
import SearchIcon from "../assets/icon/ic_search.svg";
import BackIcon from "../assets/icon/ic_back.svg";
import NextIcon from "../assets/icon/ic_next.svg";
import { useEffect, useState } from "react";
import { getItems } from "../api";

function AllItems() {
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pageBound, setPageBound] = useState(0);
  const [items, setItems] = useState([]);
  const pageArr = [1, 2, 3, 4, 5];

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleLoad = async (query) => {
    const { list } = await getItems(query);
    setItems(list);
  };

  const changePage = (e) => {
    setPage(e.target.value);
  };

  const plusPageBound = () => {
    setPageBound(pageBound + 1);
    setPage(1 + 5 * (pageBound + 1));
  };

  const minusPageBound = () => {
    pageBound < 1 ? setPageBound(0) : setPageBound(pageBound - 1);
    pageBound < 1
      ? setPage(1 + 5 * pageBound)
      : setPage(1 + 5 * (pageBound - 1));
  };

  useEffect(() => {
    handleLoad({ page, pageSize, order });
  }, [page, order]);

  return (
    <>
      <div className="top">
        <div className="title">전체 상품</div>
        <div className="menu">
          <form>
            <img src={SearchIcon} className="searchIcon" alt="검색" />
            <input
              name="search"
              className="searchBar"
              placeholder="검색할 상품을 입력해주세요"
            />
          </form>
          <Link to="/additem">
            <button type="button" className="registerButton">
              상품 등록하기
            </button>
          </Link>
          <select className="orderSelect" onChange={handleOrderChange}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <ItemList items={items} best={false} />
      <div className="pageButtons">
        <button className="pageButton" onClick={minusPageBound}>
          <img src={BackIcon} alt="이전 페이지" />
        </button>
        {pageArr.map((num) => (
          <button
            className="pageButton"
            value={num + 5 * pageBound}
            onClick={changePage}
          >
            {num + 5 * pageBound}
          </button>
        ))}

        <button className="pageButton" onClick={plusPageBound}>
          <img src={NextIcon} alt="다음 페이지" />
        </button>
      </div>
    </>
  );
}

export default AllItems;
