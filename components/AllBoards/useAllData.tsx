import { useEffect, useState } from "react";
import useBoardsParams from "@/hooks/useBoardsParams";
import {
  BoardItem,
  getBoards,
  INITIAL_BOARDS_VALUE,
} from "@/app/(pages)/board/action";

export default function useAllData(PAGE_SIZE: number) {
  const [all, setAll] = useState<BoardItem[]>([INITIAL_BOARDS_VALUE]);
  const [totalBoards, setTotalBoards] = useState<number>(0);
  const { page, orderBy, keyword } = useBoardsParams();

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
