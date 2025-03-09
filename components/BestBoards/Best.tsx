"use client";

import BestItem from "./BestItem";
import useBestData from "./useBestData";

export default function Best() {
  const { best } = useBestData();

  return (
    <div className="w-full flex flex-col items-start gap-6">
      <h2 className="text-gray900 text-Bold20 font-bold">베스트 게시글</h2>
      <div className="flex justify-start items-center gap-6">
        {best.map((item) => (
          <BestItem key={item.id} best={item} />
        ))}
      </div>
    </div>
  );
}
