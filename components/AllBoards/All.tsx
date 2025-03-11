"use client";

import AllItem from "./AllItem";
import Dropdown from "../common/Dropdown/Dropdown";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import useBoardsParams from "@/hooks/useBoardsParams";
import useAllData from "./useAllData";
import { BoardItem } from "@/apis/boards";

const FilterList = ["recent", "like"];
const PAGE_SIZE = 10;

interface AllProps {
  initialData: BoardItem[];
}

export default function All({ initialData }: AllProps) {
  const { page, orderBy, keyword, handleParamsUpdate } = useBoardsParams();
  const { all, totalBoards } = useAllData({ initialData, PAGE_SIZE });

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-gray900 text-Bold20 font-bold">게시글</h2>
        <button className="py-2 px-6 bg-blue text-white text-Bold16 rounded-lg cursor-pointer">
          글쓰기
        </button>
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
