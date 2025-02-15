import { useEffect, useState } from "react";
import ItemsList from "../components/ItemsList";
import { getProducts, bestProducts } from "../api";
import { Link } from "react-router-dom";
import PageCount from "../components/pageCount";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import SelectBox from "../components/SelectBox";

//

const Contents = styled.div`
  width: ${({ device }) =>
    device === "desktop" ? "1200px" : device === "tablet" ? "696px" : "344px"};
  margin: 70px auto;
`;
const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 12px;
`;

const SearchBtn = styled.button`
  height: 42px;
  padding: 12px 23px;
  border-radius: 8px;
  color: #f3f4f6;
  background-color: #3692ff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  order: ${({ device }) => (device === "mobile" ? 1 : "auto")};
`;

const InputForm = styled.input`
  width: ${({ device }) =>
    device === "desktop" ? "325px" : device === "tablet" ? "242px" : "288px"};
  height: 42px;
  padding: 9px 20px 9px 16px;
  border-radius: 12px;
  border: none;
  background-color: #f3f4f6;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  order: ${({ device }) => (device === "mobile" ? 2 : "auto")};
  margin-left: ${({ device }) =>
    device === "desktop" ? "500px" : device === "tablet" ? "80px" : "0px"};
`;

//
function HomePage() {
  const [items, setItems] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("최신순");
  const [bestItems, setBestItems] = useState([]);
  const [page, setPage] = useState(1);
  const device = useWindowSize();
  //
  const handleChangeSort = (selected) => {
    const { label } = selected;
    setSelectedOrder(label);
  };

  const handleLoad = async (options) => {
    const { list: bestItems } = await bestProducts(options);
    const { list } = await getProducts(options);
    setItems(list);
    setBestItems(bestItems);
  };

  const handleClickPageChange = (value) => {
    setPage(Number(value));
  };

  useEffect(() => {
    handleLoad({ selectedOrder, device, page });
  }, [selectedOrder, page, device]);

  return (
    <Contents device={device}>
      <div>
        <h3>베스트 상품</h3>
        <ItemsList value="best" device={device} items={bestItems} />
      </div>
      <InputDiv device={device}>
        <h3> 전체 상품</h3>
        <InputForm
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          device={device}
        ></InputForm>
        <SearchBtn device={device} type="submit">
          <Link to="/additem">상품 등록하기</Link>
        </SearchBtn>
        <SelectBox onChange={handleChangeSort} value={selectedOrder} />
      </InputDiv>
      <ItemsList value="products" device={device} items={items} />
      <PageCount page={page} onClick={handleClickPageChange} />
    </Contents>
  );
}

export default HomePage;
