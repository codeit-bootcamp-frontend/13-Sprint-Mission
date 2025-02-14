import styled from "styled-components";
import theme from "../../styles/theme";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 375px) {
    gap: 16px;
  }
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${theme.color.gray200};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  font: ${theme.font.H7Regular};
  color: ${theme.color.gray800};
`;

export const Select = styled.div`
  position: relative;
`;

export const Dots = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const SelectList = styled.ul`
  width: 139px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.gray300};
  border-radius: 8px;
  position: absolute;
  right: 0;
`;

export const SelectItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  font: ${theme.font.H5Regular};
  color: ${theme.color.gray500};
  cursor: pointer;

  &:hover {
    font: ${theme.font.H5Bold};
    color: ${theme.color.gray800};
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  span {
    padding: 0 20px;
    font: ${theme.font.H5Bold};
    color: ${theme.color.gray500};
    cursor: pointer;
  }

  button {
    width: 106px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.color.blue};
    border-radius: 8px;
    font: ${theme.font.H5Bold};
    color: ${theme.color.gray100};
    cursor: pointer;

    &:hover {
      background-color: ${theme.color.blueHover};
    }
  }
`;
