import Header from "@/components/Header";
import ic_search from "@/assets/ic_search.svg";
import ic_sort from "@/assets/ic_sort.svg";
import ic_arrow_left from "@/assets/ic_arrow_left.svg";
import ic_arrow_right from "@/assets/ic_arrow_right.svg";
import ic_arrow_down from "@/assets/ic_arrow_down.svg";
import ItemList from "@/components/ItemList";
import { useState, useEffect } from "react";
import { BREAK_POINTS } from "@/constants/styles";
import { mockData, mockData1 } from "@/mockData";
import { fetchData } from "@/api/api";

let sortOption = {
  recent: "최신순",
  favorite: "좋아요순",
};

function Items() {
  const [width, setWidth] = useState(
    window.innerWidth < BREAK_POINTS.md
      ? "mobile"
      : window.innerWidth < BREAK_POINTS.xl
        ? "tablet"
        : "pc",
  );
  const [gridA, setGridA] = useState(1);
  const [gridB, setGridB] = useState(1);
  const [isMobileLayout, setIsMobileLayout] = useState(true);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(
    window.innerWidth < BREAK_POINTS.md
      ? 4
      : window.innerWidth < BREAK_POINTS.xl
        ? 6
        : 8,
  );
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetchData(page, pageSize, orderBy);
      setItems(res.list);
    };
    fetchItems();
  }, [page, pageSize, orderBy]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetchData(1, 4, "favorite");
      setBestItems(res.list);
    };
    fetchItems();
  }, []);

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const updateItemsToShow = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth < BREAK_POINTS.md) {
        setGridA("base1");
        setGridB("base2");
        setIsMobileLayout(true);
        setWidth("mobile");
        setPageSize(4);
      } else if (currentWidth < BREAK_POINTS.xl) {
        setGridA("md1");
        setGridB("md2");
        setIsMobileLayout(false);
        setWidth("tablet");
        setPageSize(6);
      } else {
        setGridA("xl1");
        setGridB("xl2");
        setIsMobileLayout(false);
        setWidth("pc");
        setPageSize(8);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleChange = (e) => {
    const keyword = e.target.value;
    const fetchItems = async () => {
      const res = await fetchData(page, pageSize, orderBy, keyword);
      setItems(res.list);
    };
    fetchItems();
  };

  return (
    <>
      <Header />
      <main className="m-auto px-4 pt-4 pb-8 xl:max-w-480">
        <div className="mb-6 md:mb-10">
          <div className="mb-4 text-xl font-bold">베스트 상품</div>
          <ItemList
            items={
              width === "mobile"
                ? bestItems.slice(0, 1)
                : width === "tablet"
                  ? bestItems.slice(0, 2)
                  : bestItems.slice(0, 4)
            }
            grid={gridA}
          />
        </div>
        <div>
          {isMobileLayout ? (
            <>
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xl font-bold">전체 상품</div>
                <button className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-gray-100">
                  상품 등록하기
                </button>
              </div>
              <div className="mb-4 flex gap-3.5">
                <div className="flex grow-1 gap-1 rounded-xl bg-gray-100 px-4 py-2">
                  <img src={ic_search} alt="" />
                  <input
                    className="w-full"
                    type="text"
                    placeholder="검색할 상품을 입력해주세요"
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <button
                    onClick={toggleSortDropdown}
                    className="flex size-10 cursor-pointer rounded-xl border-1 border-gray-200 p-2"
                  >
                    <img src={ic_sort} alt="" />
                  </button>
                  {isSortDropdownOpen ? (
                    <ul className="absolute top-11 right-0 w-32.5 rounded-xl border-1 border-gray-200 bg-white">
                      <li>
                        <button
                          id="sort-latest"
                          className="m-auto my-2 w-full cursor-pointer"
                        >
                          최신순
                        </button>
                      </li>
                      <li>
                        <button
                          id="sort-popular"
                          className="m-auto my-2 w-full cursor-pointer"
                        >
                          좋아요순
                        </button>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xl font-bold">전체 상품</div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1 rounded-xl bg-gray-100 px-4 py-2 md:w-88 xl:w-82">
                    <img src={ic_search} alt="" />
                    <input
                      className="w-full"
                      type="text"
                      placeholder="검색할 상품을 입력해주세요"
                      onChange={handleChange}
                    />
                  </div>
                  <button className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-gray-100">
                    상품 등록하기
                  </button>
                  <div className="relative">
                    <button
                      onClick={toggleSortDropdown}
                      className="flex cursor-pointer justify-between gap-6 rounded-lg border-1 border-gray-200 px-5 py-3"
                    >
                      <div>{sortOption[orderBy]}</div>
                      <img src={ic_arrow_down} alt="" />
                    </button>
                    {isSortDropdownOpen ? (
                      <ul className="absolute top-14 right-0 w-32.5 rounded-xl border-1 border-gray-200 bg-white">
                        <li>
                          <button
                            id="recent"
                            className="m-auto my-2 w-full cursor-pointer"
                            onClick={(e) => {
                              setOrderBy(e.target.id);
                            }}
                          >
                            최신순
                          </button>
                        </li>
                        <li>
                          <button
                            id="favorite"
                            className="m-auto my-2 w-full cursor-pointer"
                            onClick={(e) => {
                              setOrderBy(e.target.id);
                            }}
                          >
                            좋아요순
                          </button>
                        </li>
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </>
          )}
          <ItemList items={items} grid={gridB} />
          <div className="m-auto mt-10 flex w-fit gap-1">
            <button
              className={`size-10 cursor-pointer rounded-full border-1 border-gray-200 ${pages[0] === 1 ? "invisible" : ""}`}
              onClick={() => {
                setPages((prev) => prev.map((num) => num - 5));
                setPage((prev) => Math.floor(prev / 5) * 5);
              }}
            >
              <img className="m-auto w-fit" src={ic_arrow_left} alt="" />
            </button>
            {pages.map((pageNumber) => (
              <button
                key={pageNumber}
                value={pageNumber}
                className={`size-10 cursor-pointer rounded-full border-1 border-gray-200 font-semibold ${pageNumber === page ? "bg-blue-500 text-white" : "bg-white text-gray-500"}`}
                onClick={(e) => {
                  setPage(Number(e.target.value));
                }}
              >
                {pageNumber}
              </button>
            ))}
            <button
              className="size-10 cursor-pointer rounded-full border-1 border-gray-200"
              onClick={() => {
                setPages((prev) => prev.map((num) => num + 5));
                setPage((prev) => Math.ceil(prev / 5) * 5 + 1);
              }}
            >
              <img className="m-auto w-fit" src={ic_arrow_right} alt="" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Items;
