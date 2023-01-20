import styles from "./ResourcesDropdown.module.scss";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import BlogIcon from "../../../icons/BlogIcon";
import CaseStudyIcon from "../../../icons/CaseStudyIcon";
import TemplateIcon from "../../../icons/TemplateIcon";

const subMenuOptions = [
  {
    name: "Case Studies",
    href: "/resources/case-studies",
    icon: <CaseStudyIcon />,
  },
  {
    name: "Free Templates",
    href: "/resources/free-templates",
    icon: <TemplateIcon />,
  },
];


const renderSubmenuOptions = () => {
  return subMenuOptions.map((option) => {
    return (
      <Grid key={option.name} item xs={12}>
        <Link href={option.href}>
        <a>
          <div className={styles.subOptionWrapper}>
            {option.icon}
            <p>{option.name}</p>
          </div>
        </a>
        </Link>
      </Grid>
    )
  })
}

export default function ResourcesDropdown() {
  return (
    <div className={styles.resourcesDropdown}>
      <Grid container spacing={3}>
        <Grid xs={4} item key="blog">
          <Link href="/blog">
            <a>
              <div className={styles.optionWrapper}>
                <BlogIcon/>
                <p className={styles.title}>Blog</p>
              </div>
            </a>
          </Link>
        </Grid>
        <Grid item container xs={8}>
          {renderSubmenuOptions()}
        </Grid>
      </Grid>
    </div>
  );
}
