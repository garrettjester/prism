/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Grid } from "@material-ui/core";
import styles from "./ServicesDropdown.module.scss";

import {
  BrandDesignIcon,
  WebDevelopmentIcon,
  ContentGenerationIcon,
  MarketingStrategyIcon,
  MarketingAutomationIcon,
  ExecutiveCoachingIcon

} from "../../../icons";

const services = [
  {
    href: "/services/brand-design",
    title: "Brand Design",
    icon: <BrandDesignIcon />,
    description: "Stand out from the crowd",
  },
  {
    href: "/services/web-development",
    title: "Web Development",
    icon: <WebDevelopmentIcon />,
    description: "Beautiful sites that scale",
  },
  {
    href: "/services/content-generation",
    title: "Content Generation",
    icon: <ContentGenerationIcon />,
    description: "Boost credibility & presence",
  },
  {
    href: "/services/marketing-strategy",
    title: "Marketing Strategy",
    icon: <MarketingStrategyIcon />,
    description: "Plan your success",
  },
  {
    href: "/services/automation",
    title: "Marketing Automation",
    icon: <MarketingAutomationIcon />,
    description: "Maintain presence",
  },
  {
    href: "/services/coaching",
    title: "Executive Coaching",
    icon: <ExecutiveCoachingIcon />,
    description: "Align your teams' goals",
  },
];

export default function ServicesDropdown() {
  const renderServices = () => {
    return services.map((service) => {
      return (
        <Grid key={service.title} item xs={6}>
          <Service
            href={service.href}
            icon={service.icon}
            name={service.title}
            tagline={service.description}
          />
        </Grid>
      );
    });
  };

  return (
    <div className={styles.servicesDropdown}>
      <Grid container spacing={3}>
        {renderServices()}
      </Grid>
    </div>
  );
}

const Service = ({ icon, name, tagline, href }) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={href}>
      <div className={styles.serviceTile}>
        {icon}
        <div className={styles.serviceText}>
          <a className={`${styles.button} ${styles.buttonArrow}`}>
            {name}
            <svg viewBox="0 0 6 9" fill="#FFF" className={styles.arrowIcon}>
              <g className={styles.arrowHead}>
                <path
                  d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8"
                  stroke="#currentColor"
                  strokeWidth="1.5"
                />
              </g>
              <g className={styles.arrowBody}>
                <path d="M3.5 4.5H0" stroke="#currentColor" strokeWidth="1.5" />
              </g>
            </svg>
          </a>
          <p className={styles.subtitle}>{tagline}</p>
        </div>
      </div>
    </Link>
  );
};
