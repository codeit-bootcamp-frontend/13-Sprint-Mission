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
    <div className="relative w-[130px] h-[42px] shrink-0 flex flex-col items-end gap-5 maxS:w-[42px]">
      <div
        className="w-full h-[42px] flex justify-between items-center py-3 px-5 rounded-xl border border-solid border-gray200 bg-white cursor-pointer maxS:hidden"
        onClick={handleOpenClick}
      >
        <span className="">{orderBy}</span>
        <Image src={isOpen ? up : down} width={24} height={24} alt="arrow" />
      </div>
      <div
        className="w-[42px] h-[42px] shrink-0 hidden justify-center items-center rounded-xl border border-solid border-gray200 bg-white cursor-pointer maxS:flex"
        onClick={handleOpenClick}
      >
        <Image src={dropdown} width={24} height={24} alt="dropdown" />
      </div>
      {isOpen && (
        <div className="absolute top-14 z-[99] w-[130px] bg-white border border-solid border-gray200 rounded-xl text-gray800 ">
          {list.map((item) => (
            <div
              className="h-[42px] flex justify-center items-center border-b border-gray200 text-Regular16 cursor-pointer hover:text-blue last:border-none"
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
