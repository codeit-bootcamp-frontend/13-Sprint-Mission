import * as S from "./Pagination.styles";
import left from "@/public/icons/arrowLeft.svg";
import right from "@/public/icons/arrowRight.svg";
import usePagination from "./usePagination";

export interface PagingProps {
  totalBoards: number;
  currentPage: number;
  pageSize: number;
}

export default function Pagination({
  totalBoards,
  currentPage,
  pageSize,
}: PagingProps) {
  const { startPage, endPage, totalPages, createPageParams } = usePagination({
    totalBoards,
    currentPage,
    pageSize,
  });

  return (
    <S.Pages>
      <S.LinkBtn
        href={currentPage > 1 ? createPageParams(currentPage - 1) : "#"}
        shallow
        scroll={false}
      >
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
          href={currentPage !== page ? createPageParams(page) : "#"}
          shallow
          scroll={false}
        >
          {page}
        </S.Page>
      ))}
      <S.LinkBtn
        href={
          currentPage < totalPages ? createPageParams(currentPage + 1) : "#"
        }
        shallow
        scroll={false}
      >
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
