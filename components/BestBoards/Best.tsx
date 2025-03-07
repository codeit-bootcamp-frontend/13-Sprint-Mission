import { getBoards } from "@/apis/boards";
import BestItem from "./BestItem";

export default async function Best() {
  const bestData = await getBoards({
    page: 1,
    pageSize: 3,
    orderBy: "like",
    keyword: "",
  });

  const best = bestData.list;

  return (
    <div className="flex flex-col items-start gap-6">
      <h2 className="text-gray900 text-Bold20 font-bold">베스트 게시글</h2>
      <div className="flex justify-start items-center gap-6">
        {best.map((item) => (
          <BestItem key={item.id} best={item} />
        ))}
      </div>
    </div>
  );
}
