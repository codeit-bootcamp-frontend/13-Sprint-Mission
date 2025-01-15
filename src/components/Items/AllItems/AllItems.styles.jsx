import styled from "styled-components";

export const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const AllHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: var(--gray900);
  margin: 0;
  margin-bottom: 16px;
`;

export const Filter = styled.div`
  display: flex;
  gap: 12px;
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
`;

export const ItemCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
`;
