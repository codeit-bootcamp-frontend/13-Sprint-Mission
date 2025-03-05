import * as S from "./Boards.styles";
import Best from "@/components/BestBoards/Best";
import All from "@/components/AllBoards/All";
import { getBoards } from "@/apis/boards";

export default async function Boards() {
  const allData = await getBoards({
    page: 1,
    pageSize: 10,
    orderBy: "recent",
    keyword: "",
  });
  const list = allData.list;
  const totalCount = allData.totalCount;

  const bestData = await getBoards({
    page: 1,
    pageSize: 3,
    orderBy: "like",
    keyword: "",
  });
  const best = bestData.list;

  return (
    <S.Container>
      <S.Board>
        <Best best={best} />
        <All list={list} totalCount={totalCount} />
      </S.Board>
    </S.Container>
  );
}
