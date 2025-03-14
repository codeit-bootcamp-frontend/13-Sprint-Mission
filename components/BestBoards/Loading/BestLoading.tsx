"use client";

import useResize from "@/hooks/useResize";
import BestBoardsLoading from "./BestBoardsLoading";

export default function BestLoading() {
  const { showItems } = useResize(1, 2, 3);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-[100px] h-[30px] bg-gray200 rounded-md gradientWave" />
      <div className="w-full flex gap-6">
        {Array.from({ length: showItems }, (_, i) => (
          <BestBoardsLoading key={i} />
        ))}
      </div>
    </div>
  );
}
