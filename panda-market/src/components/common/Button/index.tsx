'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonTypeProps = {
  children: ReactNode;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, onClick }: ButtonTypeProps) {
  return (
    <div
      className="bg-primary-100 flex h-[42px] cursor-pointer items-center justify-center rounded-lg px-[23px] py-3 text-[#ffffff]"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
