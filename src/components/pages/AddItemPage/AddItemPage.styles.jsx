import { styled } from "styled-components";

export const AddItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddItem = styled.form`
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const AddItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Add = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: var(--gray800);
`;

export const AddBtn = styled.button`
  width: 72px;
  height: 42px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  background-color: var(--primary);
  color: var(--gray100);
  cursor: pointer;

  &:disabled {
    background-color: var(--gray400);
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AddImg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 24px;
`;

export const TagList = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 14px;
`;
