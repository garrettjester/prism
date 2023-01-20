import styles from "./SocialStack.module.scss";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import FacebookIcon from "./FacebookIcon";
import TwitterIcon from "./TwitterIcon";

export default function SocialStack({ links, ...props }) {
  const generateIcon = (link) => {
    if (link.includes("github.com")) {
      return <GithubIcon link={link} {...props}/>;
    }

    if (link.includes("linkedin.com")) {
      return <LinkedinIcon link={link} {...props} />;
    }

    if (link.includes("facebook.com")) {
      return <FacebookIcon link={link} {...props} />;
    }

    if (link.includes("twitter.com")) {
      return <TwitterIcon link={link} {...props} />;
    }
  };

  const renderLinks = () => {
    if (links) {
      return links.map((link) => {
        return (
          <div key={link} className={styles.item}>
            {generateIcon(link)}
          </div>
        );
      });
    }
  };

  return <div className={styles.container}>{renderLinks()}</div>;
}
