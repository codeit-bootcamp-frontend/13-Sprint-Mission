import Image from "next/image";
import formatISODateTime from "@/utils/formatISODateTime";

export interface DetailBoardProps {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export default function DetailBoard({ board }: { board: DetailBoardProps }) {
  return (
    <div className="flex w-full flex-col gap-4 sm:gap-6">
      <div className="border-gray200 flex flex-col gap-4 border-b pb-4">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-bold20 text-gray800">{board.title}</h1>
          <Image
            src="/icons/kebab.svg"
            width={24}
            height={24}
            alt="kebab menu"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex items-center">
            <Image
              src="/icons/user.svg"
              width={40}
              height={40}
              alt="user"
              className="mr-4"
            />
            <span className="text-medium14 text-gray600 mr-0.5 text-center sm:mr-2">
              {board.writer.nickname}
            </span>
            <span className="text-regular14 text-gray400 text-center">
              {formatISODateTime(board.createdAt)}
            </span>
          </div>
          <div className="bg-gray200 mx-4 my-1.5 w-[1px]" />
          <div className="border-gray200 flex w-fit items-center gap-1 rounded-[35px] border px-3 py-1">
            <div className="relative h-6 w-6 sm:h-8 sm:w-8">
              <Image src="/icons/emptyHeart.svg" fill alt="like" />
            </div>
            <span className="text-gray500 text-medium16">
              {board.likeCount}
            </span>
          </div>
        </div>
      </div>
      <div className="text-regular16 text-gray800">{board.content}</div>
    </div>
  );
}
