import { useEffect, useState } from "react";
import { getItems } from "../../../apis/itemApi";
import ItemCard from "./ItemCard";
import styles from "./BestItemsSection.module.css";

function BestItems() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(4);

  // 아이템 불러오기
  const handleLoad = async (query) => {
    const { list } = await getItems(query);
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ page: 1, pageSize, order: "favorite" });
  }, [pageSize]);

  // 반응형
  useEffect(() => {
    function handleResize() {
      const newPageSize = getPageSize(window.innerWidth);
      if (newPageSize !== pageSize) {
        setPageSize(newPageSize);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pageSize]);

  function getPageSize(width) {
    if (width > 1200) return 4; // PC
    else if (width > 768) return 2; // Tablet
    else return 1; // Mobile
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>베스트 상품</div>
      {/* 상품 목록 */}
      <ul className={styles.itemList}>
        {items.map((item) => (
          <li key={item.id}>
            <ItemCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BestItems;
