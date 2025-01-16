import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
import PageNav from "./PageNav";
import "./AllItems.css";
import SearchIcon from "../assets/icon/ic_search.svg";
import { useEffect, useState } from "react";
import { getItems } from "../api";

function AllItems() {
  const [order, setOrder] = useState("recent");
  const [items, setItems] = useState([]);

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleLoad = async (orderQuery) => {
    const { list } = await getItems(orderQuery);
    setItems(list);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

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
      <PageNav />
    </>
  );
}

export default AllItems;
