import { useEffect, useState } from "react";
import * as S from "./Best.styles";
import BestItem from "./BestItem";
import { BoardItem, getBoards } from "@/apis/boards";

export default function Best() {
  const [best, setBest] = useState<BoardItem[]>([]);

  useEffect(() => {
    getBoards({ page: 1, pageSize: 3, orderBy: "like", keyword: "" })
      .then((result) => {
        if (!result) return;
        setBest(result.list);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <S.BestContainer>
      <h2>베스트 게시글</h2>
      <S.Items>
        {best.map((item) => (
          <BestItem key={item.id} best={item} />
        ))}
      </S.Items>
    </S.BestContainer>
  );
}
