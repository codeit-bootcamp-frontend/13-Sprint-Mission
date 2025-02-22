import { useEffect, useState } from "react";
import { getItemById } from "../../../apis/itemApi";
import { getFormattedDate } from "../../../utils/date";
import MenuIcon from "../../../assets/icon/ic_menu.svg";
import SellerIcon from "../../../assets/user/default-profile.png";
import HeartIcon from "../../../assets/icon/ic_heart.svg";
import styles from "./ItemInfoSection.module.css";
import MenuButton from "../../../components/UI/MenuButton";

function ItemInfoSection({ productId }) {
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
    name,
    description,
    price,
    tags,
    images,
    favoriteCount,
    createdAt,
    ownerNickname,
  } = item;

  const formattedRegisterDate = getFormattedDate(createdAt);

  return (
    <div className={styles.container}>
      <div className={styles.itemImgSection}>
        <img src={images} className={styles.itemImg} alt={name} />
      </div>
      <div className={styles.itemInfoSection}>
        <div className={styles.itemInfoTopSection}>
          <div className={styles.infoTitle}>
            <h2 className={styles.itemName}>{name}</h2>
            <h1 className={styles.infoPrice}>{price.toLocaleString()}원</h1>
            <MenuButton className={styles.menuButton} />
          </div>
          <div className={styles.infoDetailContainer}>
            <div className={styles.infoDetail}>
              <h3 className={styles.subtitle}>상품 소개</h3>
              <div className={styles.itemDescription}>{description}</div>
            </div>
            <div className={styles.infoDetail}>
              <h3 className={styles.subtitle}>상품 태그</h3>
              <div className={styles.itemTags}>
                {tags.map((tag, index) => (
                  <div key={index} className={styles.itemTag}>
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itemInfoBottomSection}>
          <div className={styles.AdditionalInfo}>
            <div className={styles.sellerIconContainer}>
              <img src={SellerIcon} className={styles.sellerIcon} alt="" />
            </div>
            <div className={styles.sellerInfo}>
              <div className={styles.sellerName}>{ownerNickname}</div>
              <div className={styles.registerDate}>{formattedRegisterDate}</div>
            </div>
          </div>
          <div className={styles.itemLikeInfo}>
            <div className={styles.LikeButtonContainer}>
              <button type="button" className={styles.likeButton}>
                <img src={HeartIcon} className={styles.likeIcon} alt={name} />
                <div className={styles.likeCount}>{favoriteCount}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemInfoSection;
