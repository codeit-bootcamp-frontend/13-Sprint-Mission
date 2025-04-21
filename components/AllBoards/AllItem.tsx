import Image from "next/image";
import Link from "next/link";
import formattedDate from "@/utils/formattedDate";
import BoardImage from "../BoardImage/BoardImage";
import { BoardItem } from "@/app/(pages)/board/action";
import DEFAULT_IMAGE from "@/constants/defaultImage";

interface AllItemProps {
  all: BoardItem;
}

export default function AllItem({ all }: AllItemProps) {
  return (
    <Link
      className="bg-bg border-gray200 flex h-[138px] w-full cursor-pointer flex-col gap-4 border-b pb-6"
      href={`/board/${all.id}`}
    >
      <div className="flex w-full items-start justify-between">
        <p className="text-gray800 text-bold20 h-15 flex-1 break-words">
          {all.content}
        </p>
        {all.image !== DEFAULT_IMAGE && <BoardImage image={all.image} />}
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Image src="/icons/user.svg" width={24} height={24} alt="user" />
          <span className="text-gray600 text-regular14">
            {all.writer.nickname}
          </span>
          <span className="text-gray400 text-regular14">
            {formattedDate(all.createdAt)}
          </span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Image
            src="/icons/emptyHeart.svg"
            width={16}
            height={16}
            alt="like"
          />
          <span className="text-gray500 text-regular14">{all.likeCount}</span>
        </div>
      </div>
    </Link>
  );
}
