import Image from "next/image";
import styles from "./Avatar.module.scss";

const Avatar = ({ image, alt }) => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.image}>
        <Image
          objectFit="contain"
          src={image}
          objectPosition="bottom"
          layout="fill"
          alt={alt ?? "Avatar"}
        />
      </div>
    </div>
  );
};

export default Avatar;
