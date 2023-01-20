/* eslint-disable react/display-name */
// [slug].js

/* eslint-disable @next/next/no-img-element */
import client from "../../utils/SanityClient";
import groq from "groq";
import { Container } from "@material-ui/core";
import Image from "next/image";
import styles from "./Article.module.scss";
import moment from "moment";
import AuthorBox from "../../components/author-box/AuthorBox";
import ShareBox from "../../components/share-box";
import BlockImage from "../../components/block-image";
import { PortableText } from "@portabletext/react";
import { useState } from "react";

const articleComponents = {
  types: {
    image: ({ value }) => {
      console.log("IMAGE VALUE", value);
      return <BlockImage src={value} />;
    },
  },
  block: {
    h1: ({ children }) => {
      return <h1 className={styles.articleHeader}>{children}</h1>;
    },
    h2: ({ children }) => {
      return <h1 className={styles.subHeader}>{children}</h1>;
    },
    blockquote: ({ children }) => {
      return <blockquote className={styles.blockQuote}>{children}</blockquote>;
    },
  },
};

const Article = ({ article }) => {
  const [offsetY, setOffsetY] = useState();
  const { title, subtitle, related, body, authors, headerImage, _createdAt } = article;

  return (
    <div>
      <img src={headerImage} alt={`Headshot of`} className={styles.image} />

      <Container style={{ paddingTop: "30px" }}>
        <article>
          <div className={styles.articleBody}>
            <div className={styles.leftBar}>
              <ShareBox fill="#C2C2C2" />
            </div>
            <div className={styles.articleContent}>
              <p className={styles.contentTypeLabel}>
                {" "}
                {moment(_createdAt).format("LL")} | Article
              </p>
              <h1 className={styles.title}>{title}</h1>
              <AuthorBox authors={authors} />
              <div className={styles.textBody}>
                <PortableText value={body} components={articleComponents} />
              </div>
            </div>
            <div className={styles.rightBar}>
              <div className={styles.content}>
                <p>Tags</p>

                <p>Similar posts</p>
                <div>
                  <PostList />
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "article" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"

  const query = groq`*[_type == "article" && slug.current == $slug][0]{
    title,
    subtitle,
    authors[]->{
      name, 
      "slug": slug.current, 
      _key, 
      headshot
    },
    "slug": slug.current,
    "headerImage": headerImage.asset->url,
    tags,
    "related": *[ _type == "article" && slug.current != $slug && count(tags[@ in ^.^.tags]) > 0] {title, "headerImage": headerImage.asset->url, "slug": slug.current},
    body,
    _createdAt
  }`;


  const { slug = "" } = context.params;
  const article = await client.fetch(query, { slug });

  return {
    props: {
      article,
    },
  };
}

export default Article;
