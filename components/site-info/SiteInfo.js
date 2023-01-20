import React from "react";
import Link from "next/link";
import styles from "./SiteInfo.module.scss";



const SiteInfo = ({
  logo,
  language,
  locale,
  copyright,
  textColor,
  ...props
}) => {
  return (
    <div {...props} className={styles.wrapper}>
      <Link href="/">
        <a>{logo}</a>
      </Link>
      <div className={styles.disclaimers}>
        <p className={styles.text}>{copyright}</p>
        <p className={styles.text}>{`${locale ?? 'US'} | ${language ?? 'EN'}`}</p>
      </div>
    </div>
  );
};

export default SiteInfo;
