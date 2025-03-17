import activeHeart from "@/public/assets/icons/active.heart.icon.svg";
import inactiveHeart from "@/public/assets/icons/inactive.heart.icon.svg";
import Image from "next/image";

//
interface Props {
  value: number;
  active?: boolean;
}
export default function BtnHeart({ value, ...props }: Props) {
  const { active, ...rest } = props;
  const count = value > 9999 ? "9999+" : value;
  return (
    <>
      {active ? (
        <div className="flex items-center justify-between gap-[6px] w-16 h-6 border-none font-Pretendard text-H7Regular bg-gray-50 text-gray-500 ">
          <Image
            width={16}
            height={16}
            src={activeHeart}
            {...rest}
            alt="좋아요"
          />
          {value}
        </div>
      ) : (
        <div className="flex items-center justify-between gap-[6px] w-16 h-6 border-none font-Pretendard text-H7Regular bg-white text-gray-500 ">
          <Image
            width={16}
            height={16}
            src={inactiveHeart}
            {...rest}
            alt="좋아요"
          />
          {count}
        </div>
      )}
    </>
  );
}
