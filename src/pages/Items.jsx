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
        <div>
          <div className="mb-4 text-xl font-bold">베스트 상품</div>
          <ItemList items={mockData} grid={gridA} />
        </div>
        <div>
          <div>
            <div className="mb-4 text-xl font-bold">전체 상품</div>
            <button>상품 등록하기</button>
            <div>
              <img src={ic_search} alt="" />
              <input type="text" placeholder="검색할 상품을 입력해주세요" />
            </div>
            <button>
              <img src={ic_sort} alt="" />
            </button>
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
        </div>
      </main>
    </>
  );
}

export default Items;
