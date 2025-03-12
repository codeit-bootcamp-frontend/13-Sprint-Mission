import styled from "styled-components";
import theme from "../styles/theme";
import ic_user from "../assets/images/icons/ic_user.svg";

export default function Comments({ comments }) {
  return (
    <CommentContainer>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </CommentContainer>
  );
}

function CommentItem({ comment }) {
  return (
    <InquiryItem>
      <CommentText>{comment.content}</CommentText>
      <UserInfo>
        <ProfileImage src={ic_user} alt="프로필" />
        <UserDetails>
          <Nickname>{comment.writer?.nickname || "알 수 없음"}</Nickname>
          <TimeAgo>{getTimeAgo(comment.createdAt)}</TimeAgo>
        </UserDetails>
      </UserInfo>
    </InquiryItem>
  );
}

function getTimeAgo(createdAt) {
  if (!createdAt) return "방금 전";
  const diff = (new Date() - new Date(createdAt)) / (1000 * 60 * 60); // 시간 단위로 변환
  return diff < 1 ? "방금 전" : `${Math.floor(diff)}시간 전`;
}

const CommentContainer = styled.div`
  margin-top: 16px;
`;

const InquiryItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CommentText = styled.p`
  font: ${theme.fonts.H6Regular};
  color: ${theme.colors.Gray800};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.span`
  font: ${theme.fonts.H8};
  color: ${theme.colors.Gray600};
`;

const TimeAgo = styled.span`
  font-size: 12px;
  color: ${theme.colors.Gray400};
`;
