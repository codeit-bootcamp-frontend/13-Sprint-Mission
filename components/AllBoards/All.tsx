"use client";

import AllItem from "./AllItem";
import Dropdown from "../common/Dropdown/Dropdown";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import useBoardsParams from "@/hooks/useBoardsParams";
import useAllData from "./useAllData";
import Button from "../common/Button/Button";
import Link from "next/link";

const FilterList = ["recent", "like"];
const PAGE_SIZE = 10;

export default function All() {
  const { page, orderBy, keyword, handleParamsUpdate } = useBoardsParams();
  const { all, totalBoards } = useAllData(PAGE_SIZE);

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-gray900 text-bold20">게시글</h2>
        <Link href="/addboard">
          <Button fontSize="16" rounded="8" paddingX={24} paddingY={8}>
            글쓰기
          </Button>
        </Link>
      </div>
      <div className="flex w-full flex-col gap-6">
        <div className="flex items-center justify-center gap-3">
          <Search />
          <Dropdown
            list={FilterList}
            orderBy={orderBy}
            onChange={(filter) => handleParamsUpdate({ orderBy: filter })}
          />
        </div>
        <div className="flex w-full flex-col gap-6">
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
