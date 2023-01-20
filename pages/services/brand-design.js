import SEOHead from "../../components/seo-head/SEOHead";
import styles from "../../styles/pages/Service.module.scss";
import { Container, Grid } from "@material-ui/core";
import Image from "next/image";
import Fade from "react-reveal/Fade";

export default function BrandDesign() {
  return (
    <div className={styles.servicePage}>
      <SEOHead
        title="Brand Design | Services"
        description="Prism offers branding services like style guide generation and logo design/"
      />

      <Container style={{ textAlign: "center", padding: "80px" }}>
        <div className={styles.serviceHeader}>
          <h1>Brand Design</h1>
          <p>
            Whether you're just getting started, or you're looking to rebrand,
            we can help you establish and maintain your design language.
          </p>
        </div>
        <Fade bottom>
          <div className={styles.serviceSection}>
            <h2>Style guide generation</h2>
            <p>
              Consistency is the cornerstone of good branding. That's why we
              build style guides that help you establish your brand's colors,
              logos, and typography. Better yet, we distribute it in a form
              that's readable by designers and developers alike.
            </p>
          </div>

          <div className={styles.serviceSection}></div>

          <div className={styles.serviceSection}></div>

          <div className={styles.serviceSection}>
            <h2>Social media profiles</h2>
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
