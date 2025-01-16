import heartIcon from "../assets/icon/ic_heart.svg";
import "./ItemCard.css";

function ItemCard({ item, best }) {
  const { images, name, price, favoriteCount } = item;

  const imgClassNames = `${best ? "bestImg" : ""} itemImg`;

  return (
    <>
      <div>
        <img src={images} className={imgClassNames} alt={name} />
      </div>
      <div>
        <ul className="itemInfo">
          <li className="itemName">{name}</li>
          <li className="itemPrice">{price}원</li>
          <li className="itemLike">
            <img src={heartIcon} alt="좋아요" />
            {favoriteCount}
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemCard;
