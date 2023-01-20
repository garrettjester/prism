import { Grid } from "@material-ui/core";
import Image from "next/image";
import styles from "./FeaturedArticleItem.module.scss";
import Link from "next/link";

const FeaturedArticleItem = ({ article }) => {
  const { title, subtitle, author, headerImage, slug, _id } = article;

  return (
    <Grid item key={_id} xs={12}>
      <Link href={`/blog/${slug}`} passHref>
      <div className={styles.featuredArticle}>
          <div className={styles.imageContainer}>
            <Image objectFit="cover" layout="fill" alt={``} src={headerImage} />
          </div>
          <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
      </Link>
        
    </Grid>
  );
};

export default FeaturedArticleItem;
