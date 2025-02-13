import * as S from "./Comment.styles";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

export default function Comment() {
  return (
    <S.Container>
      <CommentInput />
      <CommentList />
    </S.Container>
  );
}
