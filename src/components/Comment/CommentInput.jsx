import Input from "../common/Input/Input";
import * as S from "./CommentInput.styles";
import { useState } from "react";

export default function CommentInput() {
  const [comment, setComment] = useState("");

  return (
    <S.CommentContainer>
      <Input
        label="문의하기"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        style={{ height: "104px" }}
        isTextarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <S.RegisterBtn>
        <button disabled={!comment.trim()} onClick={() => setComment("")}>
          등록
        </button>
      </S.RegisterBtn>
    </S.CommentContainer>
  );
}
