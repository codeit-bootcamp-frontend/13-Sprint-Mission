import Best from "@/components/BestBoards/Best";
import All from "@/components/AllBoards/All";
import getBoardsData from "./getBoardsData";

export const metadata = {
  title: "판다마켓 | 자유게시판",
};

export const revalidate = 60;

export default async function Boards() {
  const { initialAllData, initialBestData } = await getBoardsData();

  return (
    <div className="flex justify-center items-center my-10 lg:my-0">
      <div className="max-w-[1200px] min-w-[343px] px-6 lg:p-4 md:p-6 flex flex-col gap-10">
        <Best initialData={initialBestData} />
        <All initialData={initialAllData} />
      </div>
    </div>
  );
}
