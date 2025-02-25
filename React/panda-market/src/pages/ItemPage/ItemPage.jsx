import { Link, useParams } from "react-router-dom";
import ItemInfoSection from "./components/ItemInfoSection";
import ItemCommentSection from "./components/ItemCommentSection";
import PrimaryButton from "../../components/UI/PrimaryButton";
import BackIcon from "../../assets/icon/ic_back.svg";
import styles from "./ItemPage.module.css";

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
      <Link to="/items" className={styles.buttonContainer}>
        <PrimaryButton className={styles.backButton}>
          목록으로 돌아가기
          <img src={BackIcon} alt="" />
        </PrimaryButton>
      </Link>
    </div>
  );
}

export default ItemPage;
