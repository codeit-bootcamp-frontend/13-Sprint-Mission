import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AddHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.div`
  font: ${theme.fonts.H3Bold};
`;

export const SubmitBtn = styled.button`
  width: 74px;
  height: 42px;
  background-color: ${({ $isActive }) =>
    $isActive ? theme.colors.Primary200 : theme.colors.Gray400};
  font: ${theme.fonts.H5Regular};
  color: ${theme.colors.Gray100};
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font: ${theme.fonts.H4Bold};
`;
