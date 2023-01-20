// [slug].js
import Div100vh from "react-div-100vh";
import Image from "next/image";
import SEOHead from "../../../components/seo-head";
import client from "../../../utils/SanityClient";
import groq from "groq";
import styles from "./TeamDetail.module.scss";
import { Container, Divider } from "@material-ui/core";

const TeamMember = ({ member }) => {
  const { name, bio, title, headshot } = member;

  return (
    <Div100vh style={{ paddingTop: "65px", marginBottom: "-65px" }}>
      <Container>
        <SEOHead title={name} description={bio} />
        <div className={styles.profileContainer}>
          <div className={styles.bodyContent}>
            <div className={styles.imageContainer}>
              <div className={styles.profileImage}>
                <Image
                  objectFit="contain"
                  src={headshot}
                  objectPosition="bottom"
                  layout="fill"
                  alt={`Headshot of ${name}`}
                />
              </div>
            </div>
            <h1>{name}</h1>
            <p>{title}</p>
            <p>{bio}</p>
          </div>
          <div className={styles.gutterContent}>
            <div className={styles.recentArticles}>
              <p>{`${name.split(" ")[0]}'s recent articles`}</p>
              <Divider />
            </div>
            <div className={styles.industries}></div>
          </div>
        </div>
      </Container>
    </Div100vh>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "teamMember" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"

  const query = groq`*[_type == "teamMember" && slug.current == $slug][0]{
    "headshot": headshot.asset->url,
    title,
    name,
    "slug": slug.current,
    bio,
    "socials": socials.links,
  }`;

  const { slug = "" } = context.params;
  const member = await client.fetch(query, { slug });
  return {
    props: {
      member,
    },
  };
}

export default TeamMember;
