import landing01 from "../../assets/LandingImg/landing01.svg";
import landing02 from "../../assets/LandingImg/landing02.svg";
import landing03 from "../../assets/LandingImg/landing03.svg";
//
import useWindowSize from "../../hooks/useWindowSize";
import "./Card.css";
//
const contentValue = {
  hotitem: {
    title: "Hot Item",
    src: landing01,
    subtitle: "인기상품을 확인해 보세요",
    detail: " 가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요",
  },
  search: {
    title: "Search",
    src: landing02,
    subtitle: "구매를 원하는 상품을 검색하세요",
    detail: " 구매하고 싶은 물품은 검색해서 쉽게 찾아보세요",
  },
  register: {
    title: "Register",
    src: landing03,
    subtitle: "판매를 원하는 상품을 등록하세요",
    detail: " 구매하고 싶은 물품은 검색해서 쉽게 찾아보세요",
  },
};
function Card({ value }) {
  const device = useWindowSize();
  const cardData = contentValue[value];
  if (!cardData) {
    return <div>다시 시도해 주세요.</div>;
  }

  return (
    <>
      <div device={device}>
        <img src={cardData.src} alt="이미지" />
        <div>
          <span>{cardData.title}</span>
          <p>{cardData.subtitle}</p>
          <p>{cardData.detail}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
