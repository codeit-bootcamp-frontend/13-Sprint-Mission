'use client';

import Image from 'next/image';

type BestPostCardProps = {
  title: string;
  imageUrl: string;
  likeCount: number;
  nickName: string;
  createdAt: string;
  onClick: () => void;
};

export default function BestPostCard({
  title,
  imageUrl,
  likeCount,
  nickName,
  createdAt,
  onClick,
}: BestPostCardProps) {
  return (
    <article
      onClick={onClick}
      className="rounded-2 h-[169px] w-[384px] cursor-pointer bg-gray-50 px-6 shadow-lg transition-transform duration-200 ease-out hover:-translate-y-1"
    >
      <div className="flex min-h-[153px] flex-col items-start">
        <Image src="/icons/best_badge.svg" alt="best badge icon" width={102} height={30} />
        <div className="mt-4 mb-4.5 flex w-full justify-between gap-2">
          <span className="text-xl-semibold flex-wrap">{title}</span>
          <Image src={imageUrl} alt="card image" width={72} height={72} />
        </div>
        <footer className="flex w-full justify-between">
          <div className="flex">
            <span className="mr-2">{nickName}</span>
            <Image src="/icons/heart_icon.svg" alt="heart" width={13} height={12} />
            <span className="ml-1">{likeCount}</span>
          </div>
          <span>{createdAt}</span>
        </footer>
      </div>
    </article>
  );
}
