import { useNavigate } from "react-router-dom";

function PrimaryCard({ image, title, isButtonVisible }) {
  const navigate = useNavigate();
  const navigateToItems = () => {
    navigate("/items");
  };

  return (
    <div className="flex flex-col items-center justify-between xl:flex-row">
      <div className="mt-12 flex flex-col items-center justify-center xl:mt-0 xl:items-start">
        <div className="w-60 text-center text-[32px]/11 font-bold break-keep text-gray-700 md:w-full md:text-[40px]/14 xl:w-74 xl:text-left">
          {title}
        </div>
        {isButtonVisible && (
          <button
            className="mt-4 h-12 cursor-pointer rounded-[40px] bg-blue-500 px-18 py-3 text-lg font-semibold text-gray-50 md:mt-8 md:h-14 md:px-31 md:text-xl"
            onClick={navigateToItems}
          >
            구경하러 가기
          </button>
        )}
      </div>
      <img src={image} className="mt-8 xl:mt-0 xl:max-w-400" />
    </div>
  );
}

export default PrimaryCard;
