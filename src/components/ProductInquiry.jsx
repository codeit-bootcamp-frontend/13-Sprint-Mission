import { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Comments from "./Comments";

export default function ProductInquiry({ productId }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitComment();
    }
  };

  const handleSubmitComment = () => {
    if (!comment.trim() || !productId) return;

    setIsSubmitting(true);

    fetch(
      `https://panda-market-api.vercel.app/products/${productId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: comment }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setComments((prevComments) => [...prevComments, data]);
        setComment("");
      })
      .catch(() => {
        alert("댓글 등록에 실패했습니다.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    if (!productId) return;

    fetch(
      `https://panda-market-api.vercel.app/products/${productId}/comments?limit=10`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data.list || []);
      })
      .catch(console.error);
  }, [productId]);

  return (
    <Container>
      <Title>문의하기</Title>
      <FormContainer>
        <Input
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 삭제될 수 있습니다."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          {...(comment.length > 0 ? { active: true } : {})}
          onClick={comment.length > 0 ? handleSubmitComment : undefined}
          disabled={isSubmitting}
        >
          등록
        </Button>
      </FormContainer>

      <Comments comments={comments} />
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
  width: 1200px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  position: relative;
  gap: 24px;
`;

const Input = styled.textarea`
  height: 104px;
  width: 100%;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  resize: none;
  min-height: 80px;
  font-size: 14px;
  color: ${theme.colors.Gray400};
  background-color: ${theme.colors.Gray100};
  outline: none;
`;

const Button = styled.button.attrs(({ active }) => ({
  "data-active": active || undefined,
}))`
  width: 74px;
  height: 42px;
  padding: 10px;
  border: none;
  border-radius: 12px;
  background-color: ${({ active }) =>
    active ? theme.colors.Primary200 : theme.colors.Gray400};
  color: white;
  font-size: 16px;
  cursor: ${({ active }) => (active ? "pointer" : "default")};
`;
