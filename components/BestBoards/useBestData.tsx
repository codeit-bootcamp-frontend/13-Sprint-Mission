import { BoardItem, getBoards } from "@/apis/boards";
import useResize from "@/hooks/useResize";
import { useEffect, useState } from "react";

export default function useBestData() {
  const [bestItems, setBestItems] = useState<BoardItem[]>([]);
  const { showItems } = useResize(1, 2, 3);

  const best = bestItems.slice(0, showItems);

  useEffect(() => {
    getBoards({
      page: 1,
      pageSize: showItems,
      orderBy: "like",
      keyword: "",
    })
      .then((result) => {
        if (!result) return;
        setBestItems(result.list);
      })
      .catch((error) => console.error(error));
  }, [showItems]);

  return { best };
}
