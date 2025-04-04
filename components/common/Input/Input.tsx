import clsx from "clsx";
import {
  CSSProperties,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

interface InputProps {
  label?: string;
  style?: CSSProperties;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  height?: number;
}

type IOrTProps =
  | (InputProps &
      InputHTMLAttributes<HTMLInputElement> & { isTextarea?: false })
  | (InputProps &
      TextareaHTMLAttributes<HTMLTextAreaElement> & { isTextarea?: true });

export default function Input({
  label,
  style,
  isTextarea,
  leftSlot,
  rightSlot,
  height = 56,
  ...rest
}: IOrTProps) {
  return (
    <div className={`w-full h-full flex flex-col ${label ? "gap-4" : "gap-0"}`}>
      <label className="text-gray800 text-bold18">{label}</label>
      <div
        className="w-full flex gap-2 bg-gray100 py-[9px] px-[20px] rounded-xl"
        style={{
          height: `${height}px`,
        }}
      >
        {isTextarea ? (
          <textarea
            className="w-full h-full placeholder:text-gray400 placeholder:text-regular16 focus:outline-none resize-none"
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            className="w-full h-full placeholder:text-gray400 placeholder:text-regular16 focus:outline-none"
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {rightSlot}
      </div>
    </div>
  );
}
