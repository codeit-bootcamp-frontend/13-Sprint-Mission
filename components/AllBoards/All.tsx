"use client";

import AllItem from "./AllItem";
import Dropdown from "../common/Dropdown/Dropdown";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import useBoardsParams from "@/hooks/useBoardsParams";
import useAllData from "./useAllData";
import Button from "../common/Button/Button";

const FilterList = ["recent", "like"];
const PAGE_SIZE = 10;

export default function All() {
  const { page, orderBy, keyword, handleParamsUpdate } = useBoardsParams();
  const { all, totalBoards } = useAllData(PAGE_SIZE);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-gray900 text-bold20">게시글</h2>
        <Button fontSize="16" rounded="8" paddingX={24} paddingY={8}>
          글쓰기
        </Button>
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="flex justify-center items-center gap-3">
          <Search />
          <Dropdown
            list={FilterList}
            orderBy={orderBy}
            onChange={(filter) => handleParamsUpdate({ orderBy: filter })}
          />
        </div>
        <div className="w-full flex flex-col gap-6">
          {all.map((item) => (
            <AllItem key={item.id} all={item} />
          ))}
        </div>
        {!keyword && (
          <Pagination
            totalBoards={totalBoards ?? 0}
            currentPage={page}
            pageSize={PAGE_SIZE}
          />
        )}
      </div>
    </div>
  );
}
