import { useNavigate } from "react-router-dom";
import heartIcon from "../../../assets/icon/ic_heart.svg";
import styles from "./ItemCard.module.css";

function ItemCard({ item }) {
  const { id, images, name, price, favoriteCount } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/items/${id}`);
  };

  return (
    <button onClick={handleClick}>
      <div className="imgContainer">
        <img src={images} className={styles.itemImg} alt={name} />
      </div>
      <div>
        <ul className={styles.itemInfo}>
          <li className={styles.itemName}>{name}</li>
          <li className={styles.itemPrice}>{price}원</li>
          <li className={styles.itemLike}>
            <img src={heartIcon} alt="" />
            {favoriteCount}
          </li>
        </ul>
      </div>
    </button>
  );
}

export default ItemCard;
