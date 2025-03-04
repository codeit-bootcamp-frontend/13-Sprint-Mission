import { BoardItem, getBoards } from "@/apis/boards";
import { useEffect, useState } from "react";

export default function useBestData() {
  const [best, setBest] = useState<BoardItem[]>([]);

  useEffect(() => {
    getBoards({ page: 1, pageSize: 3, orderBy: "like", keyword: "" })
      .then((result) => {
        if (!result) return;
        setBest(result.list);
      })
      .catch((error) => console.error(error));
  }, []);

  return best;
}
