import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 138px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24px;
  background-color: ${theme.color.bg};
  border-bottom: 1px solid ${theme.color.gray200};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ContentText = styled.p`
  flex: 1;
  height: 60px;
  word-wrap: break-word;
  color: ${theme.color.gray800};
  font: ${theme.font.H3Bold};
`;

export const Image = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.gray200};
  border-radius: 6px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const User = styled.span`
  color: ${theme.color.gray600};
  font: ${theme.font.H7Regular};
`;

export const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const LikeCount = styled.span`
  color: ${theme.color.gray500};
  font: ${theme.font.H7Regular};
`;

export const Date = styled.span`
  color: ${theme.color.gray400};
  font: ${theme.font.H7Regular};
`;
