import "../styles/globals.scss";
import NProgress from "nprogress";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { ModalProvider } from "../components/layout/modal/ModalContext";
import { MenuProvider } from "../components/menu-drawer/MenuContext";
import routes from "../routes";
import ModalMount from "../components/layout/modal/ModalMount";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <ModalProvider>
        <Layout routes={routes}>
          <Component {...pageProps} />
        </Layout>
        <ModalMount/>
      </ModalProvider>
    </MenuProvider>
  );
}

export default MyApp;
