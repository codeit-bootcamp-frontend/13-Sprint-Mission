import { useEffect, useState, useRef } from "react";
import { getItemComments } from "../../../apis/itemApi";
import ItemCommentCard from "./ItemCommentCard";

function ItemCommentSection({ productId }) {
  const [comments, setComments] = useState([]);
  const [cursor, setCursor] = useState(0);
  const observerRef = useRef(null);

  const handleLoad = async () => {
    try {
      const { list, nextCursor } = await getItemComments(productId, {
        cursor,
      });
      setComments((prev) => [...prev, ...list]);
      setCursor(nextCursor);
    } catch (error) {
      alert(error.message);
      console.error("ERROR: ", error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

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
  }, [cursor]);

  return (
    <>
      <div>
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            ref={index === comments.length - 1 ? observerRef : null}
          >
            <ItemCommentCard comment={comment} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ItemCommentSection;
