import styles from "./Team.module.scss";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import SEOHead from "../../../components/seo-head";
import Div100vh from "react-div-100vh";
import Image from "next/image";
import { Container } from "@material-ui/core";
import ArrowButton from "../../../components/arrow-button";
import Link from "next/link";
import client from "../../../utils/SanityClient";
import groq from "groq";
import { useRouter } from "next/router";
import { useModal } from "../../../components/layout/modal";
import TeamMemberModal from "../../../components/modals/TeamMemberModal";

export default function Team({ members }) {

  const {openModal, closeModal} = useModal()
  const router = useRouter();
  const [member, setMember] = useState(null);


  const onDismissModal = () => {
    router.push('/company/team')
  }

  useEffect(() => {

    if (router.query.slug) {
      const member = members.find(member => member.slug == router.query.slug)
      setMember(member);
    } else {
      setMember(null)
    }

    if (member) {
      openModal(<TeamMemberModal member={member} />, onDismissModal)
    } else {
      closeModal()
    }
  }, [router, members, member])



  return (
    <div>
      <SEOHead title="Team | Prism" description="Meet our leadership team" />
      <Div100vh style={{ marginBottom: "-65px" }}>
        <Container>
          <div style={{ width: "100%" }}>
            <h2 style={{ marginTop: "70px" }}>Leadership Team</h2>
            <Grid
              align="center"
              style={{ width: "100%", marginTop: "20px" }}
              container
              spacing={4}
            >
              {members.length > 0 &&
                members.map(
                  ({ _id, headshot, name, title, slug = "" }) =>
                    _id && (
                      <Grid item xs={12} sm={6} md={4} key={_id}>
                        <div className={styles.teamMember}>
                          <div className={styles.backgroundTile}>
                            <div className={styles.headshot}>
                              <Image
                                objectFit="contain"
                                src={headshot}
                                alt={name}
                                objectPosition="bottom"
                                layout="fill"
                              />
                            </div>
                          </div>
                          <p className={styles.name}>{name}</p>
                          <p className={styles.title}>{title}</p>
                          <div
                            style={{
                              padding: "0px 0px 0px 18px",
                              marginBottom: "20px",
                            }}
                          >
                            <Link
                              passHref
                              href={`/company/team/?slug=${slug}`}
                              as={`/company/team/${slug}`}
                              shallow
                            >
                              <ArrowButton>Read bio</ArrowButton>
                            </Link>
                          </div>
                        </div>
                      </Grid>
                    )
                )}
            </Grid>
            <div style={{ position: "relative" }}></div>
          </div>
        </Container>
      </Div100vh>
    </div>
  );
}

export async function getStaticProps() {
  const members = await client.fetch(groq`
      *[_type == "teamMember"]{
        _id,
        "headshot": headshot.asset->url,
        title,
        name,
        "slug": slug.current,
        bio,
        "socials": socials.links,
      } | order(_createdAt asc)
    `);
  
  console.log('MEMBERS', members)
  return { props: { members } };
}
