// components/layout.js
import React, { useEffect, useState } from "react";
import Header from "./header"
import Footer from "./footer";
import SiteInfo from "../site-info";
import { useRouter } from "next/router";
import Logo from "../logo";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MenuDrawer from "../menu-drawer/MenuDrawer";
import {Divider} from "@material-ui/core";
import Button from "../arrow-button"
import useMenuContext from "../menu-drawer/useMenuContext";



export default function Layout({ children, routes }) {
  const router = useRouter();
  const { _, width } = useWindowDimensions();
  const {closeMenu} = useMenuContext();
  const [navHidden, setNavHidden] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle route-related changes.
  useEffect(() => {
    if (width > 800) closeMenu();

    setNavHidden(
      router.pathname === "/login" || router.pathname.includes(`/blog/`)
    );

  }, [router.pathname, setNavHidden, width, routes]);

  const currentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <MenuDrawer
        routes={routes}
        copyright={`${process.env.NEXT_PUBLIC_COPYRIGHT} ${currentYear()}`}
        footer={
          <div>
            <Divider /> <Button onClick={() => {
              closeMenu()
              router.push('/login')
            }} type="primary">Client Console</Button>
          </div>
        }
      />
      <Header
        navHidden={navHidden}
        routes={routes}
        logo={<Logo color={darkMode ? "white" : "black"} />}
        darkMode={darkMode}
      />
      <main>{children}</main>
      {!navHidden && (
        <Footer
          darkMode={darkMode}
          routes={routes}
          leftContent={
            <SiteInfo
              language="EN"
              locale="US"
              copyright={`${
                process.env.NEXT_PUBLIC_COPYRIGHT
              } ${currentYear()}`}
              logo={
                <Logo color="gray" style={{ height: "18px", width: "auto" }} />
              }
            />
          }
        />
      )}
    </div>
  );
}
