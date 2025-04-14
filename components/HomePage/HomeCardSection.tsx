import Image from "next/image";

const CARD = [
  {
    title: "Hot item",
    subtitle: "인기 상품을\n확인해 보세요",
    text: "가장 HOT한 중고거래 물품을\n판다 마켓에서 확인해 보세요",
    img: "/icons/item.svg",
  },
  {
    title: "Search",
    subtitle: "구매를 원하는\n상품을 검색하세요",
    text: "구매하고 싶은 물품은 검색해서\n쉽게 찾아보세요",
    img: "/icons/searchImage.svg",
    reverse: true,
  },
  {
    title: "Register",
    subtitle: "판매를 원하는\n상품을 등록하세요",
    text: "어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요",
    img: "/icons/register.svg",
  },
];

export default function HomeCardSection() {
  return (
    <section className="mx-auto flex max-w-300 flex-col gap-10 px-4 py-30 md:gap-13">
      {CARD.map((card) => (
        <div key={card.title} className="lg:py-[138px]">
          <div
            key={card.title}
            className={`bg-bg mx-auto flex flex-col gap-6 rounded-xl lg:gap-16 ${card.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} `}
          >
            <Image
              width={579}
              height={444}
              src={card.img}
              alt={card.title}
              className={`mx-auto h-auto w-[696px] min-w-[344px] lg:m-0 lg:w-[579px] ${card.reverse ? "lg:mr-5" : "lg:ml-5"}`}
            />
            <div
              className={`flex flex-col justify-center gap-3 ${card.reverse ? "text-right md:pl-5" : "text-left md:pr-5"}`}
            >
              <p className="text-blue text-bold16 md:text-bold18">
                {card.title}
              </p>
              <h2 className="text-bold24 text-gray700 md:text-bold32 lg:text-bold40 whitespace-pre-line md:whitespace-normal lg:whitespace-pre-line">
                {card.subtitle}
              </h2>
              <h3 className="text-medium16 text-gray700 md:text-medium18 lg:text-medium24 whitespace-pre-line">
                {card.text}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
