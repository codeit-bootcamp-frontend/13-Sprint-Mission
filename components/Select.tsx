import React, { useState } from "react";
import selectIcon from "@/public/assets/icons/select.icon.svg";
import kebabIcon from "@/public/assets/icons/kebab.icon.svg";
import sortIcon from "@/public/assets/icons/sort.icon.svg";
import { useAutoClose } from "@/hooks/useAutoClose";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
//
interface Props {
  onChange: (option: string) => void;
}

export function SortSelect({ onChange, ...props }: Props) {
  const device = useWindowSize();
  const options = ["최신순", "좋아요순"];

  const [selected, setSelected] = useState<string>("최신순");
  const { ref, isOpen, setIsOpen } = useAutoClose(false);

  const handleOptionClick = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <>
      <div className="relative " ref={ref}>
        <Image
          onClick={() => setIsOpen(!isOpen)}
          className="hidden mobile:block w-[42px] h-[42px] left-[302px] px-[9px] py-[9px] border-solid border-gray-200 rounded-xl"
          src={sortIcon}
          alt="정렬"
          width={24}
          height={24}
        />
        <div className="block mobile:hidden">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className=" w-[130px] bg-white cursor-pointer rounded-[8px] py-4 px-3 font-Pretendard text-gray-400 flex h-[42px] items-center justify-between z-[100px]"
          >
            {selected}
            <Image src={selectIcon} alt="정렬" width={16} height={7} />
          </div>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } bg-white text-gray-400 list-none rounded-lg border border-gray-200 text-center p-0 w-[139px] absolute top-1/2 right-[80%] transform translate-y-[8px] z-[100]`}
        >
          {options.map((option) => (
            <li
              className="w-full h-[46px] px-3 py-4 rounded-2 bg-white hover:bg-gray-100"
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function EditSelect({ onChange, ...props }: Props) {
  const options = ["수정하기", "삭제하기"];
  const { ref, isOpen, setIsOpen } = useAutoClose(false);

  const handleOptionClick = (option: string) => {
    setIsOpen(false);
    onChange(option);
  };

  return (
    <>
      <div className="relative h-6" ref={ref}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="h-6 bg-white border-none cursor-pointer"
        >
          <Image src={kebabIcon} width={24} height={24} alt="케밥" />
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } bg-white text-gray-400 list-none rounded-lg border border-gray-200 text-center p-0 w-[139px] absolute top-1/2 right-[80%] transform translate-y-[8px] z-[100]`}
        >
          {options.map((option) => (
            <li
              className="w-full h-[46px] px-3 py-4 rounded-2 bg-white hover:bg-gray-100"
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
