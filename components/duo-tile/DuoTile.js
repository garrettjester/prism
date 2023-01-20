import styles from "./DuoTile.module.scss";
import Scaffold from "../scaffold";

export default function DuoTile({children, style}) {


  return (
    <Scaffold>
      <div className={styles.container}>
        {children}
      </div>
    </Scaffold>
  )
}