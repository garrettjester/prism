/* eslint-disable @next/next/no-img-element */
import styles from "./Blog.module.scss";

import Image from "next/image";
import groq from "groq";
import client from "../../utils/SanityClient";
import { Container, Grid, Divider } from "@material-ui/core";
import imageUrlBuilder from "@sanity/image-url";
import SEOHead from "../../components/seo-head";
import FeaturedArticleItem from "../../components/featured-article-item/FeaturedArticleItem";
import ArticleItem from "../../components/article-item/ArticleItem";

export default function Blog({ articles, authors }) {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  const renderAuthorImage = (imageUrl) => {
    return (
      <div className={styles.authorImageCrop}>
        {imageUrl ? (
          <img alt="Author photo" src={urlFor(imageUrl).width(50).url()} />
        ) : (
          <Image layout="fill" alt="Author photo" src="/avatar.svg" />
        )}
      </div>
    );
  };

  const renderPosts = () => {
    console.log("posts", articles);
    if (articles) {
      return articles.map((article, i) => {
        return i === 0 ? (
          <FeaturedArticleItem article={article} />
        ) : (
          <ArticleItem article={article} />
        );
      });
    }
  };

  return (
    <div className={styles.blogContainer}>
      <SEOHead title="Blog | Prism" />
      <Container>
        <div style={{ width: "100%" }}>
          <h1 className={styles.title}>Blog</h1>
          <h5 className={styles.subtitle}>
            Our team shares their thoughts on key issues in business, marketing, and
            strategy.
          </h5>
          <Divider />
          <h5 className={styles.sectionHeader}>Featured articles</h5>
          <Grid className={styles.blogGrid} container spacing={3}>
            {renderPosts()}
          </Grid>
        </div>

        <Divider/>
      </Container>
      
      <Container fluid className={styles.popularAuthors} maxWidth="xl">
        <Container>
          <h5 className={styles.sectionHeader}>Top authors</h5>
          <Grid container spacing={3}></Grid>
        </Container>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await client.fetch(groq`
      *[_type == "article"]{
        _id,
        "headerImage": headerImage.asset->url,
        title,
        "slug": slug.current,
        subtitle,
        "slug": slug.current,
        body,
        tags,
      }
    `);

    const authors = await client.fetch(groq`
    *[_type == "teamMember"]{
      _id,
      "headshot": headshot.asset->url,
      name,
    }
    `)

  console.log("Articles:", articles);
  return { props: { articles, authors } };
}
