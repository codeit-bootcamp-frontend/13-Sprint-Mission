import * as S from "./CommentList.styles";
import dots from "../../assets/icons/dots.svg";
import { useState, useEffect } from "react";
import { Comment, getComments } from "../../api/comment";
import { useParams } from "react-router-dom";
import User from "../User/User";
import Input from "../common/Input/Input";
import NoneComment from "../NoneComment/NoneComment";
import { ProductParams } from "../Detail/Detail";

export default function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentId, setCommentId] = useState<number | null>(null);
  const [editCommentId, setEditCommentId] = useState<number | null>(null);
  const { productId } = useParams<ProductParams>();

  useEffect(() => {
    if (productId) {
      getComments(productId)
        .then((result) => setComments(result))
        .catch((error) => console.error(error));
    }
  }, [productId]);

  function SelectBox({ id }: { id: number | null }) {
    const options = [
      {
        id: 1,
        option: "수정하기",
        onClick: () => {
          setEditCommentId(id);
          setCommentId(null);
        },
      },
      {
        id: 2,
        option: "삭제하기",
        onClick: () => {
          setCommentId(null);
        },
      },
    ];
    return (
      <S.SelectList>
        {options.map((s) => (
          <S.SelectItem key={s.id} onClick={s.onClick}>
            {s.option}
          </S.SelectItem>
        ))}
      </S.SelectList>
    );
  }

  const handleOpenClick = (commentId: number) => {
    setCommentId((prevId) => (prevId === commentId ? null : commentId));
  };

  if (comments.length === 0) return <NoneComment />;

  return (
    <S.ListContainer>
      {comments.map((comment) => (
        <S.Comment key={comment.id}>
          {editCommentId === comment.id ? (
            <Input
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              defaultValue={comment.content}
              style={{ height: "80px" }}
              isTextarea
            />
          ) : (
            <S.Content>
              <S.Text>{comment.content}</S.Text>
              <S.Select>
                <S.Dots
                  src={dots}
                  onClick={() => handleOpenClick(comment.id)}
                />
                {commentId === comment.id && <SelectBox id={comment.id} />}
              </S.Select>
            </S.Content>
          )}
          <S.UserWrapper>
            <User
              owner={comment.writer.nickname}
              createdAt={
                comment.updatedAt !== "" ? comment.updatedAt : comment.createdAt
              }
              detail={false}
            />
            {editCommentId === comment.id && (
              <S.EditBtn>
                <span onClick={() => setEditCommentId(null)}>취소</span>
                <button onClick={() => setEditCommentId(null)}>
                  수정 완료
                </button>
              </S.EditBtn>
            )}
          </S.UserWrapper>
        </S.Comment>
      ))}
    </S.ListContainer>
  );
}
