import { MouseEvent, useState } from "react";
import * as S from "./pageCount.style";
import previousIcon from "../../assets/icons/previousPage.icon.svg";
import nextIcon from "../../assets/icons/nextPage.icon.svg";
//

interface Props extends S.StyleProps {
  onClick: onClick;
}
export function PageButton({ page, value, onClick }: Props) {
  return (
    <S.Btn value={value} onClick={onClick} page={page}>
      {value}
    </S.Btn>
  );
}
//
type PageCountProps = Omit<Props, "onClick"> & {
  onClick: (btn: number) => void;
};
function PageCount({ page, onClick }: PageCountProps) {
  const BtnArray = [1, 2, 3, 4, 5];
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickBtn = (btn: number) => {
    setCurrentPage(btn);
    onClick(btn);
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
    onClick(currentPage - 1);
  };
  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
    onClick(currentPage + 1);
  };

  return (
    <S.PageBtn>
      <S.NextPrevBtn onClick={handleClickPrev}>
        <img src={previousIcon} alt="이전" />
      </S.NextPrevBtn>
      {BtnArray.map((btn) => {
        return (
          <PageButton
            key={btn}
            onClick={() => handleClickBtn(btn)}
            value={btn}
            page={page}
          />
        );
      })}
      <S.NextPrevBtn onClick={handleClickNext}>
        <img src={nextIcon} alt="다음" />
      </S.NextPrevBtn>
    </S.PageBtn>
  );
}
export default PageCount;
