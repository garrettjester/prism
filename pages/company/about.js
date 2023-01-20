import styles from "../../styles/pages/About.module.scss";
import { Grid, Container } from "@material-ui/core";
import Div100vh from "react-div-100vh";
import Image from "next/image";
import Scaffold from "../../components/scaffold";
import {
  MarketLeadershipIcon,
  MarketEntryIcon,
  MarketCaptureIcon,
} from "../../components/icons";

import SEOHead from "../../components/seo-head/SEOHead";

const processItems = [
  {
    name: "Market entry",
    icon: <MarketEntryIcon />,
    description:
      "We help early stage companies and founders establish an unforgettable market presence, while sculpting scalable product and marketing strategies.",
  },
  {
    name: "Market capture",
    icon: <MarketCaptureIcon />,
    description:
      "We optimize established brands for unprecented growth by honing specific strategies like automated marketing, product-led adoption, and word-of-mouth spread.",
  },
  {
    name: "Market leadership",
    icon: <MarketLeadershipIcon />,
    description:
      "We help market leaders maintain their competitive edge by tracking industry trends and analyzing opportunities for new growth.",
  },
];

export default function About() {
  const renderProcessItems = () => {
    return processItems.map((item) => {
      return (
        <Grid item key={item.name} xs={12} md={4}>
          <div className={styles.processItem}>
            {item.icon}
            <p className={styles.processTitle}>{item.name}</p>
            <p>{item.description}</p>
          </div>
        </Grid>
      );
    });
  };

  return (
    <div className="fullTile">
      <SEOHead
        title="About | Prism"
        description="A unique approach to digital marketing"
      />
      <div className={styles.textSectionHeader}>
        <h3>
          Our mission
        </h3>
        <p style={{ textAlign: "center", width: "700px" }}>
          At Prism, we're committed to empowering creative, product-obsessed teams achieve 
          their maximum potential. By helping teams succeed, we hope to drive access to the next generation
          of world-changing B2B products.
        </p>
      </div>
      <div className={styles.textSectionHeader} style={{marginTop: '30px'}}>
        <h3>
          The client journey
        </h3>
        <p style={{ textAlign: "center", width: "700px" }}>
          While every customer demands a unique solution, we've identified three broad stages of 
          a company's growth cycle— Market entry, Market capture, 
          and Market leadership— where we are able to add unique value.
        </p>
      </div>
      <Container>
        <div>
          <Grid
            align="center"
            container
            style={{ width: "100%", marginTop: "60px" }}
            spacing={6}
          >
            {renderProcessItems()}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
