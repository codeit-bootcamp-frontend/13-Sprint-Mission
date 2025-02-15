import favoriteImg from "../assets/favoriteLogo.svg";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
//

const ByDevice = {
  best: {
    mobile: {
      gap: "none",
      gridTemplate: "repeat(1, 343px)",
      gridRow: "434px",
      height: "343px",
      ulWidth: "343px",
    },
    tablet: {
      gap: "10px",
      gridTemplate: "repeat(3, 343px)",
      gridRow: "434px",
      height: "343px",
      ulWidth: "696px",
    },
    desktop: {
      gap: "24px",
      gridTemplate: "repeat(4, 282px)",
      gridRow: "378px",
      height: "282px",
      ulWidth: "1200px",
    },
  },
  products: {
    mobile: {
      gap: "32px 8px",
      gridTemplate: "repeat(2, 168px)",
      gridRow: "343px",
      height: "168px",
      ulWidth: "343px",
    },
    tablet: {
      gap: "40px 24px",
      gridTemplate: "repeat(3, 221px)",
      height: "221px",
      ulWidth: "696px",
    },
    desktop: {
      gap: "40px 24px",
      gridTemplate: "repeat(5, 221px)",
      height: "221px",
      ulWidth: "1200px",
    },
  },
};
const Title = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #1f2937;
  margin: 0px;
`;
const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  text-align: left;
  color: #1f2937;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const FavoriteCount = styled.span`
  color: #4b5563;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;

const ProductImg = styled.img`
  width: 100%;
  height: ${({ device, value }) => ByDevice[value][device].height || "auto"};
`;

const ItemListStyle = styled.ul`
  margin: 24px auto;
  padding: 0px;
  width: ${({ device, value }) => ByDevice[value][device].ulWidth};
  display: grid;
  list-style: none;
  gap: ${({ device, value }) => ByDevice[value][device].gap};
  grid-template-columns: ${({ device, value }) =>
    ByDevice[value][device].gridTemplate};
  grid-auto-rows: ${({ value, device }) => ByDevice[value][device].gridRow};
`;

const Item = styled.div`
  display: flex;
  height: 317px;
  flex-direction: column;
  gap: 16px;
`;

//

function ListItem({ value, items }) {
  const device = useWindowSize();
  return (
    <Item>
      <ProductImg
        value={value}
        device={device}
        src={items.images[0]}
        alt="이미지"
      />

      <div>
        <Title>{items.name}</Title>
        <Price>{items.price} 원</Price>
        <div>
          <img src={favoriteImg} alt="좋아요하트"></img>
          <FavoriteCount>{items.favoriteCount}</FavoriteCount>
        </div>
      </div>
    </Item>
  );
}
function ItemsList({ value, items, device }) {
  return (
    <div>
      <div>
        <ItemListStyle value={value} device={device}>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <ListItem value={value} device={device} items={item} />
              </li>
            );
          })}
        </ItemListStyle>
      </div>
    </div>
  );
}

export default ItemsList;
