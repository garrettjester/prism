import { Grid } from "@material-ui/core";
import Image from "next/image";
import styles from "./ArticleItem.module.scss";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  const { title, subtitle, author, headerImage, slug, _id } = article;

  return (
    <Grid item xs={3} key={_id}>
      <Link passHref href={`/blog/${slug}`}>
      <div className={styles.article}>
        <div className={styles.imageContainer}>
        <Image objectFit="cover" layout="fill" alt={``} src={headerImage} />
        </div>
        <div className={styles.textContainer}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
      </Link>
    </Grid>
  );
};

export default ArticleItem;
