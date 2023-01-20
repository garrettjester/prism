import Image from "next/image";
import { Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import styles from "./PostList.module.scss";

const PostList = ({ posts, ...props }) => {
  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <Grid item key={post.slug} className={styles.postItem}>
          <div className={stlyes.imageContainer}>
            <Image src={post.headerImage} layout="fill" alt="Post thumbnail" />
          </div>
          <a className={styles.title}>{post.title}</a>
        </Grid>
      );
    });
  };

  return (
    <div className={styles.container}>
      <Grid container>{renderPosts()}</Grid>
    </div>
  );
};

export default PostList;
