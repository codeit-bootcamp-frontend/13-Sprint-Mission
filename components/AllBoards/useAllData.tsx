import { BoardItem, getBoards } from "@/apis/boards";
import { useEffect, useState } from "react";
import useParams from "@/hooks/useParams";

export default function useAllData(PAGE_SIZE: number) {
  const [all, setAll] = useState<BoardItem[]>([]);
  const [totalBoards, setTotalBoards] = useState<number>(0);
  const { page, orderBy, keyword, handleParamsUpdate } = useParams();

  useEffect(() => {
    getBoards({
      page,
      pageSize: keyword ? 1000 : PAGE_SIZE,
      orderBy,
      keyword,
    })
      .then((result) => {
        if (!result) return;
        setAll(result.list);
        if (result.totalCount) {
          setTotalBoards(result.totalCount);
        }
      })
      .catch((error) => console.error(error));
  }, [page, orderBy, keyword, PAGE_SIZE]);

  return { all, totalBoards };
}
