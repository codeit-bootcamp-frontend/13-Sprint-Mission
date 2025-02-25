import styled, { css } from "styled-components";
import theme from "../../../style/theme";
//
export interface StyleProps {
  $comment?: boolean;
  $textArea?: boolean;
  $edit?: boolean;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 16px;
`;

export const Label = styled.label<StyleProps>`
  width: 100%;
  height: 26px;
  font-size: 18px;
  color: ${theme.color.gray800};
  font-weight: 700;
  line-height: 26px;
  ${(props) =>
    props.$comment &&
    css`
      font-weight: 600;
      font-size: 16px;
    `}
`;

export const Input = styled.input<StyleProps>`
  width: 100%;
  background-color: ${theme.color.gray100};
  font-size: 16px;
  font-weight: 400px;
  line-height: 26px;
  border-radius: 12px;
  border: none;
  color: ${theme.color.gray800};
  position: relative;
  height: 56px;
  padding: 16px 24px;
  &::placeholder {
    color: ${theme.color.gray400};
    line-height: normal;
    font-size: 16px;
    text-align: left;
    position: absolute;
    white-space: normal;
    word-break: break-word;
    top: 16px;
    left: 24px;
  }
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.$textArea &&
    css`
      height: 282px;
    `}
  ${(props) =>
    props.$comment &&
    css`
      font: ${theme.font.H7Regular};
      height: 104px;
      @media (max-width: 375px) {
        height: 129px;
      }
    `}

    ${(props) =>
    props.$edit &&
    css`
      font: ${theme.font.H7Regular};
      height: 80px;
    `}
`;

//imgInput 부분
export const ImgInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media (max-width: 375px) {
    gap: 10px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    gap: 10px;
  }
`;
export const ImgInputContainer = styled.div`
  width: 282px;
  aspect-ratio: 1/ 1;
  color: ${theme.color.gray800};
  background-color: ${theme.color.gray100};
  border-radius: 12px;
  position: relative;
  border: none;
  @media (max-width: 375px) {
    width: 168px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    width: 168px;
  }
`;
export const ImgInput = styled.input`
  display: none;
  width: 100%;
  background-color: ${theme.color.gray100};
  font-size: 16px;
  font-weight: 400px;
  line-height: 26px;
  border-radius: 12px;
  border: none;
  color: ${theme.color.gray800};
  position: relative;
  ::placeholder {
    color: ${theme.color.gray400};
    line-height: normal;
    font-size: 16px;
    text-align: left;
    position: absolute;
    top: 10px;
  }
`;

export const PlusLabelContainer = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.color.gray400};
  line-height: normal;
  font-size: 16px;
  text-align: center;
`;
export const PlusIcon = styled.img`
  width: 48px;
`;
export const ImgPreviewWrapper = styled.div`
  position: relative;
`;
export const PreviewImg = styled.img`
  width: 282px;
  aspect-ratio: 1/1;
  @media (max-width: 375px) {
    width: 168px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    width: 168px;
  }
`;

export const DeleteImg = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
`;

// searchInput
export const SearchInput = styled.input`
  border-radius: 12px;
  border: none;
  color: ${theme.color.gray800};
  height: 56px;
  padding: 16px 44px;
  width: 100%;
  height: 42px;
  background-color: ${theme.color.gray100};
  font: ${theme.font.H5Regular};
  ::placeholder {
    color: ${theme.color.gray400};
    font: ${theme.font.H5Regular};
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;
export const SearchIcon = styled.img`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translate(0, -50%);
`;
