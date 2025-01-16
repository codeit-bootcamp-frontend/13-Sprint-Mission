import * as S from "./AllItems.styles";
import ItemCard from "../ItemCard/ItemCard";
import Dropdown from "../../common/Dropdown/Dropdown";
import { Link } from "react-router-dom";
import Search from "../../Search/Search";
import NoneItem from "../../NoneItem/NoneItem";

const list = ["최신순", "좋아요순"];

export default function AllItems({ items, sortOption, onChange, setKeyword }) {
  return (
    <S.AllContainer>
      <S.AllHeader>
        <S.Div>
          <S.Title>전체 상품</S.Title>
          <Link to="/addItem">
            <S.AddBtnForMedia>상품 등록하기</S.AddBtnForMedia>
          </Link>
        </S.Div>
        <S.Filter>
          <Search onSearch={setKeyword} />
          <Link to="/addItem">
            <S.AddBtn>상품 등록하기</S.AddBtn>
          </Link>
          <Dropdown sortOption={sortOption} list={list} onChange={onChange} />
        </S.Filter>
      </S.AllHeader>
      {items.length !== 0 ? (
        <S.ItemCardContainer>
          {items.map((items, idx) => (
            <ItemCard key={idx} list="all" {...items} />
          ))}
        </S.ItemCardContainer>
      ) : (
        <NoneItem />
      )}
    </S.AllContainer>
  );
}
