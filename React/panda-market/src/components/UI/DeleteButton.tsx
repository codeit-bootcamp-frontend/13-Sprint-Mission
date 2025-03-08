import DeleteIcon from "../../assets/icon/ic_delete.svg";
import styles from "./DeleteButton.module.css";

interface DeleteButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function DeleteButton({
  className = "",
  onClick = () => {},
}: DeleteButtonProps) {
  return (
    <button type="button" onClick={onClick} className={className}>
      <img src={DeleteIcon} alt="" className={styles.deleteIcon} />
    </button>
  );
}

export default DeleteButton;
