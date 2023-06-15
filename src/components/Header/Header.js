import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import Nav from "./Nav";
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

import styles from "@/styles/Header.module.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import Hamburger from "../Hamburger/Hamburger";
import HamburgerMenu from "../Hamburger/HamburgerMenu";

const Header = ({
  hamburgerOpen,
  setHamburgerOpen,
  navSelected,
  setNavSelected,
}) => {
  return (
    <header className={`${pjs.className} ${styles.header}`}>
      <div className={styles.header__content}>
        <Link
          onClick={() => setNavSelected("")}
          className={styles.header__logo}
          href="/"
        >
          Nancy Hodnefield
        </Link>
        <Hamburger
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
        <Nav setNavSelected={setNavSelected} navSelected={navSelected} />
        <SocialIcons />
      </div>
      {hamburgerOpen ? (
        <HamburgerMenu
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
