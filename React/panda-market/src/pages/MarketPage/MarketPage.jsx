import Container from "../../components/Layout/Container";
import AllItems from "./components/AllItems";
import BestItems from "./components/BestItems";
import styles from "./MarketPage.module.css";

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
