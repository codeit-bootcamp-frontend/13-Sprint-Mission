"use client";

import Best from "@/components/BestBoards/Best";
import * as S from "./Boards.styles";
import All from "@/components/AllBoards/All";

export default function Boards() {
  return (
    <S.Container>
      <S.Board>
        <Best />
        <All />
      </S.Board>
    </S.Container>
  );
}
