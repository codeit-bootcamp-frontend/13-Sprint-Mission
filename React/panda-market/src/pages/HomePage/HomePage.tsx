import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import PrimaryButton from "../../components/UI/PrimaryButton";
import BannerTopImg from "../../assets/image/Img_home_top.svg";
import BannerBottomImg from "../../assets/image/Img_home_bottom.svg";
import HomeImg1 from "../../assets/image/Img_home_01.png";
import HomeImg2 from "../../assets/image/Img_home_02.png";
import HomeImg3 from "../../assets/image/Img_home_03.png";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 일상의 모든 물건을 거래해 보세요</title>
      </Helmet>
      <section className={`${styles.banner} ${styles.top}`}>
        <div className={styles.wrapper}>
          <div className={styles.bannerContainer}>
            <div className={styles.bannerLeft}>
              <h1 className={styles.title}>
                일상의 모든 물건을
                <br className={styles.mobile} /> 거래해 보세요
              </h1>
              <Link to="/items">
                <PrimaryButton className={styles.itemsLinkButton}>
                  구경하러 가기
                </PrimaryButton>
              </Link>
            </div>
            <div className={styles.bannerRight}>
              <img src={BannerTopImg} alt="상단 배너 이미지" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.features} ${styles.wrapper}`}>
        <div className={styles.feature}>
          <img src={HomeImg1} width="68.5%" alt="인기 상품" />
          <div className={styles.featureContent}>
            <h2 className={styles.featureTag}>Hot item</h2>
            <h3 className={styles.bold}>인기 상품을 확인해 보세요</h3>
            <p className={styles.featureDescription}>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
        <div className={`${styles.feature} ${styles.columnReverse}`}>
          <div className={styles.featureContent}>
            <h2 className={styles.featureTag}>Search</h2>
            <h3 className={styles.bold}>구매를 원하는 상품을 검색하세요</h3>
            <p className={styles.featureDescription}>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
          <img src={HomeImg2} width="68.5%" alt="검색 기능" />
        </div>
        <div className={styles.feature}>
          <img src={HomeImg3} width="68.5%" alt="판매 상품 등록" />
          <div className={styles.featureContent}>
            <h2 className={styles.featureTag}>Register</h2>
            <h3 className={styles.bold}>판매를 원하는 상품을 등록하세요</h3>
            <p className={styles.featureDescription}>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.banner} ${styles.bottom}`}>
        <div className={styles.wrapper}>
          <div className={styles.bannerContainer}>
            <div className={styles.bannerLeft}>
              <h1 className={styles.title}>
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </h1>
            </div>
            <div className={styles.bannerRight}>
              <img src={BannerBottomImg} alt="하단 배너 이미지" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
