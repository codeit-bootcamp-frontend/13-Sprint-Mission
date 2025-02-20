import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //TODO전역 스타일 화 하기
`;
export const ContentsWrapper = styled.div`
  width: 1200px;
  padding: 24px;
`;
export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  @media (max-width: 375px) {
    gap: 24px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    gap: 40px;
  }
`;
