import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import Nav from "./Nav";
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

import styles from "@/styles/Header.module.css";
import SocialIcons from "../SocialIcons/SocialIcons";

const Header = () => {
  return (
    <header className={`${pjs.className} ${styles.header}`}>
      <div className={styles.header__content}>
        <Link className={styles.header__logo} href="/">
          Nancy Hodnefield
        </Link>
        <Nav />
        <SocialIcons />
      </div>
    </header>
  );
};

export default Header;
