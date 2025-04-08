import clsx from "clsx";
import { ReactNode } from "react";
//
interface Props {
  onClick?: onClick;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}
export default function Button({
  onClick,
  children,
  className,
  disabled,
  ...props
}: Props) {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(
          "flex  bg-blue-500 justify-center items-center w-full h-full rounded-[8px] border-none font-Pretendard text-H5Bold text-gray-100 bg-light-blue cursor-pointer",
          disabled ? "bg-gray-400" : "",
          className
        )}
      >
        {children}
      </button>
    </>
  );
}
