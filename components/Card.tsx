import BestImage from "@/public/assets/icons/best.icon.svg";
import Image from "next/image";
import ProfileImg from "@/public/assets/icons/default.profile.icon.svg";
import { useFormatDate } from "@/hooks/useFormatting";

import BtnHeart from "./BtnHeart";
import Profile from "./common/Profile";
//
interface Props {
  article: Article;
  isDetailArticle?: boolean;
}
export function BestArticle({ article }: Props) {
  const formattedDate = useFormatDate(article.createdAt);
  const articleImg = article.image || "";
  return (
    <div className=" flex flex-col gap-4 w-[384px]tablet:w-full mobile:w-full h-[169px] tablet:h-[198px] border-none bg-gray-50 px-6 rounded-lg">
      <Image
        className="w-[102px] h-[30px] "
        src={BestImage}
        width={102}
        height={30}
        alt="베스트"
      />
      <div className="flex justify-between gap-2 tablet:gap-10 font-Pretendard text-H3Bold">
        <p>{article.content}</p>
        <Image
          className="w-[72px] h-[72px] "
          width={72}
          height={72}
          src={articleImg}
          alt="상품이미지"
        />
      </div>
      <div className="flex justify-between text-gray-500 font-Pretendard text-H7Regular ">
        <div className="flex gap-2">
          {article.writer.nickname}
          <BtnHeart value={article.likeCount} />
        </div>
        <div>{formattedDate}</div>
      </div>
    </div>
  );
}

export function Articles({ article, isDetailArticle }: Props) {
  const articleImg = article.image || ProfileImg;

  return (
    <div className=" flex flex-col gap-4 w-full h-[138px] bg-light-gray px-6 border-b border-gray-200">
      <div className="flex justify-between font-Pretendard text-H3Bold">
        <p>{article.content}</p>
        {!isDetailArticle && (
          <img
            className="w-[72px] h-[72px] text-H8"
            src={article.image || ProfileImg}
            alt="상품이미지"
          />
        )}
      </div>
      <div className="flex justify-between text-gray-500 font-Pretendard text-H7Regular ">
        <Profile value={article} />
        <BtnHeart value={article.likeCount} />
      </div>
    </div>
  );
}
