import styles from "./Button.module.scss";

export default function Button({disabled, htmlType, type, style, children, onClick }) {
  return (
    <button
      disabled={disabled}
      type={htmlType}
      onClick={onClick}
      style={style}
      className={`${styles.btn} ${type == "secondary" ? styles.secondary : ""}`}
    >
      {children}
    </button>
  );
}
