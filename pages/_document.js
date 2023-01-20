import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { ServerStyleSheets } from "@material-ui/core/styles";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />

          {/* Open Graph */}
          <meta property="og:title" content="Prism" />
          <meta
            property="og:description"
            content="Modern B2B Marketing Consulting & Solutions"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN} />
          <meta
            property="og:site_name"
            content={process.env.NEXT_PUBLIC_APP_NAME}
          />

          {/* Open Graph Image */}
          <meta property="og:image" content={process.env.NEXT_OG_IMAGE_URL} />
          <meta
            property="og:image:secure_url"
            content={process.env.NEXT_OG_IMAGE_URL}
          />
          <meta property="og:image:type" content="image/jpg" />
        </Head>
        <body>
          <Main />
          <div id="modal-root"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Add Material-UI StyleSheets to prevent flickering
  // on first render:
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
