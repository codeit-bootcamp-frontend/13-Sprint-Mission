import { useEffect, useState } from "react";
import { getItems } from "../../../apis/itemApi";
import useWindowSize from "../../../hooks/useWindowSize";
import ItemCard from "./ItemCard";
import styles from "./BestItemsSection.module.css";

function BestItems() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const { width } = useWindowSize();

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
    let newPageSize;

    if (width > 1200) {
      newPageSize = 4; // PC
    } else if (width > 768) {
      newPageSize = 2; // Tablet
    } else {
      newPageSize = 1; // Mobile
    }

    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
    }
  }, [width, pageSize]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>베스트 상품</div>
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
