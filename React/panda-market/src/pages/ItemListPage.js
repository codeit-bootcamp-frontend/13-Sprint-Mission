import { Link } from "react-router-dom";
import Container from "../components/Container";
import ItemList from "../components/ItemList";
import styles from "./ItemListPage.module.css";
import SearchIcon from "../assets/icon/ic_search.svg";

function ItemListPage() {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.title}>베스트 상품</div>
      </div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.title}>전체 상품</div>
          <div className={styles.menu}>
            <form>
              <img src={SearchIcon} className={styles.searchIcon} alt="검색" />
              <input
                name="search"
                className={styles.searchBar}
                placeholder="검색할 상품을 입력해주세요"
              />
            </form>
            <Link to="/additem">
              <button type="button" className={styles.registerButton}>
                상품 등록하기
              </button>
            </Link>
            <select className={styles.orderSelect}>
              <option>최신순</option>
              <option>좋아요순</option>
            </select>
          </div>
        </div>
        <ItemList />
      </div>
    </Container>
  );
}

export default ItemListPage;
