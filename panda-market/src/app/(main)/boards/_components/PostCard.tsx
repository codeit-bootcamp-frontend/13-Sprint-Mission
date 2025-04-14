'use client';

import Image from 'next/image';

export default function PostCard() {
  return (
    <article className="flex flex-col bg-[#fcfcfc] px-2 pt-2 pb-6">
      <header className="mb-4 flex justify-between">
        <h2 className="text-xl-semibold flex-1">
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </h2>
        <Image src="/images/examCardImg.png" alt="card image" width={72} height={72} />
      </header>
      <footer className="flex items-center justify-between">
        <div className="flex flex-1 gap-2">
          <Image src="/icons/cardUserProfile.svg" alt="user profile icon" width={24} height={24} />
          <span className="text-md-regular text-gray-600">총명한 판다</span>
          <span className="text-md-regular text-gray-400">2025.04.14</span>
        </div>
        <div className="flex gap-2">
          <Image src="/icons/heartIcon.svg" alt="heart icon" width={24} height={24} />
          <span className="text-lg-regular text-gray-500">9999+</span>
        </div>
      </footer>
    </article>
  );
}
