import Image from "next/image";
import { CSSProperties, InputHTMLAttributes,TextareaHTMLAttributes } from "react";

interface InputProps {
  label?: string;
  style?: CSSProperties;
  leftSlot?: string;
  slotSize?: number;
  height?: string;
  largeHeight?: string;
}

type IOrTProps =
  | (InputProps & InputHTMLAttributes<HTMLInputElement> & { isTextarea?: false })
  | (InputProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { isTextarea?: true });

export default function Input({
  label,
  style,
  isTextarea,
  leftSlot,
  slotSize,
  height,
  largeHeight,
  ...rest
}: IOrTProps) {
  return (
    <div className={`w-full h-full flex flex-col ${label ? 'gap-4' : 'gap-0'}`}>
      <label className="text-gray800 text-Bold18 font-bold">{label}</label>
      <div className="relative w-full">
        {leftSlot && (
          <div className="absolute top-[-3px] left-3 translate-y-1/2"
          style={{ width: slotSize, height: slotSize }}
          >
            <Image fill src={leftSlot} alt="" />
          </div>
        )}
        {isTextarea ? (
          <textarea
            className={`
              w-full bg-gray100 py-[9px] px-5 rounded-xl
              placeholder:text-gray400 placeholder:text-Regular16
              focus:outline-none resize-none
              ${height ? `h-[${height}px]` : "h-[42px]"}
              ${largeHeight ? `sm:h-[${largeHeight}px] sm:placeholder:text-Regular14` : ""}
            `}
            style={{ paddingLeft: slotSize ? `${12 + slotSize}px` : '9px' }} 
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />  
        ) : (
          <input
            className={`
              w-full bg-gray100 py-[9px] px-5 rounded-xl
              placeholder:text-gray400 placeholder:text-Regular16
              focus:outline-none resize-none
              ${height ? `h-[${height}px]` : "h-[42px]"}
              ${largeHeight ? `sm:h-[${largeHeight}px] sm:placeholder:text-Regular14` : ""}
            `}
            style={{ paddingLeft: slotSize ? `${12 + slotSize}px` : '9px' }}
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>
    </div>
  );
}
