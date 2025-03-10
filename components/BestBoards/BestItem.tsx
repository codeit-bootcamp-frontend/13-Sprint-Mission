import Image from "next/image";
import medal from "@/public/icons/best.svg";
import heart from "@/public/icons/emptyHeart.svg";
import { BoardItem } from "@/apis/boards";
import formattedDate from "@/utils/formattedDate";
import Link from "next/link";
import BoardImage from "../BoardImage/BoardImage";

interface BestItemProps {
  best: BoardItem;
}

export default function BestItem({ best }: BestItemProps) {
  return (
    <Link
      className="w-full h-[169px] px-6 bg-gray50 rounded-lg cursor-pointer md:h-[198px] maxM:w-full maxM:h-[198px]"
      href="/"
    >
      <div className="w-full h-full flex flex-col justify-start items-start gap-3 maxM:gap-4">
        <div className="w-[102px] h-[30px] flex justify-center items-center gap-1 bg-blue rounded-bl-[16px] rounded-br-[16px]">
          <Image src={medal} width={16} height={16} alt="medal" />
          <span className="text-white text-Bold16">Best</span>
        </div>
        <div className="flex flex-col gap-3 md:gap-10 maxM:gap-10">
          <div className="w-full flex justify-between items-center gap-2">
            <p className="line-break flex-1 h-[60px] break-words text-gray800 text-Bold20">
              {best.content}
            </p>
            <BoardImage image={best.image} />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-end gap-2">
              <span className="text-gray600 text-Regular14">
                {best.writer.nickname}
              </span>
              <div className="flex justify-center items-center gap-1">
                <Image src={heart} width={16} height={16} alt="like" />
                <span className="text-gray500 text-Regular14">
                  {best.likeCount}
                </span>
              </div>
            </div>
            <div className="text-gray400 text-Regular14">
              {formattedDate(best.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
