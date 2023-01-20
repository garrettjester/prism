import styles from "./ArrowButton.module.scss";

export default function ArrowButton({ children, type, ...other}) {
  return (
    <a {...other} className={`${styles.button} ${styles.buttonArrow} ${(type=='solid') ? styles.bgSolid : ''}`}>
      {children}
      <svg viewBox="0 0 6 9" fill="none" className={styles.arrowIcon}>
        <g className={styles.arrowHead}>
          <path
            d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8"
            stroke="#currentColor"
            strokeWidth="1.5"
          />
        </g>
        <g className={styles.arrowBody}>
          <path d="M3.5 4.5H0" stroke="#currentColor" strokeWidth="1.5" />
        </g>
      </svg>
    </a>
  );
}
