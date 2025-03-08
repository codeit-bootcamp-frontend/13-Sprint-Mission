import { useNavigate } from "react-router-dom";
import { Product } from "../../../utils/types";
import heartIcon from "../../../assets/icon/ic_heart.svg";
import styles from "./ItemCard.module.css";

interface ItemCardProps {
  item: Product;
}

function ItemCard({ item }: ItemCardProps) {
  const { id, images, name, price, favoriteCount } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/items/${id}`);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        <img src={images[0]} className={styles.itemImg} alt={name} />
      </button>
      <div>
        <ul className={styles.itemInfo}>
          <li>
            <button
              type="button"
              onClick={handleClick}
              className={styles.itemName}
            >
              {name}
            </button>
          </li>
          <li className={styles.itemPrice}>{price}원</li>
          <li className={styles.itemLike}>
            <img src={heartIcon} alt="" />
            {favoriteCount}
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemCard;
