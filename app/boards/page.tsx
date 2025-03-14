import Best from "@/components/BestBoards/Best";
import All from "@/components/AllBoards/All";
import getBoardsData from "./getBoardsData";
import { Metadata } from "next";
import { Suspense } from "react";
import AllLoading from "@/components/AllBoards/Loading/AllLoading";
import BestLoading from "@/components/BestBoards/Loading/BestLoading";

export const metadata: Metadata = {
  title: "판다마켓 | 자유게시판",
};

export const revalidate = 60;

export default async function Boards() {
  const { initialAllData, initialBestData } = await getBoardsData();

  return (
    <div className="flex justify-center items-center my-10 lg:my-0">
      <div className="max-w-[1200px] min-w-[343px] px-6 lg:p-4 md:p-6 flex flex-col gap-10">
        <Suspense fallback={<BestLoading />}>
          <Best initialData={initialBestData} />
        </Suspense>
        <Suspense fallback={<AllLoading />}>
          <All initialData={initialAllData} />
        </Suspense>
      </div>
    </div>
  );
}
