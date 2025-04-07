import {
  BoardItem,
  getBoards,
  INITIAL_BOARDS_VALUE,
} from "@/app/(pages)/boards/action";
import useResize from "@/hooks/useResize";
import { useEffect, useMemo, useState } from "react";

export default function useBestData() {
  const [bestItems, setBestItems] = useState<BoardItem[]>([
    INITIAL_BOARDS_VALUE,
  ]);
  const { showItems } = useResize(1, 2, 3);

  const best = useMemo(
    () => bestItems.slice(0, showItems),
    [bestItems, showItems]
  );

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
