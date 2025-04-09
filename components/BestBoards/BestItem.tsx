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
      className="bg-gray50 h-[198px] w-full cursor-pointer rounded-lg px-6 lg:h-[169px]"
      href="/"
    >
      <div className="flex h-full w-full flex-col items-start justify-start gap-4 lg:gap-2.5">
        <div className="bg-blue flex h-[30px] w-[102px] items-center justify-center gap-1 rounded-br-[16px] rounded-bl-[16px]">
          <Image src={medal} width={16} height={16} alt="medal" />
          <span className="text-bold16 text-white">Best</span>
        </div>
        <div className="flex flex-col gap-10 lg:gap-5">
          <div className="flex w-full items-center justify-between gap-2">
            <p className="line-break text-gray800 text-bold20 h-[60px] flex-1 break-words">
              {best.content}
            </p>
            <BoardImage image={best.image} />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-end justify-center gap-2">
              <span className="text-gray600 text-regular14">
                {best.writer.nickname}
              </span>
              <div className="flex items-center justify-center gap-1">
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
