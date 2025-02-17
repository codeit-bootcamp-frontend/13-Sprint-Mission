import Container from "../../../components/Container";
import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";

function ItemList({ items, best }) {
  const ClassNames = `${best ? styles.bestList : ""} ${styles.itemList}`;

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
