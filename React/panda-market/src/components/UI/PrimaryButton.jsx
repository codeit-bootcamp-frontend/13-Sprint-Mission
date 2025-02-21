import React from "react";
import styles from "./PrimaryButton.module.css";

function PrimaryButton({
  children,
  className = "",
  onClick = () => {},
  disabled = false,
}) {
  const buttonClass = `${styles.button} ${className}`;
  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default PrimaryButton;
