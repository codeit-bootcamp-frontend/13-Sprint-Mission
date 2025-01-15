import Container from "../components/Container";
import ItemList from "../components/ItemList";
import styles from "./ItemListPage.module.css";

function ItemListPage() {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.title}>베스트 상품</div>
        <ItemList></ItemList>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>전체 상품</div>
        <ItemList></ItemList>
      </div>
    </Container>
  );
}

export default ItemListPage;
