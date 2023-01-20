/* eslint-disable @next/next/no-img-element */
import styles from "../styles/pages/Home.module.scss";
import SEOHead from "../components/seo-head/SEOHead";
import DuoTile from "../components/duo-tile";
import Fade from "react-reveal/Fade";
import Div100vh from "react-div-100vh";
import Scaffold from "../components/scaffold";
import { Grid } from "@material-ui/core";
import ArrowButton from "../components/arrow-button";
import useModal from "../components/layout/modal/useModal";
import ConsultModal from "../components/modals/ConsultModal";
import Link from "next/link";

import {
  GrowthFocusedIcon,
  DataDrivenIcon,
  VisibleResultsIcon,
  TailoredPricingIcon,
  PharmaceuticalsIcon,
  RegtechIcon,
  LifeSciencesIcon,
  LandingGraphic,
  SaasIcon,
  GraphicOne,
} from "../components/icons";

export default function Home() {
  const { openModal } = useModal();

  const title = "B2B marketing consulting & solutions";
  const subtitle = "Prism leverages a unique method to build market-leading brands in pharmaceuticals, life sciences, regtech, and more."
  const industries = [
    { title: "Pharmaceuticals", icon: <PharmaceuticalsIcon /> },
    { title: "Life sciences", icon: <LifeSciencesIcon /> },
    { title: "RegTech", icon: <RegtechIcon /> },
    { title: "SaaS", icon: <SaasIcon /> },
  ];

  const advantages = [
    {
      icon: <GrowthFocusedIcon />,
      title: "Growth focused",
      description:
        "Our solutions are designed to trigger growth and grow with you",
    },
    {
      icon: <DataDrivenIcon />,
      title: "Data driven",
      description:
        "We use key-metric analysis to identify critical opportunities",
    },

    {
      icon: <TailoredPricingIcon />,
      title: "Tailored pricing",
      description: "Pricing is determined by your company's size and goals",
    },
    {
      icon: <VisibleResultsIcon />,
      title: "Visible results",
      description:
        "We provide before and after snapshots of your marketing performance",
    },
  ];

  const renderIndustries = () => {
    return industries.map((industry) => {
      return (
        <Grid key={industry.title} item xs={12} sm={6}>
          <div className={styles.industryItem}>
            {industry.icon}
            <p>{industry.title}</p>
          </div>
        </Grid>
      );
    });
  };

  const renderAdvantages = () => {
    return advantages.map((item) => {
      return (
        <Grid key={item.title} item xs={12} sm={3}>
          <div className={styles.advantageItem}>
            {item.icon}
            <p>{item.title}</p>
            <p className={styles.description}>{item.description}</p>
          </div>
        </Grid>
      );
    });
  };

  return (
    <div className={styles.container}>
      <SEOHead
        title="Prism"
        description="Modern B2B marketing consulting & solutions"
      />
      <Div100vh style={{ marginBottom: "-65px" }}>
        <DuoTile>
          <div className={styles.textContainer}>
            <div>
              <Fade bottom>
                <h1>{title}</h1>

                <p style={{ color: "gray", marginTop: "0px" }}>
                  {subtitle}
                </p>
              </Fade>
              <div className={styles.actionContainer}>
                <div className={styles.action}>
                  <ArrowButton
                    onClick={() => {
                      openModal(<ConsultModal />);
                    }}
                    type="solid"
                  >
                    Schedule consult
                  </ArrowButton>
                </div>
                <div className={styles.action}>
                  <ArrowButton>Join newsletter</ArrowButton>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <LandingGraphic />
          </div>
        </DuoTile>
      </Div100vh>
      <div className="tile">
        <Scaffold>
          <div className={styles.servicesContainer}>
            <Grid style={{ width: "100%" }} container spacing={0}>
              <Grid style={{ width: "100%" }} xs={12}>
                <h5>Comprehensive approach</h5>
              </Grid>
              <Grid style={{ width: "100%" }} item xs={12}>
                <h3 style={{ margin: "0px 0px 10px 0px" }}>
                  A full-service marketing agency
                </h3>
              </Grid>
              <Grid item container xs={12} spacing={6}>
                <Grid item xs={12} md={6}>
                  <p>
                    We know that successful teams, small and large, focus on
                    product. That's why we offer integrated marketing services
                    like <a>branding</a>, <a>web development</a>, and{" "}
                    <a>content generation</a> that allow your team to prioritize
                    product development.
                  </p>
                  <Link href="/services">
                    <ArrowButton type="solid">All services</ArrowButton>
                  </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                  <p>
                    We also offer <a>strategic marketing</a>,{" "}
                    <a>marketing automation</a>, and <a>executive coaching</a>{" "}
                    to drive sales and boost your bottom line.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Scaffold>
        <div className={styles.mockupsTile}>
          <div className={styles.gutter}></div>
          <div className={styles.content}>
            <div className={styles.mockupsGrid}>
              <img
                alt="A mockup of a style guide"
                className={styles.stylesMockup}
                src="/stylesMockup.svg"
                layout="fill"
              />

              <img
                alt="A mockup of a business card"
                className={styles.cardMockup}
                src="/businessCardMockup.svg"
                layout="fill"
              />

              <img
                alt="A mockup of an email newsletter"
                className={styles.newsletterMockup}
                src="/newsletterMockup.svg"
                layout="fill"
              />

              <img
                src="/websiteMockup.svg"
                alt="Website mockup"
                className={styles.websiteMockup}
              />
            </div>
          </div>

          <div className={styles.gutter}></div>
        </div>
      </div>
      <div style={{ background: "#02232f" }} className="tile">
        <Scaffold>
          <div style={{ width: "100%" }}>
            <Grid style={{ width: "100%" }} container spacing={0}>
              <Grid style={{ width: "100%" }} xs={12}>
                <h5>Industries</h5>
              </Grid>
              <Grid
                style={{ width: "100%" }}
                item
                container
                xs={12}
                spacing={6}
              >
                <Grid item xs={12} md={6}>
                  <h3 style={{ color: "white", margin: "0px 0px 10px 0px" }}>
                    The next generation of B2B
                  </h3>
                  <p style={{ color: "#d9d9d9", marginBottom: "65px" }}>
                    We've spent 25+ years helping B2B companies market
                    cutting-edge technologies to enterprise clients.
                  </p>

                  <ArrowButton type="solid">Case studies</ArrowButton>
                  <ArrowButton>Our team</ArrowButton>
                </Grid>
                <Grid item container xs={12} md={6} spacing={2}>
                  {renderIndustries()}
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div></div>
        </Scaffold>
      </div>
      <div style={{ background: "white" }} className="tile">
        <Scaffold>
          <div style={{ width: "100%" }}>
            <Grid style={{ width: "100%" }} container spacing={0}>
              <Grid style={{ width: "100%" }} xs={12}>
                <h5>Why Prism</h5>
              </Grid>
              <Grid style={{ width: "100%" }} item xs={12}>
                <h3 style={{ margin: "0px 0px 10px 0px" }}>
                  Simple solutions for scalable growth
                </h3>
              </Grid>
              <Grid
                style={{ width: "100%", marginTop: "20px" }}
                item
                container
                xs={12}
                spacing={6}
              >
                {renderAdvantages()}
              </Grid>
            </Grid>
          </div>
        </Scaffold>
      </div>
      <div className={styles.ctaTile}>
        <GraphicOne />
        <Scaffold>
          <Grid container>
            <Grid xs={12} md={6}>
              <h3 style={{ margin: "0px 0px 10px 0px", fontSize: "24px" }}>
                Ready. Set. Grow.
              </h3>
              <p style={{ color: "#d9d9d9" }}>
                Schedule a free 15-min consult with one of our associates to
                learn how Prism can supercharge your business.
              </p>
              <ArrowButton type="solid">Schedule consult</ArrowButton>
            </Grid>
            <Grid xs={12} md={6}></Grid>
          </Grid>
        </Scaffold>
      </div>
    </div>
  );
}
