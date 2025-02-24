import Header from "@/components/Header";
import ic_heart from "@/assets/ic_heart.svg";
import ic_search from "@/assets/ic_search.svg";
import ic_sort from "@/assets/ic_sort.svg";
import ic_arrow_left from "@/assets/ic_arrow_left.svg";
import ic_arrow_right from "@/assets/ic_arrow_right.svg";

let currentPage = 7;
let currentPages = [1, 2, 3, 4, 5];
const mockData = [
  {
    id: 607,
    name: "1",
    description: "string",
    price: 0,
    tags: ["전자제품"],
    images: [
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/19/1740125660269/thumbnail-unix.png",
    ],
    ownerId: 19,
    favoriteCount: 1,
    createdAt: "2025-02-21T08:14:45.093Z",
    updatedAt: "2025-02-21T08:14:57.697Z",
  },
  {
    id: 607,
    name: "33",
    description: "string",
    price: 0,
    tags: ["전자제품"],
    images: [
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/19/1740125660269/thumbnail-unix.png",
    ],
    ownerId: 19,
    favoriteCount: 1,
    createdAt: "2025-02-21T08:14:45.093Z",
    updatedAt: "2025-02-21T08:14:57.697Z",
  },
  {
    id: 607,
    name: "이미지테스트",
    description: "string",
    price: 0,
    tags: ["전자제품"],
    images: [
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/19/1740125660269/thumbnail-unix.png",
    ],
    ownerId: 19,
    favoriteCount: 1,
    createdAt: "2025-02-21T08:14:45.093Z",
    updatedAt: "2025-02-21T08:14:57.697Z",
  },
];

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

  return (
    <>
      <Header />
      <main className="px-4 pt-4 pb-8">
        <div>
          <div className="mb-4 text-xl font-bold">베스트 상품</div>
          <ul className="flex flex-wrap gap-2.5">
            {mockData.map((item) => (
              <li
                key={item.id}
                className="flex shrink-1 grow-1 basis-full flex-col items-start sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <img
                  className="mb-2.5 rounded-2xl"
                  src={item.images[0]}
                  alt=""
                />
                <div className="flex flex-col items-start gap-1.5">
                  <div className="text-sm text-gray-800">{item.name}</div>
                  <div className="font-bold text-gray-800">{item.price}</div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <img src={ic_heart} alt="" />
                    <div>{item.favoriteCount}</div>
                  </div>
                </div>
                <button>
                  <img src={ic_sort} alt="" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <div className="mb-4 text-xl font-bold">전체 상품</div>
            <button>상품 등록하기</button>
            <div>
              <img src={ic_search} alt="" />
              <input type="text" placeholder="검색할 상품을 입력해주세요" />
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {mockData.map((item) => (
                <li
                  key={item.id}
                  className="flex shrink-1 grow-1 basis-full flex-col items-start sm:basis-1/2 md:basis-1/3 lg:basis-1/2"
                >
                  <img
                    className="mb-2.5 rounded-xl"
                    src={item.images[0]}
                    alt=""
                  />
                  <div className="flex flex-col items-start gap-1.5">
                    <div className="text-sm text-gray-800">{item.name}</div>
                    <div className="font-bold text-gray-800">{item.price}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <img src={ic_heart} alt="" />
                      <div>{item.favoriteCount}</div>
                    </div>
                  </div>
                  <button>
                    <img src={ic_sort} alt="" />
                  </button>
                </li>
              ))}
            </ul>
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
