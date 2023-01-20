import styles from "./Footer.module.scss";
import "../../social-stack";
import Logo from "../../logo";
import Link from "next/link";
import { Grid, Container } from "@material-ui/core";
import SocialStack from "../../social-stack";
import SiteInfo from "../../site-info";

export default function Footer({routes, ...props}) {
  let year = new Date().getFullYear();

  const renderSubroutes = (subroutes) => {
    return subroutes.map((subroute) => {
      return (
        <li key={subroute.href}>
          <Link href={subroute.href}>
            <a>
              {subroute.name}
            </a>
          </Link>
        </li>
      );
    });
  };

  const renderSiteMap = () => {
    return routes.map((route) => {
      return (
        <Grid key={route.name} item={true} style={{padding: '0px 35px'}}>
          <ul className={styles.navList}>
            <p>{route.name}</p>
            {renderSubroutes(route.subroutes)}
          </ul>
        </Grid>
      );
    });
  };

  return (
    <div {...props} className={styles.footerWrapper}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.leftContent}>
            <SiteInfo
                logo={<Logo/>}
               copyright={process.env.NEXT_PUBLIC_COPYRIGHT}
            />
          </div>
          <div className={styles.centerContent}>
            <Grid
              direction="row"
              container
              
              justify="center"
              spacing={2}
            >
              {renderSiteMap()}
            </Grid>
          </div>
          <div className={styles.rightContent}>
            <SocialStack
              type="rounded"
              links={[
                "https://twitter.com/MGPrismWorks",
                "https://www.facebook.com/PrismWorksOnline/?view_public_for=540543315964901",
                "https://www.linkedin.com/company/prismworks-inc-/",
              ]}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
