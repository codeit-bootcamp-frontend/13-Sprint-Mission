import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../apis/itemApi";
import styles from "./ItemPage.module.css";

function ItemPage() {
  const { productId } = useParams(null);
  const [item, setItem] = useState();

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const data = await getItemById(productId);
        setItem(data);
      } catch (error) {
        alert(error.message);
        console.error("ERROR: ", error);
      }
    };
    handleLoad();
  }, [productId]);

  if (!item) {
    return;
  }

  const {
    id,
    name,
    description,
    price,
    tags,
    images,
    ownerId,
    favoriteCount,
    createdAt,
    updatedAt,
    ownerNickname,
    isFavorite,
  } = item;

  return <>{id}</>;
}

export default ItemPage;
