import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import Textarea, { TextareaProps } from "../Textarea/Textarea";
import Input, { InputProps } from "../Input/Input";

interface CommonFieldProps {
  label: string;
  required?: boolean;
  height?: number;
  isValid?: boolean;
  errorMessage?: string;
}

type IOrTProps =
  | (InputProps & CommonFieldProps & { isTextarea?: false })
  | (TextareaProps & CommonFieldProps & { isTextarea?: true });

export default function FormField({
  label,
  isTextarea,
  leftSlot = null,
  rightSlot = null,
  required = false,
  height,
  isValid,
  errorMessage,
  ...rest
}: IOrTProps) {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <label className="text-gray800 text-bold18">
        {required && <span className="text-bold18 text-blue ml-0.5">*</span>}
        {label}
      </label>
      {isTextarea ? (
        <Textarea
          leftSlot={leftSlot}
          rightSlot={rightSlot}
          height={height}
          isValid={isValid}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <Input
          leftSlot={leftSlot}
          rightSlot={rightSlot}
          height={height}
          isValid={isValid}
          {...(rest as Omit<InputHTMLAttributes<HTMLInputElement>, "height">)}
        />
      )}
      {!isValid && errorMessage && (
        <span className="text-error text-semi14 pl-5">{errorMessage}</span>
      )}
    </div>
  );
}
