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

export default async function Board() {
  return (
    <>
      <Suspense fallback={<BestLoading />}>
        <Best />
      </Suspense>
      <Suspense fallback={<AllLoading />}>
        <All />
      </Suspense>
    </>
  );
}
