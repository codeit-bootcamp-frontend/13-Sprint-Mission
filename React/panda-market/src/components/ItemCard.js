import testImg from "../assets/home/Img_home_01.png";
import heartIcon from "../assets/icon/ic_heart.svg";
import style from "./ItemCard.module.css";

function ItemCard() {
  return (
    <>
      <div>
        <img src={testImg} className={style.itemImg} />
      </div>
      <div>
        <ul className={style.itemInfo}>
          <li className={style.itemName}>로봇 청소기</li>
          <li className={style.itemPrice}>500,000원</li>
          <li className={style.itemLike}>
            <img src={heartIcon} />
            240
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemCard;
