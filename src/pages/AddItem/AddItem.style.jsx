import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  margin: 0;
  overflow-x: none;
  padding: 24px 24px;
  @media (max-width: 375px) {
    padding: 24px 15px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    padding: 16px 24px;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 29px;
  flex-direction: column;

  @media (max-width: 375px) {
    width: 100%;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 42px;
  width: 100%;
`;
export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const ButtonContainer = styled.div`
  width: 74px;
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TagInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
