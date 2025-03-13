import styled from "styled-components";
import theme from "../styles/theme";

export const CommentContainer = styled.div`
  margin-top: 16px;
`;

export const InquiryItem = styled.div`
  padding: 14px;
  border-bottom: 1px solid ${theme.colors.Gray200};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const CommentText = styled.p`
  font: ${theme.fonts.H6Regular};
  color: ${theme.colors.Gray800};
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nickname = styled.span`
  font: ${theme.fonts.H8};
  color: ${theme.colors.Gray600};
`;

export const TimeAgo = styled.span`
  font-size: 12px;
  color: ${theme.colors.Gray400};
  margin-top: 4px;
`;
