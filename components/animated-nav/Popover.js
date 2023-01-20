import styles from "AnimatedNav.module.scss";

export default function Popover({children}) {
  return (
    <div className={styles.popover}>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.background}></div>
    </div>
  )
};
  
  