//MarketPage.jsx
import { useEffect, useState } from "react";
import { getProducts } from "../../api/itemApi";
import CardList from "../../components/common/CardList";
import ItemsHeader from "./ItemsHeader";
import Pagination from "../../components/common/Pagination";
import styled from "styled-components";

export default function MarketPage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  useEffect(() => {
    setIsLoading(true);
    getProducts({
      page: currentPage,
      pageSize: 10,
      orderBy: sortOption,
      keyword: searchTerm || undefined,
    })
      .then((response) => {
        setItems(response.list);
        setTotalPages(5);
      })
      .catch((error) => {
        console.error("상품 불러오기 실패:", error);
      })
      .finally(() => setIsLoading(false));
  }, [currentPage, sortOption, searchTerm]);

  const bestItems = [...items]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 4);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedItems =
    sortOption === "favorite"
      ? [...filteredItems].sort((a, b) => b.favoriteCount - a.favoriteCount)
      : filteredItems;

  return (
    <div style={{ overflowY: "auto" }}>
      <PageWrapper>
        <Section>
          <Title>베스트 상품</Title>
          {isLoading ? (
            <p>로딩 중...</p>
          ) : (
            <CardList items={bestItems} size="large" />
          )}
        </Section>

        <Section>
          <ItemsHeader
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          {isLoading ? (
            <p>로딩 중...</p>
          ) : (
            <>
              <CardList items={sortedItems} size="small" />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </Section>
      </PageWrapper>
    </div>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 1280px) {
    max-width: 100%;
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

const Title = styled.h2`
  font: ${(props) => props.$font};
`;
