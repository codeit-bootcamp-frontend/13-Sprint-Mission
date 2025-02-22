import MenuIcon from "../../assets/icon/ic_menu.svg";
import styles from "./MenuButton.module.css";

function MenuButton({ className = "", onClick = () => {} }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${styles.menuButton}`}
    >
      <img src={MenuIcon} alt="" />
    </button>
  );
}

export default MenuButton;
