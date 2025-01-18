import styled from "styled-components";
import { getImgSize } from "../Items/ItemCard/ItemCard.styles";

export const NoneImgContainer = styled.div`
  width: ${({ list }) => getImgSize(list, "PC")};
  height: ${({ list }) => getImgSize(list, "PC")};
  border-radius: 16px;
  background-color: var(--gray200);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: ${({ list }) => getImgSize(list, "Moblie")};
    height: ${({ list }) => getImgSize(list, "Moblie")};
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: ${({ list }) => getImgSize(list, "Tablet")};
    height: ${({ list }) => getImgSize(list, "Tablet")};
  }

  @media (min-width: 1200px) {
    width: ${({ list }) => getImgSize(list, "PC")};
    height: ${({ list }) => getImgSize(list, "PC")};
  }
`;

export const NoneImg = styled.img`
  width: 60px;
  height: 60px;
`;
