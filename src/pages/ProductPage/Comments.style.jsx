import styled from "styled-components";
import theme from "../../style/theme";
//

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 40px;
  }
`;
export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const NoCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;
export const NoCommentImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${theme.color.gray400};
`;
export const NoCommentImg = styled.img`
  width: 196px;
  aspect-ratio: 1/1;
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
  width: 74px;
  height: 42px;
`;

export const CommentCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
