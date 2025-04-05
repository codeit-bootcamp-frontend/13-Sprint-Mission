import { TextareaHTMLAttributes } from "react";
import { InputOrTextareaProps } from "../Input/Input";

export interface TextareaProps
  extends InputOrTextareaProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  height?: number;
}

export default function Textarea({
  leftSlot = null,
  rightSlot = null,
  height,
  ...rest
}: TextareaProps) {
  return (
    <div
      className="w-full flex gap-2 bg-gray100 py-[9px] px-[20px] rounded-xl"
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
