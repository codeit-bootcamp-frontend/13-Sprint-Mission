import { useSearchParams } from "next/navigation";
import { PagingProps } from "./Pagination";

const PAGE_GROUP = 5;

export default function usePagination({
  totalBoards,
  currentPage,
  pageSize,
}: PagingProps) {
  const searchParams = useSearchParams();

  const pageGroup = Math.ceil(currentPage / PAGE_GROUP);
  const totalPages = Math.ceil(totalBoards / pageSize);
  const startPage = (pageGroup - 1) * PAGE_GROUP + 1;
  const endPage = Math.min(startPage + PAGE_GROUP - 1, totalPages);

  const createPageParams = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      newParams.delete("page");
    } else {
      newParams.set("page", String(page));
    }

    return `?${newParams.toString()}`;
  };

  return { startPage, endPage, totalPages, createPageParams };
}
