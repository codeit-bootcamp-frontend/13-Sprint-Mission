import styled from "styled-components";
import theme from "../../styles/theme";

export const DetailContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${theme.color.gray200};

  @media (max-width: 375px) {
    flex-direction: column;
    padding-bottom: 16px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 32px;
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  max-width: 486px;
  min-width: 343px;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 16px;
  background-color: ${theme.color.gray200};
`;

export const NoneImageContainer = styled.div`
  max-width: 486px;
  min-width: 343px;
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 16px;
  background-color: ${theme.color.gray200};
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

  @media (max-width: 375px) {
    gap: 24px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    gap: 40px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${theme.color.gray200};

  @media (max-width: 768px) {
    gap: 8px;
    padding-bottom: 8px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font: ${theme.font.H2Regular};
  color: ${theme.color.gray800};

  @media (max-width: 375px) {
    font: ${theme.font.H5Regular};
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font: ${theme.font.H3Regular};
  }
`;

export const Dots = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Price = styled.div`
  font: ${theme.font.H0};
  color: ${theme.color.gray800};

  @media (max-width: 375px) {
    font: ${theme.font.H2Bold};
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font: ${theme.font.H1};
    font-size: 32px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const Label = styled.div`
  font: ${theme.font.H5Bold};
  color: ${theme.color.gray600};
  padding-bottom: 16px;

  @media (max-width: 768px) {
    padding-bottom: 8px;
    font: ${theme.font.H7Bold};
  }
`;

export const Content = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.gray600};
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px 12px;
  border-radius: 35px;
  border: 1px solid ${theme.color.gray200};
  cursor: pointer;
`;

export const Heart = styled.img`
  width: 32px;
  height: 32px;
`;

export const HeartCount = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.gray500};
`;
