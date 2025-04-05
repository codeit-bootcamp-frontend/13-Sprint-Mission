import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import Textarea, { TextareaProps } from "../Textarea/Textarea";
import Input, { InputProps } from "../Input/Input";

type IOrTProps =
  | (InputProps & {
      isTextarea?: false;
      label: string;
      height?: number;
    })
  | (TextareaProps & {
      isTextarea?: true;
      label: string;
      height?: number;
    });

export default function FormField({
  label,
  isTextarea,
  leftSlot = null,
  rightSlot = null,
  height,
  ...rest
}: IOrTProps) {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <label className="text-gray800 text-bold18">{label}</label>
      {isTextarea ? (
        <Textarea
          leftSlot={leftSlot}
          rightSlot={rightSlot}
          height={height}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <Input
          leftSlot={leftSlot}
          rightSlot={rightSlot}
          height={height}
          {...(rest as Omit<InputHTMLAttributes<HTMLInputElement>, "height">)}
        />
      )}
    </div>
  );
}
