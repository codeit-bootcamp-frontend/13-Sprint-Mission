import styled from "styled-components";
import theme from "../styles/theme";

export const UploadContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const UploadLabel = styled.label`
  width: 100%;
  height: 100%;
`;

export const ImageUploadIcon = styled.img``;

export const HiddenInput = styled.input`
  display: none;
`;

export const PreviewWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  border-radius: 12px;
  overflow: hidden;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const LimitText = styled.p`
  color: ${theme.colors.Error100};
  font: ${theme.fonts.H5Regular};
  margin-top: 8px;
`;
