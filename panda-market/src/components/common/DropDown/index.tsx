'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function DropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropDownToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      {/* dropdown handler*/}
      <div
        className="flex h-[42px] w-[130px] cursor-pointer items-center rounded-xl border border-gray-200 bg-white px-5 py-3"
        onClick={handleDropDownToggle}
      >
        <div className="flex gap-6">
          <span>최신순</span>
          <Image src="/icons/arrow_down.svg" alt="arrow down" width={16} height={8} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 flex w-[130px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white">
          <span className="h-[42px] w-full cursor-pointer border-b border-gray-200 pt-[9px] pb-[7px] text-center">
            최신순
          </span>
          <span className="h-[42px] w-full cursor-pointer pt-[9px] pb-[7px] text-center">
            좋아요순
          </span>
        </div>
      )}
    </div>
  );
}
