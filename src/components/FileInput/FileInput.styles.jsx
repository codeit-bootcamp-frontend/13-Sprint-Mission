import { styled } from "styled-components";

export const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: var(--gray800);
`;

export const File = styled.div`
  width: 282px;
  height: 282px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray100);
  border-radius: 12px;
  cursor: pointer;
`;

export const Div = styled.div`
  width: 74px;
  height: 86px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PlusIcon = styled.img`
  width: 48px;
  height: 48px;
`;

export const AddImg = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--gray400);
`;
