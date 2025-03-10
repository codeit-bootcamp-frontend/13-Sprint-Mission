import Image from "next/image";
import user from "@/public/icons/user.svg";
import heart from "@/public/icons/emptyHeart.svg";
import formattedDate from "@/utils/formattedDate";
import { BoardItem } from "@/apis/boards";
import Link from "next/link";
import BoardImage from "../BoardImage/BoardImage";

interface AllItemProps {
  all: BoardItem;
}

export default function AllItem({ all }: AllItemProps) {
  return (
    <Link
      className="w-full h-[138px] flex flex-col gap-4 pb-6 bg-bg border-b border-gray200 cursor-pointer"
      href="/"
    >
      <div className="w-full flex justify-between items-start">
        <p className="flex-1 h-[60px] break-words text-gray800 text-Bold20">
          {all.content}
        </p>
        <BoardImage image={all.image} />
      </div>
      <div className="w-full flex justify-between items-center">
        <div className=" flex justify-center items-center gap-2">
          <Image src={user} width={24} height={24} alt="user" />
          <span className="text-gray600 text-Regular14">
            {all.writer.nickname}
          </span>
          <span className="text-gray400 text-Regular14">
            {formattedDate(all.createdAt)}
          </span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <Image src={heart} width={16} height={16} alt="like" />
          <span className="text-gray500 text-Regular14">{all.likeCount}</span>
        </div>
      </div>
    </Link>
  );
}
