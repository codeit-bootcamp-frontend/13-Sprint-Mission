import DeleteIcon from "../../assets/icon/ic_delete.svg";
import styles from "./DeleteButton.module.css";

function DeleteButton({ className = "", onClick = () => {} }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${styles.deleteButton}`}
    >
      <img src={DeleteIcon} alt="" className={styles.deleteIcon} />
    </button>
  );
}

export default DeleteButton;
