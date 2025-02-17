// import facebookIcon from "../assets/facebook.svg";
import styles from "./Footer.module.css";
import facebookIcon from "../assets/icon/ic_facebook.svg";
import twitterIcon from "../assets/icon/ic_twitter.svg";
import youtubeIcon from "../assets/icon/ic_youtube.svg";
import instagramIcon from "../assets/icon/ic_instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <div>©codeit - 2024</div>
      <div className={styles.menu}>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="./faq">FAQ</Link>
      </div>
      <div className={styles.sns}>
        <Link to="https://www.facebook.com/" target="_blank">
          <img src={facebookIcon} alt="페이스북" />
        </Link>
        <Link to="https://x.com/" target="_blank">
          <img src={twitterIcon} alt="트위터" />
        </Link>
        <Link to="https://www.youtube.com/" target="_blank">
          <img src={youtubeIcon} alt="유튜브" />
        </Link>
        <Link to="https://www.instagram.com/" target="_blank">
          <img src={instagramIcon} alt="인스타그램" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
