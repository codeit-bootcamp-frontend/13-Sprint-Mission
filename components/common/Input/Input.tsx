import { InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface InputOrTextareaProps {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  height?: number;
  isValid?: boolean;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "height">,
    InputOrTextareaProps {}

export default function Input({
  leftSlot = null,
  rightSlot = null,
  height = 56,
  isValid,
  className,
  ref,
  ...rest
}: InputProps) {
  return (
    <div
      className={clsx(
        "bg-gray100 flex w-full gap-2 rounded-xl px-[20px] py-[9px]",
        isValid === false && "border-error border",
        className,
      )}
      style={{
        height: `${height}px`,
      }}
    >
      {leftSlot}

      <input
        className={clsx(
          "placeholder:text-gray400 placeholder:text-regular16 h-full w-full focus:outline-none",
        )}
        ref={ref}
        {...(rest as InputHTMLAttributes<HTMLInputElement>)}
      />

      {rightSlot}
    </div>
  );
}
