import styles from "./SiteNav.module.scss";
import Link from "next/link";
import Routes from "../../routes"

export default function SiteNav({ routes }) {
  const renderRoutes = () => {
    /*return Routes.map((route) => {
      return (
        <Link key={route.href} href={route.href}>
          <a style={{ fontWeight: "400" }}>
            <div
              style={{
                lineHeight: "65px",
              }}
            >
              {route.name}
            </div>
          </a>
        </Link>
      );
    });*/
  };

  return <div className={styles.container}>{renderRoutes()}</div>;
}
