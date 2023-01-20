import { Fragment, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import useMenuContext from "./useMenuContext";
import Logo from "../logo";
import styles from "./MenuDrawer.module.scss";
import Button from "../button";
import CancelIcon from "../icons/CancelOutlined";
import SocialStack from "../social-stack/SocialStack";


const sidedrawerVariants = {
  hidden: { x: -240 },
  visible: { x: 0, transition: { duration: 0.25 } },
  exit: { x: -240 },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0 },
};

const MenuDrawer = () => {
  // DRAWER STATE (_app.js component is must be wrapped in a MenuProvider)
  const { isOpen, closeMenu } = useMenuContext();

  // Disable scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [isOpen]);

  const renderRoutes = () => {
    return ROUTES.map((route) => {
      return (
        <li key={route.href} className={styles.navListItem}>
          <Link className={styles.navLink} href={route.href}>
            <a onClick={closeMenu}>{route.label}</a>
          </Link>
        </li>
      );
    });
  };

  return (
    <Fragment>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sidedrawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.sideDrawer}
          >
            {/* Close Button */}
            <button onClick={closeMenu} className={styles.closeButton}>
              <CancelIcon />
            </button>

            {/* Brand Logo */}
            <Link href={"/"}>
              <a className={styles.logoLink} onClick={closeMenu}>
                <Logo />
              </a>
            </Link>
            <div className={styles.nav}>
              <ul className={styles.navList}>{renderRoutes()}</ul>
            </div>
            {/* Render Footer*/}
            <div style={{ padding: "30px 10px" }}>
              <div style={{ paddingBottom: "30px" }}>
                <SocialStack fill="#CDCDCD" />
              </div>
              <Button
                onClick={() => {
                  closeMenu();
                  openModal();
                }}
                style={{ width: "100%" }}
              >
                Contact
              </Button>
            </div>
            <div className={styles.disclaimer}>
              <p style={{ padding: "0 10px" }}>© Garrett Jester 2021</p>
            </div>
          </motion.div>
        )}

        {/* Backdrop */}
      </AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.backdrop}
          onClick={closeMenu}
        />
      )}
    </Fragment>
  );
};

export default MenuDrawer;
