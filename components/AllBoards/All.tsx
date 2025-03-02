import * as S from "./All.styles";
import { BoardItem, getBoards } from "@/apis/boards";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AllItem from "./AllItem";
import Dropdown from "../common/Dropdown/Dropdown";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";

const FilterList = ["recent", "like"];
const PAGE_SIZE = 10;

export default function All() {
  const [all, setAll] = useState<BoardItem[]>([]);
  const [totalBoards, setTotalBoards] = useState<number>(0);

  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;
  const orderBy = searchParams.get("orderBy") || "recent";
  const keyword = searchParams.get("keyword") || "";

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
  }, [page, orderBy, keyword]);

  const handleParamsUpdate = (
    params: Partial<{ page: number; orderBy: string; keyword: string }>
  ) => {
    const newParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, String(value));
      } else {
        newParams.delete(key);
      }
    });

    router.replace(`?${newParams.toString()}`, {
      scroll: params.page ? true : false,
    });
  };

  return (
    <S.AllBoards>
      <S.Header>
        <h2>게시글</h2>
        <S.WriteBtn>글쓰기</S.WriteBtn>
      </S.Header>
      <S.Container>
        <S.Filter>
          <Search
            onChange={(keyword) => handleParamsUpdate({ keyword: keyword })}
          />
          <Dropdown
            list={FilterList}
            orderBy={orderBy}
            onChange={(filter) => handleParamsUpdate({ orderBy: filter })}
          />
        </S.Filter>
        <S.Items>
          {all.map((item) => (
            <AllItem key={item.id} all={item} />
          ))}
        </S.Items>
        {!keyword && (
          <Pagination
            totalBoards={totalBoards}
            currentPage={page}
            onChange={(page) => handleParamsUpdate({ page: page })}
          />
        )}
      </S.Container>
    </S.AllBoards>
  );
}
