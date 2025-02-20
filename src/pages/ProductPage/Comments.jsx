import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//
import * as S from "./Comments.style";
import { placeholder } from "../../constants/globalConstant";
import { button } from "../../constants/globalConstant";
import noComment from "../../assets/no-comments.svg";
import returnIcon from "../../assets/icons/return.icon.svg";
//
import { getProductComments } from "../../api/comment.api";
import { Input } from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import CommentCard from "../../components/CommentCard/CommentCard";
//

export default function Comments({ productId }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [comments, setComments] = useState({});
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();
  const handleLoad = async () => {
    const data = await getProductComments(productId);
    setComments(data);
  };
  const handleChange = () => {
    setIsDisabled(false);
  };
  const handleClickSubmit = () => {};
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <S.CommentWrapper>
      <S.InputWrapper>
        <Input
          onChange={handleChange}
          $comment
          placeholder={placeholder.createComment}
          label="문의하기"
        />
        <S.ButtonWrapper>
          <Button onClick={handleClickSubmit} disabled={isDisabled}>
            {button.send}
          </Button>
        </S.ButtonWrapper>
      </S.InputWrapper>
      {comments?.list?.length === 0 ? (
        <S.NoCommentWrapper>
          <S.NoCommentImgWrapper>
            <S.NoCommentImg src={noComment} />
            아직 문의가 없어요
          </S.NoCommentImgWrapper>
        </S.NoCommentWrapper>
      ) : (
        <S.CommentCardContainer>
          {comments?.list?.map((data) => (
            <CommentCard key={data.id} data={data} />
          ))}
        </S.CommentCardContainer>
      )}
      <Button onClick={() => navigate("/items")} $ medium $circle>
        목록으로 돌아가기
        <img src={returnIcon} />
      </Button>
    </S.CommentWrapper>
  );
}
