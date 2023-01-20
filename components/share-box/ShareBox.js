import FacebookIcon from "./FacebookIcon";
import LinkedIcon from "./LinkedinIcon";
import LinkIcon from "./LinkIcon";
import TwitterIcon from "./TwitterIcon";
import styles from "./ShareBox.module.scss";

const ShareBox = ({ link, fill }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <LinkIcon link={link} fill={fill} />
      </div>
      <div className={styles.item}>
        <TwitterIcon link={link} fill={fill} />
      </div>
      <div className={styles.item}>
        <FacebookIcon link={link} fill={fill} />
      </div>
      <div className={styles.item}>
        <LinkedIcon link={link} fill={fill} />
      </div>
    </div>
  );
};

export default ShareBox;
