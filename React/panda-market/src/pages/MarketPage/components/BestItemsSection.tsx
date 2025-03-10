import { useEffect, useState } from "react";
import { getItems } from "../../../apis/itemApi";
import { Product } from "../../../utils/types";
import useWindowSize from "../../../hooks/useWindowSize";
import BREAKPOINTS from "../../../utils/breakpoints";
import ItemCard from "./ItemCard";
import styles from "./BestItemsSection.module.css";

function BestItems() {
  const [items, setItems] = useState<Product[]>([]);
  const [pageSize, setPageSize] = useState(4);
  const { width } = useWindowSize();

  // 아이템 불러오기
  useEffect(() => {
    const handleLoad = async () => {
      try {
        const { list } = await getItems({
          page: String(1),
          pageSize: String(pageSize),
          order: "favorite",
        });
        setItems(list);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
          console.error("ERROR: ", error);
        } else {
          console.error("An unknown error occurred");
        }
      }
    };
    handleLoad();
  }, [pageSize]);

  // 반응형
  useEffect(() => {
    let newPageSize;

    if (width > BREAKPOINTS.DESKTOP) {
      newPageSize = 4; // PC
    } else if (width > BREAKPOINTS.TABLET) {
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
