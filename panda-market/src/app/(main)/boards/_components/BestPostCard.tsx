'use client';

import Image from 'next/image';

export default function BestPostCard() {
  return (
    <article className="rounded-2 h-[169px] w-[384px] cursor-pointer bg-gray-50 px-6 shadow-lg transition-transform duration-200 ease-out hover:-translate-y-1">
      <div className="flex min-h-[153px] flex-col items-start">
        <Image src="/icons/bestBadge.svg" alt="best badge icon" width={102} height={30} />
        <div className="mt-4 mb-4.5 flex gap-2">
          <span className="text-xl-semibold flex-wrap">
            맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
          </span>
          <div className="h-[72px] w-[72px]">이미지</div>
        </div>
        <footer className="flex w-full justify-between">
          <div className="flex">
            <span className="mr-2">총명한 판다</span>
            <Image src="/icons/heartIcon.svg" alt="heart" width={13} height={12} />
            <span className="ml-1">9999+</span>
          </div>
          <span>2025. 04. 14</span>
        </footer>
      </div>
    </article>
  );
}
