import clsx from "clsx";

type FontSize = "16" | "18" | "20";

type RoundedSize = "8" | "40";

interface ButtonProps {
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
        "flex items-center justify-center w-fit bg-blue text-white ",
        disabled && "bg-gray400",
        fullWidth && "w-full",
        fontSize && fontSizeCSS[fontSize],
        rounded && roundedCSS[rounded],
        className
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
