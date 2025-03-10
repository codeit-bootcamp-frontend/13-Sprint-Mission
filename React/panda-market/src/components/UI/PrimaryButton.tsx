import React from "react";
import styles from "./PrimaryButton.module.css";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

function PrimaryButton({
  children,
  className = "",
  onClick = () => {},
  disabled = false,
  type = "submit",
}: PrimaryButtonProps) {
  const buttonClass = `${styles.button} ${className}`;
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
