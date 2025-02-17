import styles from "./ItemList.module.css";
import ItemCard from "./ItemCard";
import Container from "../../../components/Container";

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
