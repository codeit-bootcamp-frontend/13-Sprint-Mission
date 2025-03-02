import ic_search from "@/assets/ic_search.svg";
import ic_sort from "@/assets/ic_sort.svg";
import ic_arrow_left from "@/assets/ic_arrow_left.svg";
import ic_arrow_right from "@/assets/ic_arrow_right.svg";
import ic_arrow_down from "@/assets/ic_arrow_down.svg";
import Header from "@/components/Header";
import ItemList from "@/components/ItemList";
import useResponsiveLayout from "@/hooks/useResponsiveLayout";
import { useState, useEffect } from "react";
import { getItems } from "@/api/api";

let sortOption = {
  recent: "최신순",
  favorite: "좋아요순",
};

const LAYOUT_BEST_ITEMS = {
  mobile: "grid grid-cols-1 grid-rows-1 gap-2.5",
  tablet: "grid grid-cols-2 grid-rows-1 gap-2.5",
  desktop: "grid grid-cols-4 grid-rows-1 gap-6",
};

const LAYOUT_ITEMS = {
  mobile: "grid grid-cols-2 grid-rows-2 gap-2.5",
  tablet: "grid grid-cols-3 grid-rows-2 gap-2.5",
  desktop: "grid grid-cols-4 grid-rows-2 gap-6",
};

const PAGE_SIZE = {
  mobile: 4,
  tablet: 6,
  desktop: 8,
};

function Items() {
  const { layoutType } = useResponsiveLayout({
    onLayoutChange: (newLayoutType) => {
      setBestItemsLayout(LAYOUT_BEST_ITEMS[newLayoutType]);
      setItemsLayout(LAYOUT_ITEMS[newLayoutType]);
      setPageSize(PAGE_SIZE[newLayoutType]);
    },
  });
  const [bestItemsLayout, setBestItemsLayout] = useState(
    LAYOUT_BEST_ITEMS[layoutType],
  );
  const [itemsLayout, setItemsLayout] = useState(LAYOUT_ITEMS[layoutType]);
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE[layoutType]);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getItems(page, pageSize, orderBy);
      setItems(res.list);
    };
    fetchItems();
  }, [page, pageSize, orderBy]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getItems(1, 4, "favorite");
      setBestItems(res.list);
    };
    fetchItems();
  }, []);

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const keyword = e.target.value;
    const fetchItems = async () => {
      const res = await getItems(page, pageSize, orderBy, keyword);
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
              layoutType === "mobile"
                ? bestItems.slice(0, 1)
                : layoutType === "tablet"
                  ? bestItems.slice(0, 2)
                  : bestItems.slice(0, 4)
            }
            itemsLayout={bestItemsLayout}
          />
        </div>
        <div>
          {layoutType == "mobile" ? (
            <>
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xl font-bold">전체 상품</div>
                <button className="cursor-pointer rounded-lg bg-blue-500 px-6 py-3 font-semibold text-gray-100">
                  상품 등록하기
                </button>
              </div>
              <div className="mb-4 flex gap-3.5">
                <div className="flex grow-1 gap-1 rounded-xl bg-gray-100 px-4 py-2">
                  <img src={ic_search} alt="" />
                  <input
                    className="w-full border-none outline-none"
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
                      className="w-full border-none outline-none"
                      type="text"
                      placeholder="검색할 상품을 입력해주세요"
                      onChange={handleChange}
                    />
                  </div>
                  <button className="cursor-pointer rounded-lg bg-blue-500 px-6 py-3 font-semibold text-gray-100">
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
          <ItemList items={items} itemsLayout={itemsLayout} />
          <div className="m-auto mt-10 flex w-fit gap-1">
            <button
              className={`size-10 cursor-pointer rounded-full border-1 border-gray-200 ${pageNumbers[0] === 1 ? "invisible" : ""}`}
              onClick={() => {
                setPageNumbers((prev) => prev.map((num) => num - 5));
                setPage((prev) => Math.floor(prev / 5) * 5);
              }}
            >
              <img className="m-auto w-fit" src={ic_arrow_left} alt="" />
            </button>
            {pageNumbers.map((pageNumber) => (
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
                setPageNumbers((prev) => prev.map((num) => num + 5));
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
