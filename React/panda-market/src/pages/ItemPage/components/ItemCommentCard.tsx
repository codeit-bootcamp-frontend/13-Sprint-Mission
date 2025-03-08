import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { getFormattedDate, getPassedTime } from "../../../utils/dateTimeUtils";
import { Comment } from "../../../utils/types";
import MenuButton from "../../../components/UI/MenuButton";
import PrimaryButton from "../../../components/UI/PrimaryButton";
import UserDefaultImg from "../../../assets/image/default-profile.png";
import styles from "./ItemCommentCard.module.css";

interface ItemCommentCardProps {
  comment: Comment;
}

function ItemCommentCard({
  comment: {
    content,
    updatedAt,
    writer: { nickname, image },
  },
}: ItemCommentCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [modifiedComment, setModifiedComment] = useState(content);
  const [editAvailable, setEditAvailable] = useState(false);

  const passedTime = getPassedTime(updatedAt);
  const updatedDate = getFormattedDate(updatedAt);

  const handleEditMode = () => {
    setIsEditMode(true);
    setIsMenuOpen(false);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setModifiedComment(event.target.value);
  };

  const handleEditCancel = () => {
    setIsEditMode(false);
    setModifiedComment(content);
  };

  const handleEditComplete = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsEditMode(false);
    // 나중에 수정한 코멘트 patch 함수 동작하도록 추가
    setModifiedComment(content);
  };

  useEffect(() => {
    if (modifiedComment !== content && modifiedComment) {
      setEditAvailable(true);
    } else {
      setEditAvailable(false);
    }
  }, [modifiedComment, content]);

  return (
    <div className={styles.container}>
      {!isEditMode && (
        <MenuButton
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      )}
      {isMenuOpen && (
        <div className={styles.commentMenuList}>
          <button className={styles.commentMenu} onClick={handleEditMode}>
            수정하기
          </button>
          <button className={styles.commentMenu}>삭제하기</button>
        </div>
      )}
      {isEditMode ? (
        <textarea
          id="modifiedComment"
          value={modifiedComment}
          onChange={handleChange}
          className={styles.modifiedComment}
        />
      ) : (
        <div className={styles.contentSection}>{content}</div>
      )}
      <div className={styles.bottomSection}>
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
        {isEditMode && (
          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={handleEditCancel}
            >
              취소
            </button>
            <PrimaryButton
              type="submit"
              className={styles.editCompleteButton}
              disabled={!editAvailable}
              onClick={handleEditComplete}
            >
              수정 완료
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemCommentCard;
