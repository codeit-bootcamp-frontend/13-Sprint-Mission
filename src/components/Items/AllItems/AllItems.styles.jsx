import styled from "styled-components";

export const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 1200px;

  @media (max-width: 767px) {
    width: 343px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 710px;
  }
`;

export const AllHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: var(--gray900);
  margin: 0;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const Filter = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const AddBtn = styled.button`
  width: 133px;
  height: 42px;
  background-color: var(--primary);
  color: var(--gray100);
  border-radius: 8px;
  border: none;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  cursor: pointer;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const AddBtnForMedia = styled(AddBtn)`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const ItemCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  margin: auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
  }
`;
