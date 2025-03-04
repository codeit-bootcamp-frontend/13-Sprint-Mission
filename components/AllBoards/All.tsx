import * as S from "./All.styles";
import AllItem from "./AllItem";
import Dropdown from "../common/Dropdown/Dropdown";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import useAllData from "./useAllData";
import useParams from "@/hooks/useParams";

const FilterList = ["recent", "like"];
const PAGE_SIZE = 10;

export default function All() {
  const { all, totalBoards } = useAllData(PAGE_SIZE);
  const { page, orderBy, keyword, handleParamsUpdate } = useParams();

  return (
    <S.AllBoards>
      <S.Header>
        <h2>게시글</h2>
        <S.WriteBtn>글쓰기</S.WriteBtn>
      </S.Header>
      <S.Container>
        <S.Filter>
          <Search />
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
            pageSize={PAGE_SIZE}
          />
        )}
      </S.Container>
    </S.AllBoards>
  );
}
