import * as S from "./Comments.styles";
import ic_user from "../assets/images/icons/ic_user.svg";
import EditDropdown from "./common/EditDropdown";

export default function Comments({ comments }) {
  return (
    <S.CommentContainer>
      {comments.map((comment) => (
        <S.InquiryItem key={comment.id}>
          <S.CommentHeader>
            <S.CommentText>{comment.content}</S.CommentText>
            <EditDropdown />
          </S.CommentHeader>
          <S.UserInfo>
            <S.ProfileImage src={ic_user} alt="프로필" />
            <S.UserDetails>
              <S.Nickname>
                {comment.writer?.nickname || "알 수 없음"}
              </S.Nickname>
              <S.TimeAgo>{getTimeAgo(comment.createdAt)}</S.TimeAgo>
            </S.UserDetails>
          </S.UserInfo>
        </S.InquiryItem>
      ))}
    </S.CommentContainer>
  );
}

function getTimeAgo(createdAt) {
  if (!createdAt) return "방금 전";

  const now = new Date();
  const createdDate = new Date(createdAt);
  const diffInMs = now - createdDate; // 밀리초 단위 차이
  const diffInHours = diffInMs / (1000 * 60 * 60); // 시간 단위 변환

  if (diffInHours < 1) {
    return "방금 전";
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}시간 전`; // 24시간 미만이면 "n시간 전"
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}일 전`; // 1일 이상이면 "n일 전"
  }
}
