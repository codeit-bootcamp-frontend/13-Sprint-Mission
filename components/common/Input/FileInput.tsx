"use client";

import { useRef } from "react";
import Image from "next/image";
import Input from "./Input";
import plus from "@/public/icons/plus.svg";

interface FileInputProps {
  image?: string | null;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileInput({
  image,
  label = "",
  onChange,
}: FileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  return (
    <div className="flex h-full w-full flex-col gap-4">
      {label && <label className="text-gray800 text-bold18">{label}</label>}
      <div>
        <Input
          type="file"
          ref={inputRef}
          accept="image/*"
          onChange={onChange}
          className="hidden"
        />
        <button
          className="cursor-pointer rounded-lg"
          onClick={triggerFileInput}
        >
          {image ? (
            <Image src={image} alt="image" fill className="rounded-xl" />
          ) : (
            <div className="bg-gray100 flex h-42 w-42 items-center justify-center rounded-xl sm:h-[282px] sm:w-[282px]">
              <div className="flex flex-col items-center gap-3">
                <Image src={plus} width={48} height={48} alt="plus" />
                <span className="text-regular16 text-gray400">이미지 등록</span>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
