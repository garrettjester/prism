import styles from "./Scaffold.module.scss"

export default function Scaffold({children}) {
  return(
    <div className={styles.scaffold}>
      <div className={styles.gutter}></div>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.gutter}></div>
    </div>
    
  )
};
