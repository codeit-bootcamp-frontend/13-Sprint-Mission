import ItemList from "../components/ItemList";
import "./BestItems.css";
import { useEffect, useState } from "react";
import { getItems } from "../api";

function BestItems() {
  const [items, setItems] = useState([]);
  const pageSize = 4;

  const handleLoad = async (query) => {
    const { list } = await getItems(query);
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ page: 1, pageSize, order: "favorite" });
  }, []);

  return (
    <>
      <div className="title">베스트 상품</div>
      <ItemList items={items} best={true} />
    </>
  );
}

export default BestItems;
