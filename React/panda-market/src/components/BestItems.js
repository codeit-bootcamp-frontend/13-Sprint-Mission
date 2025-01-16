import ItemList from "../components/ItemList";
import "./BestItems.css";
import { useEffect, useState } from "react";
import { getItems } from "../api";

function BestItems() {
  const [items, setItems] = useState([]);

  const handleLoad = async (orderQuery) => {
    const { list } = await getItems(orderQuery);
    setItems(list);
  };

  useEffect(() => {
    handleLoad("favorite");
  }, []);

  const bestItems = items.slice(0, 4);

  return (
    <>
      <div className="title">베스트 상품</div>
      <ItemList items={bestItems} best={true} />
    </>
  );
}

export default BestItems;
