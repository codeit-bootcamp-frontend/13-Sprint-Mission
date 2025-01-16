import "./ItemList.css";
import ItemCard from "./ItemCard";
import Container from "./Container";

function ItemList({ items, best }) {
  const ClassNames = `${best ? "bestList" : ""} itemList`;

  return (
    <Container>
      <ul className={ClassNames}>
        {items.map((item) => (
          <li key={item.id}>
            <ItemCard item={item} best={best} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
export default ItemList;
