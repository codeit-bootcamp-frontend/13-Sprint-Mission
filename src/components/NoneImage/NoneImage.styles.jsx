import styled from "styled-components";
import { getImgSize } from "../Items/ItemCard/ItemCard.styles";
import theme from "../../styles/theme";

export const NoneImgContainer = styled.div`
  width: ${({ list }) => getImgSize(list, "PC")};
  height: ${({ list }) => getImgSize(list, "PC")};
  border-radius: 16px;
  background-color: ${theme.color.gray200};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: ${({ list }) => getImgSize(list, "Moblie")};
    height: ${({ list }) => getImgSize(list, "Moblie")};
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: ${({ list }) => getImgSize(list, "Tablet")};
    height: ${({ list }) => getImgSize(list, "Tablet")};
  }
`;

export const NoneImg = styled.img`
  width: 60px;
  height: 60px;
`;
