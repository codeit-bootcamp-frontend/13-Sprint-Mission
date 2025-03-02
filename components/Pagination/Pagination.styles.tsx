import theme from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

export const Pages = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid ${theme.color.gray200};
  background-color: ${theme.color.white};
  cursor: pointer;
`;

export const Arrow = styled(Image)<{ disabled: boolean }>`
  ${({ disabled }) => disabled && `opacity : 0.2`};
`;

export const Page = styled(Button)<{ isActive?: boolean }>`
  font: ${theme.font.H5Bold};
  color: ${({ isActive }) =>
    isActive ? `${theme.color.gray50}` : `${theme.color.gray500}`};
  background-color: ${({ isActive }) =>
    isActive ? `${theme.color.blue}` : `${theme.color.white}`};
`;
