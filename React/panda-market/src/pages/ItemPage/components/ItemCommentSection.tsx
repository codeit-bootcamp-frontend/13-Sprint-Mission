import { useEffect, useState, useRef, useCallback, ChangeEvent } from "react";
import { getItemComments } from "../../../apis/itemApi";
import { Comment } from "../../../utils/types";
import PrimaryButton from "../../../components/UI/PrimaryButton";
import ItemCommentCard from "./ItemCommentCard";
import EmptyCommentImg from "../../../assets/image/Img_inquiry_empty.svg";
import styles from "./ItemCommentSection.module.css";

interface ItemCommentSectionProps {
  productId: string;
}

function ItemCommentSection({ productId }: ItemCommentSectionProps) {
  const [newComment, setNewComment] = useState("");
  const [registerAvailable, setRegisterAvailable] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [cursor, setCursor] = useState(0);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handleLoad = useCallback(async () => {
    try {
      const { list, nextCursor } = await getItemComments(productId, {
        cursor,
      });
      if (list !== null) {
        setComments((prev) => [...prev, ...list]);
      }
      if (nextCursor !== null) {
        setCursor(nextCursor);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
        console.error("ERROR: ", error);
      } else {
        console.error("An unknown error occurred");
      }
    }
  }, [productId, cursor]);

  useEffect(() => {
    if (cursor === null) return;
    handleLoad();
  }, [cursor, handleLoad]);

  useEffect(() => {
    if (cursor === null) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) handleLoad();
      },
      { threshold: 1 }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [cursor, handleLoad]);

  useEffect(() => {
    if (newComment) {
      setRegisterAvailable(true);
    } else {
      setRegisterAvailable(false);
    }
  }, [newComment]);

  return (
    <div className={styles.container}>
      <div className={styles.newCommentSection}>
        <label>
          문의하기
          <textarea
            id="newComment"
            value={newComment}
            onChange={handleChange}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            className={styles.newComment}
          />
        </label>
        <div className={styles.registerButtonContainer}>
          <PrimaryButton
            type="submit"
            className={styles.registerButton}
            disabled={!registerAvailable}
          >
            등록
          </PrimaryButton>
        </div>
      </div>
      {comments.length === 0 ? (
        <div className={styles.emptyComment}>
          <div>
            <img
              src={EmptyCommentImg}
              className={styles.emptyCommentImg}
              alt=""
            />
          </div>
          <div className={styles.emptyCommentText}>아직 문의가 없어요</div>
        </div>
      ) : (
        <div className={styles.commentListSection}>
          {comments.map((comment, index) => (
            <div
              key={comment.id}
              ref={index === comments.length - 1 ? observerRef : null}
            >
              <ItemCommentCard comment={comment} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemCommentSection;
