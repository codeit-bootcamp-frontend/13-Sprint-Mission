import heartIcon from "../../../assets/icon/ic_heart.svg";
import styles from "./ItemCard.module.css";

function ItemCard({ item, best }) {
  const { images, name, price, favoriteCount } = item;

  const imgClassNames = `${best ? styles.bestImg : ""} ${styles.itemImg}`;

  return (
    <>
      <div className="imgContainer">
        <img src={images} className={imgClassNames} alt={name} />
      </div>
      <div>
        <ul className={styles.itemInfo}>
          <li className={styles.itemName}>{name}</li>
          <li className={styles.itemPrice}>{price}원</li>
          <li className={styles.itemLike}>
            <img src={heartIcon} alt="좋아요" />
            {favoriteCount}
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemCard;
