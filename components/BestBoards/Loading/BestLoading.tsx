"use client";

import useResize from "@/hooks/useResize";
import BestBoardsLoading from "./BestBoardsLoading";

export default function BestLoading() {
  const { showItems } = useResize(1, 2, 3);

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="bg-gray200 gradientWave h-[30px] w-[100px] rounded-md" />
      <div className="flex w-full gap-6">
        {Array.from({ length: showItems }, (_, i) => (
          <BestBoardsLoading key={i} />
        ))}
      </div>
    </div>
  );
}
