import img_home_item from "@/assets/img_home_item.png";
import img_home_search from "@/assets/img_home_search.png";
import img_home_register from "@/assets/img_home_register.png";
import img_home_top from "@/assets/img_home_top.png";
import img_home_bottom from "@/assets/img_home_bottom.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import PrimaryCard from "@/components/PrimaryCard";

const PRIMARY_CARDS = [
  {
    image: img_home_top,
    title: "일상의 모든 물건을 거래해 보세요",
    isButtonVisible: true,
  },
  {
    image: img_home_bottom,
    title: "믿을 수 있는 판다마켓 중고 거래",
    isButtonVisible: false,
  },
];

const FEATURE_CARDS = [
  {
    id: 1,
    image: img_home_item,
    tag: "Hot item",
    title: "인기 상품을 확인해 보세요",
    content: "가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요",
    isReversed: false,
  },
  {
    id: 2,
    image: img_home_search,
    tag: "Search",
    title: "구매를 원하는 상품을 검색하세요",
    content: "구매하고 싶은 물품은 검색해서 쉽게 찾아보세요",
    isReversed: true,
  },
  {
    id: 3,
    image: img_home_register,
    tag: "Register",
    title: "판매를 원하는 상품을 등록하세요",
    content: "어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요",
    isReversed: false,
  },
];

function Home() {
  return (
    <>
      <Header />
      <div className="flex h-135 w-full items-end justify-center bg-blue-100">
        <PrimaryCard {...PRIMARY_CARDS[0]} />
      </div>
      <div className="flex flex-col items-center pb-34.5">
        {FEATURE_CARDS.map((card) => (
          <div key={card.id} className="p-34.5">
            <FeatureCard {...card} />
          </div>
        ))}
      </div>
      <div className="flex h-135 w-full items-end justify-center bg-blue-100">
        <PrimaryCard {...PRIMARY_CARDS[1]} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
