import { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../styles/theme";

export default function ProductInquiry({ productId }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://panda-market-api.vercel.app/products/${productId}/comments?limit=10`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data.list || []);
      })
      .catch((err) => console.error("댓글 불러오기 실패:", err));
  }, [productId]);

  return (
    <Container>
      <Title>문의하기</Title>
      <Input
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 삭제될 수 있습니다."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button active={comment.length > 0}>등록</Button>

      <InquiryList>
        {comments.map((comment) => (
          <InquiryItem key={comment.id}>
            <p>{comment.content}</p>
            <Author>작성자: {comment.writer.nickname}</Author>
          </InquiryItem>
        ))}
      </InquiryList>
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

const Button = styled.button`
  width: 74px;
  height: 42px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ active }) =>
    active ? theme.colors.Primary200 : theme.colors.Gray400};
  color: white;
  font-size: 16px;
  margin-top: 8px;
  cursor: ${({ active }) => (active ? "pointer" : "default")};
`;

const InquiryList = styled.div`
  margin-top: 16px;
`;

const InquiryItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Author = styled.span`
  font-size: 12px;
  color: #777;
`;
