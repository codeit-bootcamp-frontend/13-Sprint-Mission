//itemDetail.styles.jsx
import styled from "styled-components";
import theme from "../styles/theme";

export const DetailContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e5e7eb;
`;

export const Image = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 16px;
  background-color: ${theme.colors.Gray200};
`;

export const NoneImageContainer = styled.div`
  max-width: 500px;
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 16px;
  background-color: ${theme.colors.Gray200};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoneImage = styled.img`
  width: 60px;
  height: 60px;
`;

export const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 62px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${theme.colors.Gray200};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font: ${theme.fonts.H2Bold};
  color: ${theme.colors.Gray800};
`;

export const Price = styled.h1`
  font: ${theme.fonts.H0};
  color: ${theme.colors.Gray800};
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font: ${theme.fonts.H5Regular};
  color: ${theme.colors.Gray600};
  min-height: 200px; /* 상품 정보 섹션 최소 높이 유지 */
`;

export const Label = styled.p`
  font: ${theme.fonts.H5Bold};
  color: ${theme.colors.Gray600};
  padding-bottom: 16px;
  max-height: 5em; /* 최대 5줄까지만 표시 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 5줄 이상이면 숨김 */
  -webkit-box-orient: vertical;
  white-space: normal; /* 줄바꿈 유지 */
`;

export const Content = styled.p`
  font: ${theme.fonts.H5Regular};
  color: ${theme.colors.Gray600};
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 6px 12px 6px 16px;
  border-radius: 26px;
  background-color: ${theme.colors.Gray100};
  color: ${theme.fonts.H5Regular};
  gap: 10px;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
`;

export const SellerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SellerName = styled.p`
  font: ${theme.fonts.H7Regular};
  color: ${theme.colors.Gray600};
`;

export const Updated = styled.p`
  font: ${theme.fonts.H7Regular};
  color: ${theme.colors.Gray400};
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid ${theme.colors.Gray200};
  border-radius: 20px;
  padding: 6px 12px;
  background: none;
  cursor: pointer;
  transition: 0.2s;
`;

export const Like = styled.img`
  width: 24px;
  height: 24px;
`;

export const LikeCount = styled.p`
  font: ${theme.fonts.H5Regular};
  color: ${theme.colors.Gray500};
`;
