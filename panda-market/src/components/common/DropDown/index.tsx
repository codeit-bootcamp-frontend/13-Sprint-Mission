'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  // todo : check
  const dropDownOptions = [
    { id: 'recent', label: '최신순' },
    { id: 'like', label: '좋아요순' },
  ];

  const handleDropDownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDropDownOptionClick = (option: string) => {
    // option :recent, like
    const params = new URLSearchParams(window.location.search);
    params.set('orderBy', option);
    router.push(`?${params}`);
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
        <ul className="absolute top-full z-50 mt-2 flex w-[130px] flex-col items-center justify-center divide-x divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {dropDownOptions.map((option) => (
            <li
              key={option.id}
              className="h-[42px] w-full cursor-pointer pt-[9px] pb-[7px] text-center"
              onClick={() => {
                handleDropDownOptionClick(option.id);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
