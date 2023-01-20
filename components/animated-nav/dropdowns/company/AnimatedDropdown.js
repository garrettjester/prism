import styles from "./CompanyDropdown.module.scss";
import Link from "next/link";
import { Grid } from "@material-ui/core";


export default function AnimatedDropdown({options, ...props}) {


  const renderMenuOptions = () => {
    return options.map((option) => {
      return (
        <Grid key={option.href} item xs={12}>
          <Link href={option.href}>
            <a>
              <div className={styles.optionWrapper}>
                <div className={styles.iconContainer}>{option.icon}</div>
                <p>{option.title}</p>
              </div>
            </a>
          </Link>
        </Grid>
      );
    });
  }

  return (
    <div className={styles.companyDropdown}>
      <Grid container justifyContent="center" alignItems="center">
        {renderMenuOptions()}
      </Grid>
    </div>
  );
}
