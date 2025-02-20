import AllItemsSection from "./components/AllItemsSection";
import BestItemsSection from "./components/BestItemsSection";
import styles from "./MarketPage.module.css";

function ItemListPage() {
  return (
    <div className={styles.container}>
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
}

export default ItemListPage;
