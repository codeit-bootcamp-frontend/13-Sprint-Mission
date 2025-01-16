import * as S from "./Paging.styles";
import Pagination from "react-js-pagination";
import { ReactComponent as Left } from "../../assets/icons/arrowLeft.svg";
import { ReactComponent as Right } from "../../assets/icons/arrowRight.svg";

export default function Paging({ currentPage, pageSize, totalItemsCount, setPage }) {
  return (
    <S.PagingContainer>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={pageSize}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        prevPageText={<Left />}
        nextPageText={<Right />}
        onChange={(currentPage) => setPage(currentPage)}
      />
    </S.PagingContainer>
  );
}
