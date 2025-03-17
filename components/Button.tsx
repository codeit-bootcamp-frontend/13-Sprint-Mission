import { ReactNode } from "react";
//
interface Props {
  onClick: onClick;
  children: ReactNode;
  disabled?: boolean;
}
export default function Button({ onClick, children, ...props }: Props) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex  bg-blue-500 justify-center items-center w-full h-full rounded-[8px] border-none font-Pretendard text-H5Bold text-gray-100 bg-light-blue cursor-pointer"
      >
        {children}
      </button>
    </>
  );
}
