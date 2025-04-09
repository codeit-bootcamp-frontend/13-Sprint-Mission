import { Metadata } from "next";
import { Suspense } from "react";
import Best from "@/components/BestBoards/Best";
import All from "@/components/AllBoards/All";
import AllLoading from "@/components/AllBoards/Loading/AllLoading";
import BestLoading from "@/components/BestBoards/Loading/BestLoading";

export const metadata: Metadata = {
  title: "판다마켓 | 자유게시판",
};

export const revalidate = 60;

export default async function Boards() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex max-w-[1200px] min-w-[343px] flex-col gap-10 px-4 py-5 md:p-6">
        <Suspense fallback={<BestLoading />}>
          <Best />
        </Suspense>
        <Suspense fallback={<AllLoading />}>
          <All />
        </Suspense>
      </div>
    </div>
  );
}
