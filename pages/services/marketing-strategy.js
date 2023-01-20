import SEOHead from "../../components/seo-head/SEOHead";
import styles from "../../styles/pages/Service.module.scss";
import { Container, Grid } from "@material-ui/core";
import Image from "next/image";
import Fade from "react-reveal/Fade";

export default function MarketingStrategy() {


  return (
    <div className={styles.servicePage}>
      <SEOHead title="Marketing Strategy | Services" />

      <Container style={{ textAlign: "center", padding: "80px" }}>
        <div className={styles.serviceHeader}>
          <h1>Marketing Strategy</h1>
          <p>
            We work with your leadership team to build a marketing plan that aligns with your
            strategic objectives.
          </p>
        </div>
        <Fade bottom>
          <div className={styles.serviceSection}>
            <h2>Market & customer research</h2>
            <p>
              Before we write any code, we guide our clients through an
              iterative design process that prioritizes modern best-practices
              and responsiveness.
            </p>
          </div>

          <div className={styles.serviceSection}>
            <h2>Lightning-fast performance</h2>
            <p>
              All of our websites are server-side rendered (SSR) to achieve
              performance that's up to 3x faster than a standard WordPress site. In fact, we use the same
               tech stack that's trusted by companies like AT&T, Netflix, and Nike.
            </p>
          </div>
            
          <div className={styles.serviceSection}>
            <h2>Seamless integrations</h2>
            <p>
              We offer frictionless integrations with industry-leading CMS and
              analytics providers.
            </p>
          </div>
  
          <div className={styles.serviceSection}>
            <h2>Free Hosting</h2>
            <p>
              We offer completely free hosting on all of our web development
              projects.
            </p>
          </div>
        </Fade>
      </Container>
    </div>
  );
}
