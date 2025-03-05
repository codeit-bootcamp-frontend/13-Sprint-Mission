"use client";

import * as S from "./All.styles";
import AllItem from "./AllItem";
import Dropdown from "../common/Dropdown/Dropdown";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import useParams from "@/hooks/useParams";
import { Boards } from "@/apis/boards";

const FilterList = ["recent", "like"];
const PAGE_SIZE = 10;

export default function All({ list, totalCount }: Boards) {
  const { page, orderBy, keyword, handleParamsUpdate } = useParams();

  return (
    <S.AllBoards>
      <S.Header>
        <h2>게시글</h2>
        <S.WriteBtn>글쓰기</S.WriteBtn>
      </S.Header>
      <S.Container>
        <S.Filter>
          <Search />
          <Dropdown
            list={FilterList}
            orderBy={orderBy}
            onChange={(filter) => handleParamsUpdate({ orderBy: filter })}
          />
        </S.Filter>
        <S.Items>
          {list.map((item) => (
            <AllItem key={item.id} all={item} />
          ))}
        </S.Items>
        {!keyword && (
          <Pagination
            totalBoards={totalCount ?? 0}
            currentPage={page}
            pageSize={PAGE_SIZE}
          />
        )}
      </S.Container>
    </S.AllBoards>
  );
}
