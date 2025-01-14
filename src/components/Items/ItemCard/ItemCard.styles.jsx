import styled from "styled-components";

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

const getImgSize = (list, screen) => {
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
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--gray800);
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  text-align: left;
  color: var(--gray800);
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
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--gray600);
`;
