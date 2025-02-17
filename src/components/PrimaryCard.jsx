import { useNavigate } from "react-router";

function PrimaryCard({ image, title, isButtonVisible }) {
  const navigate = useNavigate();
  const navigateToItems = () => {
    navigate("/items");
  };

  return (
    <div className="flex w-277.5 items-center justify-between">
      <div className="pb-15">
        {title}
        {isButtonVisible && (
          <button
            className="mt-8 h-14 rounded-[40px] bg-[#3692FF] px-31 py-3 text-[#F9FAFB]"
            onClick={navigateToItems}
          >
            구경하러 가기
          </button>
        )}
      </div>
      <img src={image} className="max-w-400" />
    </div>
  );
}

export default PrimaryCard;
