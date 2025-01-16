import Container from "../components/Container";
import styles from "./ItemListPage.module.css";
import AllItems from "../components/AllItems";
import BestItems from "../components/BestItems";
import PageNav from "../components/PageNav";

function ItemListPage() {
  return (
    <Container>
      <div className={styles.container}>
        <BestItems />
      </div>
      <div className={styles.container}>
        <AllItems />
      </div>
    </Container>
  );
}

export default ItemListPage;
