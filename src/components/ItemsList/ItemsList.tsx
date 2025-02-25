import { useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
//
import * as S from "./ItemsList.style";
import BtnHeart from "../common/BtnHeart/BtnHeart";
import { Item } from "../../api/product.api";
//

interface Prop {
  value: string;
  items: Item[];
}
interface ListItemProps {
  value: string;
  item: Item;
}
function ListItem({ value, item }: ListItemProps) {
  const navigate = useNavigate();
  const device = useWindowSize();
  return (
    <S.Item onClick={() => navigate(`./${item.id}`)}>
      <S.ProductImg
        value={value}
        $device={device}
        src={item.images[0]}
        alt="이미지"
      />
      <S.FlexContent>
        <S.Title>{item.name}</S.Title>
        <S.Price>{item.price} 원</S.Price>
        <BtnHeart $items value={item.favoriteCount} />
      </S.FlexContent>
    </S.Item>
  );
}
//
export default function ItemsList({ value, items, ...props }: Prop) {
  const device = useWindowSize();

  return (
    <S.ItemListStyle value={value} $device={device} {...props}>
      {items.map((item) => {
        return <ListItem key={item.id} value={value} item={item} />;
      })}
    </S.ItemListStyle>
  );
}
