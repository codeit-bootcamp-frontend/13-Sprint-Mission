import styled from "styled-components";
import theme from "../../style/theme";
//
export const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentsWrapper = styled.div`
  width: 1200px;
  @media (max-width: 375px) {
    padding: 16px;
    width: 100%;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    padding: 24px;
    width: 100%;
  }
`;
export const Contents = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font: ${theme.font.H3Bold};
  @media (max-width: 375px) {
    width: 92px;
    height: 32px;
  }
`;
export const TitleInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  height: auto;
`;
export const SearchBtnContainer = styled.div`
  width: 133px;
  height: 42px;
`;

export const InputContainer = styled.div`
  width: 325px;
  @media (max-width: 375px) {
    width: 288px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    width: 242px;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MobileTitleBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
