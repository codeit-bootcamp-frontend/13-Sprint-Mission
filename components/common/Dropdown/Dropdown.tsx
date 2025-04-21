"use client";

import { useState } from "react";
import Image from "next/image";
import down from "@/public/icons/arrowDown.svg";
import up from "@/public/icons/arrowUp.svg";
import dropdown from "@/public/icons/dropdown.svg";

interface DropDownProps {
  orderBy: string;
  onChange: (filter: string) => void;
  list: string[];
}

export default function Dropdown({
  orderBy,
  onChange,
  list = [],
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex h-[42px] w-[42px] shrink-0 flex-col items-end gap-5 sm:w-[130px]">
      <div
        className="border-gray200 hidden h-[42px] w-full cursor-pointer items-center justify-between rounded-xl border border-solid bg-white px-5 py-3 sm:flex"
        onClick={handleOpenClick}
      >
        <span className="">{orderBy}</span>
        <Image src={isOpen ? up : down} width={24} height={24} alt="arrow" />
      </div>
      <div
        className="border-gray200 flex h-[42px] w-[42px] shrink-0 cursor-pointer items-center justify-center rounded-xl border border-solid bg-white sm:hidden"
        onClick={handleOpenClick}
      >
        <Image src={dropdown} width={24} height={24} alt="dropdown" />
      </div>
      {isOpen && (
        <div className="border-gray200 text-gray800 absolute top-14 z-[99] w-[130px] rounded-xl border border-solid bg-white">
          {list.map((item) => (
            <div
              className="border-gray200 text-Regular16 hover:text-blue flex h-[42px] cursor-pointer items-center justify-center border-b last:border-none"
              key={item}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
