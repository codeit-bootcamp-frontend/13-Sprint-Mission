import { InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface InputOrTextareaProps {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  height?: number;
  isValid?: boolean;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "height">,
    InputOrTextareaProps {}

export default function Input({
  leftSlot = null,
  rightSlot = null,
  height = 56,
  isValid,
  ...rest
}: InputProps) {
  return (
    <div
      className={clsx(
        "w-full flex gap-2 bg-gray100 py-[9px] px-[20px] rounded-xl",
        isValid === false && "border border-error"
      )}
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
