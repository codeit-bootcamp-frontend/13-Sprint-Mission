import { styled } from "styled-components";

export const SearchContainer = styled.div`
  width: 325px;
  height: 42px;
  padding: 9px 20px;
  background-color: var(--gray100);
  border-radius: 12px;
  display: flex;
  gap: 4px;
`;

export const SearchImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--gray400);
  }
`;
