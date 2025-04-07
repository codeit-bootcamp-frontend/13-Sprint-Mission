import Image from "next/image";
import Link from "next/link";
import medal from "@/public/icons/best.svg";
import heart from "@/public/icons/emptyHeart.svg";
import formattedDate from "@/utils/formattedDate";
import BoardImage from "../BoardImage/BoardImage";
import { BoardItem } from "@/app/(pages)/boards/action";

interface BestItemProps {
  best: BoardItem;
}

export default function BestItem({ best }: BestItemProps) {
  return (
    <Link
      className="w-full h-[198px] px-6 bg-gray50 rounded-lg cursor-pointer lg:h-[169px]"
      href="/"
    >
      <div className="w-full h-full flex flex-col justify-start items-start gap-4 lg:gap-2.5">
        <div className="w-[102px] h-[30px] flex justify-center items-center gap-1 bg-blue rounded-bl-[16px] rounded-br-[16px]">
          <Image src={medal} width={16} height={16} alt="medal" />
          <span className="text-white text-bold16">Best</span>
        </div>
        <div className="flex flex-col gap-10 lg:gap-5">
          <div className="w-full flex justify-between items-center gap-2">
            <p className="line-break flex-1 h-[60px] break-words text-gray800 text-bold20">
              {best.content}
            </p>
            <BoardImage image={best.image} />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-end gap-2">
              <span className="text-gray600 text-regular14">
                {best.writer.nickname}
              </span>
              <div className="flex justify-center items-center gap-1">
                <Image src={heart} width={16} height={16} alt="like" />
                <span className="text-gray500 text-regular14">
                  {best.likeCount}
                </span>
              </div>
            </div>
            <div className="text-gray400 text-regular14">
              {formattedDate(best.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
