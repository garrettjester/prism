import SEOHead from "../../components/seo-head/SEOHead";
import styles from "../../styles/pages/Service.module.scss";
import { Container, Grid } from "@material-ui/core";
import Image from "next/image";
import Fade from "react-reveal/Fade";

export default function ContentGeneration() {
  return (
    <div className={styles.servicePage}>
      <SEOHead title="Content Generation | Services" />

      <Container style={{ textAlign: "center", padding: "80px" }}>
        <div className={styles.serviceHeader}>
          <h1>Content Generation</h1>
          <p>
            Keep your clients engaged and build your reputation across multiple channels with
            our content-generation services.
          </p>
        </div>
        <Fade bottom>
          <div className={styles.serviceSection}>
            <h2>Thought leadership</h2>
            <p>
              We conduct virtual interviews with your subject matter experts (SMEs), then draft
              engaging thought leadership pieces to be distributed on your blog or on popular
              sites like Medium. 
            </p>
          </div>

          <p>Don't have a blog? Check out our <a>web development</a> services.</p>

          <div className={styles.serviceSection}>
            <h2>Social media management</h2>
            <p>
              
            </p>
          </div>

          <div className={styles.serviceSection}>
            <h2>Newsletters & e-mail marketing</h2>
            <p>
              To maintain
            </p>
          </div>
        </Fade>
      </Container>
    </div>
  );
}
