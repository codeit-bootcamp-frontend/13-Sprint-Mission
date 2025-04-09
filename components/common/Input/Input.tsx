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
        "bg-gray100 flex w-full gap-2 rounded-xl px-[20px] py-[9px]",
        isValid === false && "border-error border",
      )}
      style={{
        height: `${height}px`,
      }}
    >
      {leftSlot}

      <input
        className="placeholder:text-gray400 placeholder:text-regular16 h-full w-full focus:outline-none"
        {...(rest as InputHTMLAttributes<HTMLInputElement>)}
      />

      {rightSlot}
    </div>
  );
}
