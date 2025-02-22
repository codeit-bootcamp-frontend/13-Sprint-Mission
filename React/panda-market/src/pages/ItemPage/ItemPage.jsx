import { useParams } from "react-router-dom";
import ItemInfoSection from "./components/ItemInfoSection";
import styles from "./ItemPage.module.css";
import ItemCommentSection from "./components/ItemCommentSection";

function ItemPage() {
  const { productId } = useParams(null);

  return (
    <div className={styles.container}>
      <div className={styles.itemInfoContainer}>
        <ItemInfoSection productId={productId} />
      </div>
      <div className={styles.commentContainer}>
        <ItemCommentSection productId={productId} />
      </div>
    </div>
  );
}

export default ItemPage;
