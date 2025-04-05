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
        "w-full flex gap-2 bg-gray100 py-[9px] px-[20px] rounded-xl",
        isValid === false && "border border-error"
      )}
      style={{
        height: `${height}px`,
      }}
    >
      {leftSlot}

      <textarea
        className="w-full h-full placeholder:text-gray400 placeholder:text-regular16 focus:outline-none resize-none"
        {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />

      {rightSlot}
    </div>
  );
}
