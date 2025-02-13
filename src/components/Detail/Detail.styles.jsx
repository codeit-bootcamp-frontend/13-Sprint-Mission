import styled from "styled-components";
import theme from "../../styles/theme";

export const DetailContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${theme.color.gray200};
`;

export const Image = styled.img`
  width: 496px;
  height: 496px;
  border-radius: 16px;
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
  margin-bottom: 24px;
  border-bottom: 1px solid ${theme.color.gray200};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font: ${theme.font.H2Regular};
  color: ${theme.color.gray800};
`;

export const Dots = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Price = styled.div`
  font: ${theme.font.H0};
  color: ${theme.color.gray800};
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Label = styled.div`
  font: ${theme.font.H5Bold};
  color: ${theme.color.gray600};
`;

export const Content = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.gray600};
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
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
