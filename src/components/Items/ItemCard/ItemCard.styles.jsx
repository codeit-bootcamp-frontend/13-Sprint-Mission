import styled from "styled-components";
import theme from "../../../styles/theme";

export const BEST_IMG = {
  PC: "282px",
  Tablet: "343px",
  Moblie: "343px",
};

export const ALL_IMG = {
  PC: "221px",
  Tablet: "221px",
  Moblie: "168px",
};

export const getImgSize = (list, screen) => {
  const item = list === "best" ? BEST_IMG : ALL_IMG;
  return item[screen];
};

export const ItemImg = styled.img`
  width: ${({ list }) => getImgSize(list, "PC")};
  height: ${({ list }) => getImgSize(list, "PC")};
  border-radius: 16px;
  object-fit: cover;

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

export const ItemContainer = styled.div`
  width: ${({ list }) => getImgSize(list, "PC")};
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 767px) {
    width: ${({ list }) => getImgSize(list, "Moblie")};
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: ${({ list }) => getImgSize(list, "Tablet")};
  }

  @media (min-width: 1200px) {
    width: ${({ list }) => getImgSize(list, "PC")};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.div`
  font: ${theme.font.H7Regular};
  color: ${theme.color.gray800};
`;

export const Price = styled.div`
  font: ${theme.font.H5Bold};
  color: ${theme.color.gray800};
`;

export const HeartContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Heart = styled.img`
  width: 16px;
  height: 16px;
`;

export const HeartCount = styled.div`
  font: ${theme.font.H8};
  color: ${theme.color.gray600};
`;
