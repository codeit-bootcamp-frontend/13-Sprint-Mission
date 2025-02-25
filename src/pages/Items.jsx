import Header from "@/components/Header";
import ic_search from "@/assets/ic_search.svg";
import ic_sort from "@/assets/ic_sort.svg";
import ic_arrow_left from "@/assets/ic_arrow_left.svg";
import ic_arrow_right from "@/assets/ic_arrow_right.svg";
import ItemList from "@/components/ItemList";
import { useState, useEffect } from "react";
import { BREAK_POINTS } from "@/constants/styles";
import { mockData, mockData1 } from "@/mockData";

let currentPage = 7;
let currentPages = [1, 2, 3, 4, 5];

function Items() {
  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://panda-market-api.vercel.app/products",
  //     {
  //       method: "GET",
  //     },
  //   );
  //   console.log(response);
  // };

  // fetchData();

  const [gridA, setGridA] = useState(1);
  const [gridB, setGridB] = useState(1);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      console.log(width);
      if (width < BREAK_POINTS.md) {
        setGridA("base1");
        setGridB("base2");
      } else if (width < BREAK_POINTS.xl) {
        setGridA("md1");
        setGridB("md2");
      } else {
        setGridA("xl1");
        setGridB("xl2");
      }
    };

    updateItemsToShow(); // 초기 값 설정
    window.addEventListener("resize", updateItemsToShow); // 리사이즈 감지

    return () => window.removeEventListener("resize", updateItemsToShow); // 클린업
  }, []);

  return (
    <>
      <Header />
      <main className="m-auto px-4 pt-4 pb-8 xl:max-w-480">
        <div className="mb-6 md:mb-10">
          <div className="mb-4 text-xl font-bold">베스트 상품</div>
          <ItemList items={mockData} grid={gridA} />
        </div>
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="text-xl font-bold">전체 상품</div>
            <button className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-gray-100">
              상품 등록하기
            </button>
          </div>
          <div className="mb-4 flex gap-3.5">
            <div className="flex grow-1 gap-1 rounded-xl bg-gray-100 px-4 py-2">
              <img src={ic_search} alt="" />
              <input type="text" placeholder="검색할 상품을 입력해주세요" />
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
          <ItemList items={mockData1} grid={gridB} />
          <div>
            <button>
              <img src={ic_arrow_left} alt="" />
            </button>
            {currentPages.map((page) => (
              <button key={page}>{page}</button>
            ))}
            <button>
              <img src={ic_arrow_right} alt="" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Items;
