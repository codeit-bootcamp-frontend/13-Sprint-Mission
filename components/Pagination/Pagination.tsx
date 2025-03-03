import * as S from "./Pagination.styles";
import left from "@/public/icons/arrowLeft.svg";
import right from "@/public/icons/arrowRight.svg";
import { useSearchParams } from "next/navigation";

interface PagingProps {
  totalBoards: number;
  currentPage: number;
  pageSize: number;
}

export default function Pagination({
  totalBoards,
  currentPage,
  pageSize,
}: PagingProps) {
  const searchParams = useSearchParams();

  const pageGroup = Math.ceil(currentPage / 5);
  const totalPages = Math.ceil(totalBoards / pageSize);
  const startPage = (pageGroup - 1) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  const createPageParams = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", String(page));

    return `?${newParams.toString()}`;
  };

  return (
    <S.Pages>
      <S.LinkBtn href={createPageParams(currentPage - 1)} shallow>
        <S.Arrow
          disabled={currentPage === 1}
          src={left}
          width={16}
          height={16}
          alt="prev"
        />
      </S.LinkBtn>
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((page) => (
        <S.Page
          key={page}
          $isActive={currentPage === page}
          href={createPageParams(page)}
        >
          {page}
        </S.Page>
      ))}
      <S.LinkBtn href={createPageParams(currentPage + 1)}>
        <S.Arrow
          disabled={currentPage === totalBoards}
          src={right}
          width={16}
          height={16}
          alt="next"
        />
      </S.LinkBtn>
    </S.Pages>
  );
}
