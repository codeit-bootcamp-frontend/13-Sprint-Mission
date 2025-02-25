import styled from "styled-components";
import theme from "../../style/theme";

export const CommentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.color.gray200};
  padding-bottom: 12px;
`;
export const CommentFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Content = styled.p`
  font: ${theme.font.H7Regular};
`;
export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
export const ProfileDateWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 99px;
  border: none;
`;
export const NickNameDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NickName = styled.p`
  font: ${theme.font.H8};
`;
export const Date = styled.p`
  font: ${theme.font.H8};
  color: ${theme.color.gray400};
`;

export const CancelBtn = styled.button`
  width: 68px;
  height: 47px;
  font: ${theme.font.H5Bold};
  border: none;
  background-color: ${theme.color.white};
  color: ${theme.color.gray500};
`;

export const EditConfirmBtn = styled.button`
  width: 106px;
  height: 42px;
  border-radius: 8px;
  font: ${theme.font.H5Bold};
  border: none;
  background-color: ${theme.color.blue};
  color: ${theme.color.white};
`;
