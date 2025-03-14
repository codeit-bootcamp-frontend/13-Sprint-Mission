import { getBoards } from "@/apis/boards";

export default async function getBoardsData() {
  const allData = await getBoards({
    page: 1,
    pageSize: 10,
    orderBy: "recent",
    keyword: "",
  });

  const initialAllData = allData.list;

  const bestData = await getBoards({
    page: 1,
    pageSize: 3,
    orderBy: "like",
    keyword: "",
  });

  const initialBestData = bestData?.list ?? [];

  return { initialAllData, initialBestData };
}
