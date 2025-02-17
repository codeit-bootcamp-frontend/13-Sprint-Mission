import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";

function ItemList({ items, best }) {
  const ClassNames = `${best ? styles.bestList : ""} ${styles.itemList}`;

  return (
    <>
      <ul className={ClassNames}>
        {items.map((item) => (
          <li key={item.id}>
            <ItemCard item={item} best={best} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default ItemList;
