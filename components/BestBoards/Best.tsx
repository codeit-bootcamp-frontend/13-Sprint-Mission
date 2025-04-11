"use client";

import BestItem from "./BestItem";
import useBestData from "./useBestData";

export default function Best() {
  const { best } = useBestData();

  return (
    <div className="flex w-full flex-col items-start gap-6">
      <h2 className="text-gray900 text-bold20 font-bold">베스트 게시글</h2>
      <div className="flex w-full items-center justify-start gap-6">
        {best.map((item) => (
          <BestItem key={item.id} best={item} />
        ))}
      </div>
    </div>
  );
}
