import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItems } from "../../../apis/itemApi";
import useWindowSize from "../../../hooks/useWindowSize";
import ItemCard from "./ItemCard";
import SearchIcon from "../../../assets/icon/ic_search.svg";
import DownIcon from "../../../assets/icon/ic_arrow_down.svg";
import DropdownIcon from "../../../assets/icon/ic_sort.svg";
import BackIcon from "../../../assets/icon/ic_back.svg";
import NextIcon from "../../../assets/icon/ic_next.svg";
import styles from "./AllItemsSection.module.css";
import PrimaryButton from "../../../components/UI/PrimaryButton";

const BREAKPOINTS = {
  DESKTOP: 1200,
  TABLET: 768,
};

const PAGE_ARRAY = [1, 2, 3, 4, 5];
const PAGE_CHUNK_SIZE = 5;

function AllItems() {
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [pageBound, setPageBound] = useState(0);
  const [items, setItems] = useState([]);

  const MaxPageBound = Math.floor(
    totalItemCount / itemsPerPage / PAGE_CHUNK_SIZE
  );
  const { width } = useWindowSize();

  // 아이템 불러오기
  useEffect(() => {
    const handleLoad = async () => {
      try {
        const { list, totalCount } = await getItems({
          page,
          pageSize: itemsPerPage,
          order,
        });
        setItems(list);
        setTotalItemCount(totalCount);
      } catch (error) {
        alert(error.message);
        console.error("ERROR: ", error);
      }
    };
    handleLoad();
  }, [page, itemsPerPage, order]);

  // 아이템 정렬
  const handleOrderChange = (event) => {
    event.stopPropagation();
    let selectedOrder = event.target.textContent;
    if (selectedOrder === "최신순") {
      setOrder("recent");
    } else if (selectedOrder === "좋아요순") {
      setOrder("favorite");
    }
    setPage(1);
    setPageBound(0);
    setIsOpen(false);
  };

  // 페이지네이션
  const changePage = (e) => {
    setPage(Number(e.target.value));
  };

  const plusPageBound = () => {
    setPageBound(pageBound + 1);
    setPage(1 + PAGE_CHUNK_SIZE * (pageBound + 1));
  };

  const minusPageBound = () => {
    pageBound < 1 ? setPageBound(0) : setPageBound(pageBound - 1);
    pageBound < 1
      ? setPage(1 + PAGE_CHUNK_SIZE * pageBound)
      : setPage(1 + PAGE_CHUNK_SIZE * (pageBound - 1));
  };

  // 반응형
  useEffect(() => {
    let newPageSize;

    if (width > BREAKPOINTS.DESKTOP) {
      newPageSize = 10; // PC
    } else if (width > BREAKPOINTS.TABLET) {
      newPageSize = 6; // Tablet
    } else {
      newPageSize = 4; // Mobile
    }

    if (newPageSize !== itemsPerPage) {
      setItemsPerPage(newPageSize);
    }
  }, [width, itemsPerPage]);

  return (
    <div className={styles.container}>
      <PrimaryButton></PrimaryButton>
      <div className={styles.top}>
        <div className={styles.title}>전체 상품</div>
        <div className={styles.menu}>
          <form>
            <img src={SearchIcon} className={styles.searchIcon} alt="" />
            <input
              name="search"
              type="search"
              className={styles.searchBar}
              placeholder="검색할 상품을 입력해주세요"
            />
          </form>
          <Link to="/additem">
            <PrimaryButton type="button" className={styles.registerButton}>
              상품 등록하기
            </PrimaryButton>
          </Link>
          {/* 아이템 정렬 드롭다운*/}
          <button
            className={styles.orderSelect}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {width >= 768 ? (
              <>
                {order === "recent" ? "최신순" : "좋아요순"}
                <img src={DownIcon} alt="" />
              </>
            ) : (
              <img src={DropdownIcon} alt="" />
            )}
            {isOpen && (
              <div className={styles.orderSelectList}>
                <div
                  className={styles.orderSelectOption}
                  onClick={handleOrderChange}
                >
                  최신순
                </div>
                <div
                  className={styles.orderSelectOption}
                  onClick={handleOrderChange}
                >
                  좋아요순
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
      {/* 아이템 목록 */}
      <ul className={styles.itemList}>
        {items.map((item) => (
          <li key={item.id}>
            <ItemCard item={item} />
          </li>
        ))}
      </ul>
      {/* 페이지네이션 */}
      <div className={styles.pageButtons}>
        <button
          className={styles.pageButton}
          onClick={minusPageBound}
          disabled={pageBound < 1 ? true : false}
        >
          <img src={BackIcon} alt="" />
        </button>
        {PAGE_ARRAY.map((num) => (
          <button
            className={`${styles.pageButton} ${
              num === page ? styles.activePage : ""
            }`}
            value={num + PAGE_CHUNK_SIZE * pageBound}
            onClick={changePage}
          >
            {num + PAGE_CHUNK_SIZE * pageBound}
          </button>
        ))}
        <button
          className={styles.pageButton}
          onClick={plusPageBound}
          disabled={pageBound === MaxPageBound ? true : false}
        >
          <img src={NextIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AllItems;
