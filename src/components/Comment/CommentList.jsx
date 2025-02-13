import * as S from "./CommentList.styles";
import dots from "../../assets/icons/dots.svg";
import { useState, useEffect } from "react";
import { getComments } from "../../api/comment";
import { useParams } from "react-router-dom";
import User from "../User/User";

export default function CommentList() {
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState(0);
  const { productId } = useParams();

  useEffect(() => {
    getComments(productId)
      .then((result) => setComments(result))
      .catch((error) => console.error(error));
  }, []);

  function SelectBox() {
    const options = [
      { id: 1, option: "수정하기" },
      { id: 2, option: "삭제하기" },
    ];
    return (
      <S.SelectList>
        {options.map((s) => (
          <S.SelectItem key={s.id}>{s.option}</S.SelectItem>
        ))}
      </S.SelectList>
    );
  }

  const handleOpenClick = (commentId) => {
    setCommentId((prevId) => (prevId === commentId ? null : commentId));
  };

  return (
    <S.ListContainer>
      {comments.map((comment) => (
        <S.Comment key={comment.id}>
          <S.Content>
            <S.Text>{comment.content}</S.Text>
            <S.Select>
              <S.Dots src={dots} onClick={() => handleOpenClick(comment.id)} />
              {commentId === comment.id && <SelectBox />}
            </S.Select>
          </S.Content>
          <User
            owner={comment.writer.nickname}
            createdAt={
              comment.updatedAt !== "" ? comment.updatedAt : comment.createdAt
            }
            detail={false}
          />
        </S.Comment>
      ))}
    </S.ListContainer>
  );
}
