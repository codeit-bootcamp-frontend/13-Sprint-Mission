import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//
import * as S from "./ItemsPage.style";
import ItemsList from "../../components/ItemsList/ItemsList";
import * as A from "../../api/product.api";
import PageCount from "../../components/PageNation/pageCount";
import useWindowSize from "../../hooks/useWindowSize";
import { SortSelect } from "../../components/common/Select/Select";
import Button from "../../components/common/Button/Button";
import { SearchInput } from "../../components/common/Input/Input";
//
function HomePage() {
  const [items, setItems] = useState<A.Item[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<string>("최신순");
  const [bestItems, setBestItems] = useState<A.Item[]>([]);
  const [page, setPage] = useState<number>(1);
  const device = useWindowSize(); // useWindow 타입 지정해주기
  const navigate = useNavigate();
  //
  const handleChangeSort = (option: string) => {
    setSelectedOrder(option);
  };

  const handleLoad = async (options: {
    selectedOrder: string;
    device: string;
    page: number;
  }) => {
    const bestItems = await A.bestProducts(options);
    const list = await A.getProducts(options);
    setItems(list ?? []);
    setBestItems(bestItems ?? []);
  };

  const handleClickPageChange = (value: number) => {
    setPage(Number(value));
  };

  useEffect(() => {
    handleLoad({ selectedOrder, device, page });
  }, [selectedOrder, page, device]);

  return (
    <S.Background>
      <S.ContentsWrapper>
        <S.Contents>
          <div>
            <S.Title>베스트 상품</S.Title>
            <ItemsList value="best" items={bestItems} />
          </div>
          {device === "mobile" ? (
            <S.MobileContainer>
              <S.MobileTitleBtn>
                <S.Title> 전체 상품</S.Title>
                <S.SearchBtnContainer>
                  <Button onClick={() => navigate("/additem")}>
                    상품 등록하기
                  </Button>
                </S.SearchBtnContainer>
              </S.MobileTitleBtn>
              <S.SearchSelectContainer>
                <SearchInput
                  name="search"
                  placeholder="검색할 상품을 입력해주세요"
                  onChange={() => {}}
                />
                <SortSelect onChange={handleChangeSort} />
              </S.SearchSelectContainer>
            </S.MobileContainer>
          ) : (
            <S.TitleInputDiv>
              <S.Title> 전체 상품</S.Title>
              <S.InputDiv>
                <S.InputContainer>
                  <SearchInput
                    name="search"
                    placeholder="검색할 상품을 입력해주세요"
                    onChange={() => {}}
                  />
                </S.InputContainer>
                <S.SearchBtnContainer>
                  <Button onClick={() => navigate("/additem")}>
                    상품 등록하기
                  </Button>
                </S.SearchBtnContainer>

                <SortSelect onChange={handleChangeSort} />
              </S.InputDiv>
            </S.TitleInputDiv>
          )}

          <ItemsList value="products" items={items} />
          <PageCount page={page} onClick={handleClickPageChange} />
        </S.Contents>
      </S.ContentsWrapper>
    </S.Background>
  );
}

export default HomePage;
