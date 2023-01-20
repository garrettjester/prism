import styles from "./Header.module.scss";
import Link from "next/link";
import Logo from "../../logo";
import MenuIcon from "../../menu-drawer/MenuIcon";
import AnimatedNav from "../../animated-nav";
import ArrowButton from "../../arrow-button";
import useMenuContext from "../../menu-drawer/useMenuContext";


export default function Header({
  style,
  shadowed,
  brandingBox,
  rightContent,
}) {


  const { openMenu } = useMenuContext();

  return (
    <div
      style={style}
      className={`${styles.headerContainer} ${shadowed ? styles.shadowed : ""}`}
    >
      <div className={styles.brandingBox}>
        <button onClick={openMenu} className={styles.menuButton}>
          <MenuIcon />
        </button>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <Link href="/">
          <a>
            <h1 style={{paddingLeft: '10px', fontSize: '25px', fontWeight: '600'}}>Prism</h1>
          </a>
        </Link>
      </div>
      <div className={styles.centerContent}>
        <AnimatedNav/>
      </div>
      <div className={styles.rightContent}>
        <div style={{height: '100%', marginLeft: "auto" }}>
        <ArrowButton type="solid">Client Console</ArrowButton>
        </div>
      </div>
    </div>
  );
}
