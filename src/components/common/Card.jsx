//Card.jsx
import styled from "styled-components";
import ic_heart from "../../assets/images/icons/ic_heart.svg";
import placeholder from "../../assets/images/placeholder.jpg";

export default function Card({ item, size }) {
  const imageURL =
    item.images && item.images.length > 0 ? item.images[0] : placeholder;

  return (
    <CardWrapper size={size}>
      <Image
        src={imageURL}
        alt={item.name}
        size={size}
        onError={(e) => (e.target.src = placeholder)}
      />
      <Title>{item.name}</Title>
      <Price>{item.price.toLocaleString()}원</Price>
      <Likes>
        <img src={ic_heart} alt="heart icon" /> {item.favoriteCount}
      </Likes>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ size }) =>
    size === "large" &&
    `
    width: 282p;
  `}
  ${({ size }) =>
    size === "small" &&
    `
    width: 221px;
  `}
`;

const Image = styled.img`
  border-radius: 16px;
  aspect-ratio: 1/1;

  ${({ size }) =>
    size === "large" &&
    `
    width: 282p;
    height: 282px;
  `}
  ${({ size }) =>
    size === "small" &&
    `
    width: 221px;
    height: 221px;
  `};
`;

const Title = styled.p`
  width: 100%;
  gap: 6px;
`;

const Price = styled.h3`
  width: 92px;
  height: 26px;
`;

const Likes = styled.span`
  width: 42px;
  height: 18px;
  gap: 4px;
`;
