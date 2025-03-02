import * as S from "./Pagination.styles";
import left from "@/public/icons/arrowLeft.svg";
import right from "@/public/icons/arrowRight.svg";

interface PagingProps {
  totalBoards: number;
  currentPage: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  totalBoards,
  currentPage,
  onChange,
}: PagingProps) {
  const pageGroup = Math.ceil(currentPage / 5);
  const startPage = (pageGroup - 1) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalBoards);

  return (
    <S.Pages>
      <S.Button
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
      >
        <S.Arrow
          disabled={currentPage === 1}
          src={left}
          width={16}
          height={16}
          alt="prev"
        />
      </S.Button>
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((page) => (
        <S.Page
          key={page}
          $isActive={currentPage === page}
          disabled={currentPage === page}
          onClick={() => onChange(page)}
        >
          {page}
        </S.Page>
      ))}
      <S.Button
        disabled={currentPage === totalBoards}
        onClick={() => onChange(currentPage + 1)}
      >
        <S.Arrow
          disabled={currentPage === totalBoards}
          src={right}
          width={16}
          height={16}
          alt="next"
        />
      </S.Button>
    </S.Pages>
  );
}
