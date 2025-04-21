import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type FontSize = "16" | "18" | "20";

type RoundedSize = "8" | "40";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  fontSize?: FontSize;
  rounded?: RoundedSize;
  paddingX?: number;
  paddingY?: number;
}

export default function Button({
  children,
  fullWidth,
  disabled,
  className,
  fontSize = "18",
  rounded = "40",
  paddingX,
  paddingY,
  ...props
}: ButtonProps) {
  const fontSizeCSS: Record<FontSize, string> = {
    "16": "text-semi16",
    "18": "text-semi18",
    "20": "text-semi20",
  };

  const roundedCSS: Record<RoundedSize, string> = {
    "8": "rounded-lg",
    "40": "rounded-[40px]",
  };

  return (
    <button
      className={clsx(
        "bg-blue flex w-fit items-center justify-center text-white",
        disabled && "bg-gray400",
        fullWidth && "w-full",
        fontSize && fontSizeCSS[fontSize],
        rounded && roundedCSS[rounded],
        className,
      )}
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
