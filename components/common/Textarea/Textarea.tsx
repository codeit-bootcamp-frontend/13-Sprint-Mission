import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import { InputOrTextareaProps } from "../Input/Input";

export interface TextareaProps
  extends InputOrTextareaProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({
  leftSlot = null,
  rightSlot = null,
  height,
  isValid,
  ...rest
}: TextareaProps) {
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

      <textarea
        className="placeholder:text-gray400 placeholder:text-regular16 h-full w-full resize-none focus:outline-none"
        {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />

      {rightSlot}
    </div>
  );
}
