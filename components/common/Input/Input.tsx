import { InputHTMLAttributes } from "react";

export interface InputOrTextareaProps {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "height">,
    InputOrTextareaProps {
  height?: number;
}

export default function Input({
  leftSlot = null,
  rightSlot = null,
  height = 56,
  ...rest
}: InputProps) {
  return (
    <div
      className="w-full flex gap-2 bg-gray100 py-[9px] px-[20px] rounded-xl"
      style={{
        height: `${height}px`,
      }}
    >
      {leftSlot}

      <input
        className="w-full h-full placeholder:text-gray400 placeholder:text-regular16 focus:outline-none"
        {...(rest as InputHTMLAttributes<HTMLInputElement>)}
      />

      {rightSlot}
    </div>
  );
}
