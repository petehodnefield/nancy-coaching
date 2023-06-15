import React from "react";
import { Icon } from "@iconify/react";

// Styles import
import styles from "@/styles/Header.module.css";
import Link from "next/link";

const HamburgerMenu = ({ hamburgerOpen, setHamburgerOpen }) => {
  return (
    <div className={styles.hamburger__menu}>
      <Icon
        className={`${styles.hamburger__close} ${styles.hamburger__icon}`}
        icon="iconamoon:close-bold"
        onClick={() => setHamburgerOpen(false)}
      />
      <nav className={styles.hamburger__nav}>
        <ul className={styles.hamburger__ul}>
          <li className={styles.hamburger__li}>
            <Link
              onClick={() => setHamburgerOpen(false)}
              href={"/"}
              className={styles.hamburger__link}
            >
              Home
            </Link>
          </li>
          <li className={styles.hamburger__li}>
            <Link
              onClick={() => setHamburgerOpen(false)}
              href={"/about"}
              className={styles.hamburger__link}
            >
              About
            </Link>
          </li>
          <li className={styles.hamburger__li}>
            <Link
              onClick={() => setHamburgerOpen(false)}
              href={"/coaching"}
              className={styles.hamburger__link}
            >
              Coaching
            </Link>
          </li>
          <li className={styles.hamburger__li}>
            <Link
              onClick={() => setHamburgerOpen(false)}
              href={"/contact"}
              className={styles.hamburger__link}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
