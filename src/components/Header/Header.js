import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import Nav from "./Nav";
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });
import logoFull from "../../../public/assets/logo/logo-full.png";
import logoButterfly from "../../../public/assets/logo/logo-butterfly.png";

import styles from "@/styles/Header.module.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import Hamburger from "../Hamburger/Hamburger";
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import Image from "next/image";

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
          className={styles.header__logoWrapper}
          href="/"
        >
          <Image
            className={`${styles.header__logoFull}`}
            src={logoFull}
            alt="Nancy Johnson Coaching and Consulting"
          />
          <Image
            className={`${styles.header__logoButterfly}`}
            src={logoButterfly}
            alt="Nancy Johnson Coaching and Consulting"
          />
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
          setNavSelected={setNavSelected}
          navSelected={navSelected}
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
