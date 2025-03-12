import styled from "styled-components";
import theme from "../styles/theme";
import ic_user from "../assets/images/icons/ic_user.svg";
import EditDropdown from "./common/EditDropdown";

export default function Comments({ comments }) {
  return (
    <CommentContainer>
      {comments.map((comment) => (
        <InquiryItem key={comment.id}>
          <CommentHeader>
            <UserInfo>
              <ProfileImage src={ic_user} alt="프로필" />
              <UserDetails>
                <Nickname>{comment.writer?.nickname || "알 수 없음"}</Nickname>
                <TimeAgo>{getTimeAgo(comment.createdAt)}</TimeAgo>
              </UserDetails>
            </UserInfo>

            <EditDropdown />
          </CommentHeader>

          <CommentText>{comment.content}</CommentText>
        </InquiryItem>
      ))}
    </CommentContainer>
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

const CommentContainer = styled.div`
  margin-top: 16px;
`;

const InquiryItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${theme.colors.Gray200};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  margin-top: 4px;
`;
