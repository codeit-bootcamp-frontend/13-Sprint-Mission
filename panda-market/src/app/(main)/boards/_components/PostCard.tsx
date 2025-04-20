'use client';

import Image from 'next/image';

type PostCardProps = {
  title: string;
  imageUrl: string;
  likeCount: number;
  nickName: string;
  createdAt: string;
  onClick: () => void;
};

export default function PostCard({
  title,
  imageUrl,
  likeCount,
  nickName,
  createdAt,
  onClick,
}: PostCardProps) {
  return (
    <article
      onClick={onClick}
      className="flex cursor-pointer flex-col bg-[#fcfcfc] px-2 pt-2 pb-6 shadow-lg transition-transform duration-200 ease-out hover:-translate-y-1"
    >
      <header className="mb-4 flex justify-between">
        <h2 className="text-xl-semibold flex-1">{title}</h2>
        <Image src={imageUrl} alt="card image" width={72} height={72} />
      </header>
      <footer className="flex items-center justify-between">
        <div className="flex flex-1 gap-2">
          <Image src="/icons/user_profile.svg" alt="user profile icon" width={24} height={24} />
          <span className="text-md-regular text-gray-600">{nickName}</span>
          <span className="text-md-regular text-gray-400">{createdAt}</span>
        </div>
        <div className="flex gap-2">
          <Image src="/icons/heart_icon.svg" alt="heart icon" width={24} height={24} />
          <span className="text-lg-regular text-gray-500">{likeCount}+</span>
        </div>
      </footer>
    </article>
  );
}
