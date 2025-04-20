'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function DropDown() {
  const router = useRouter();
  const dropDownRef = useRef<HTMLDivElement>(null);

  const dropDownOptions = [
    { id: 'recent', label: '최신순' },
    { id: 'like', label: '좋아요순' },
  ] as const;

  type OptionType = 'recent' | 'like';

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 선택된 드롭다운 옵션에 따라 경로 쿼리 스트링 업데이트
  const handleDropDownOptionClick = (selectedOption: OptionType) => {
    const params = new URLSearchParams(window.location.search);
    params.set('orderBy', selectedOption);
    router.push(`?${params}`);
  };

  // 드롭다운 외부 클릭 시 닫힘
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    // clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropDownRef}>
      {/* dropdown handler*/}
      <div
        className="flex h-[42px] w-[130px] cursor-pointer items-center rounded-xl border border-gray-200 bg-white px-5 py-3"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex gap-6">
          <span>최신순</span>
          <Image src="/icons/arrow_down.svg" alt="arrow down" width={16} height={8} />
        </div>
      </div>

      {/* dropdown menu*/}
      {isOpen && (
        <ul className="absolute top-full z-50 mt-2 flex w-[130px] flex-col items-center justify-center divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {dropDownOptions.map((option) => (
            <li
              key={option.id}
              className="h-[42px] w-full cursor-pointer pt-[9px] pb-[7px] text-center"
              onClick={() => handleDropDownOptionClick(option.id)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
