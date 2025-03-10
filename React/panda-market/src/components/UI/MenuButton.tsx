import MenuIcon from "../../assets/icon/ic_menu.svg";
import styles from "./MenuButton.module.css";

interface MenuButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function MenuButton({ className = "", onClick = () => {} }: MenuButtonProps) {
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
