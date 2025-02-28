import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 384px;
  height: 169px;
  padding: 0 24px;
  background-color: ${theme.color.gray50};
  border-radius: 8px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

export const BestTitle = styled.div`
  width: 102px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: ${theme.color.blue};
  border-radius: 0 0 16px 16px;
`;

export const Best = styled.span`
  color: ${theme.color.white};
  font: ${theme.font.H5Bold};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const ContentText = styled.p`
  flex: 1;
  height: 60px;
  word-wrap: break-word;
  color: ${theme.color.gray800};
  font: ${theme.font.H3Bold};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: left;
  overflow: hidden;
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
  align-items: flex-end;
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
