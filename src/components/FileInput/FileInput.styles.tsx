import { styled } from "styled-components";
import theme from "../../styles/theme";

export const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: ${theme.color.gray800};
`;

export const File = styled.label`
  width: 282px;
  height: 282px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray100};
  border-radius: 12px;
  cursor: pointer;

  @media (max-width: 1199px) {
    width: 168px;
    height: 168px;
  }
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
  font: ${theme.font.H5Regular};
  color: ${theme.color.gray400};
`;

export const Preview = styled.div`
  display: flex;
  position: relative;
`;

export const PreviewImg = styled.img`
  width: 282px;
  height: 282px;
  border-radius: 12px;

  @media (max-width: 1199px) {
    width: 168px;
    height: 168px;
  }
`;

export const DeleteImg = styled.img`
  width: 22px;
  height: 24px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;
