import styled from "styled-components";
import theme from "../../style/theme";
//
export interface Props {
  src: string;
}
export const ProductInfoWrapper = styled.div`
  display: flex;
  gap: 24px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${theme.color.gray200};
  @media (max-width: 375px) {
    flex-direction: column;
    padding-bottom: 24px;
    gap: 16px;
  }
  @media (min-width: 375px) and (max-width: 590px) {
    flex-direction: column;
    padding-bottom: 32px;
    gap: 16px;
  }
  @media (min-width: 591px) and (max-width: 768px) {
    gap: 16px;
    padding-bottom: 32px;
  }
`;

export const ProductImg = styled.img<Props>`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const ImgDiv = styled.div`
  width: 486px;
  height: 486px;
  aspect-ratio: 1/1;
  @media (max-width: 375px) {
    min-width: 343px;
    min-height: 343px;
  }
  @media (min-width: 375px) and (max-width: 590px) {
    min-width: 343px;
    min-height: 343px;
    margin: 0px auto;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    max-width: 340px;
    max-height: 340px;
  }
`;
export const InfoProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 62px;
`;
export const InfoTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TitleEditBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid ${theme.color.gray200};
`;
export const TitlePriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ProductTitle = styled.p`
  font: ${theme.font.H2Bold};
  @media (max-width: 375px) {
    font: ${theme.font.H5Bold};
  }
  @media (min-width: 376px) and (max-width: 768px) {
    font: ${theme.font.H3Bold};
  }
`;

export const ProductPrice = styled.p`
  font: ${theme.font.H1};
  @media (max-width: 375px) {
    font: ${theme.font.H2Bold};
  }
  @media (min-width: 376px) and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const DesTitleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 375px) {
    gap: 8px;
  }
`;
export const DescriptionTitle = styled.p`
  font: ${theme.font.H5Bold};
  color: ${theme.color.gray600}; //4b5563
  @media (max-width: 768px) {
    font: ${theme.font.H7Bold};
  }
`;

export const ProductContent = styled.div`
  overflow-y: scroll;
  height: 104px;
  font: ${theme.font.H5Regular};
  @media (max-width: 768px) {
    height: 156px;
  }
`;
export const ProfileFavorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const BorderLeft = styled.div`
  border-left: 1px solid ${theme.color.gray200};
  padding-left: 24px;
  height: 34px;
`;
export const ProfileImg = styled.img`
  width: 40px;
  aspect-ratio: 1/1;
`;
export const NickNameDate = styled.div`
  display: flex;
`;
export const NickName = styled.p`
  font: ${theme.font.H7Medium};
  color: ${theme.color.gray600};
`;
export const CreatedAt = styled.p`
  font: ${theme.font.H7Regular};
  color: ${theme.color.gray400};
`;
