import Head from "next/head";
import { useRouter } from "next/router";

// Head section for SEO
const SEOHead = ({ title, description }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="canonical"
        href={`${process.env.https}${router.asPath}`}
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`}
      />
      <meta
        property="og:site_name"
        content={process.env.NEXT_PUBLIC_APP_NAME}
      />

      {/* Open Graph Image */}
      <meta
        property="og:image"
        content={process.env.NEXT_OG_IMAGE_URL}
      />
      <meta
        property="og:image:secure_url"
        content={process.env.NEXT_OG_IMAGE_URL}
      />
      <meta property="og:image:type" content="image/jpg" />
    </Head>
  );
};

export default SEOHead;
