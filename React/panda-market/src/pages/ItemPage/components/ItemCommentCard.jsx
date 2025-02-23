import { getFormattedDate, getPassedTime } from "../../../utils/dateTimeUtils";
import MenuButton from "../../../components/UI/MenuButton";
import UserDefaultImg from "../../../assets/user/default-profile.png";
import styles from "./ItemCommentCard.module.css";

function ItemCommentCard({
  comment: {
    content,
    updatedAt,
    writer: { nickname, image },
  },
}) {
  const passedTime = getPassedTime(updatedAt);
  const updatedDate = getFormattedDate(updatedAt);

  return (
    <div className={styles.container}>
      <MenuButton className={styles.menuButton} />
      <div className={styles.contentSection}>{content}</div>
      <div className={styles.infoSection}>
        {image === null ? (
          <img src={UserDefaultImg} className={styles.userImg} alt="" />
        ) : (
          <img src={image} className={styles.userImg} alt="" />
        )}
        <div className={styles.userInfo}>
          <div className={styles.userNickname}>{nickname}</div>
          <div className={styles.updatedAt}>
            {passedTime > 24 ? updatedDate : `${passedTime}시간 전`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCommentCard;
