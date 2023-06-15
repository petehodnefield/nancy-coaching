import React from "react";
import { Icon } from "@iconify/react";

// Styles import
import styles from "@/styles/Header.module.css";
import Link from "next/link";

const HamburgerMenu = ({
  hamburgerOpen,
  setHamburgerOpen,
  navSelected,
  setNavSelected,
}) => {
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
              onClick={() => {
                setHamburgerOpen(false);
                setNavSelected("");
              }}
              href={"/"}
              className={`${styles.hamburger__link}  ${
                !navSelected ? "nav--selected" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className={styles.hamburger__li}>
            <Link
              onClick={() => {
                setHamburgerOpen(false);
                setNavSelected("About");
              }}
              href={"/about"}
              className={`${styles.hamburger__link}  ${
                navSelected === "About" ? "nav--selected" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li className={styles.hamburger__li}>
            <Link
              onClick={() => {
                setHamburgerOpen(false);
                setNavSelected("Coaching");
              }}
              href={"/coaching"}
              className={`${styles.hamburger__link}  ${
                navSelected === "Coaching" ? "nav--selected" : ""
              }`}
            >
              Coaching
            </Link>
          </li>
          <li className={styles.hamburger__li}>
            <Link
              onClick={() => {
                setHamburgerOpen(false);
                setNavSelected("Contact");
              }}
              href={"/contact"}
              className={`${styles.hamburger__link}  ${
                navSelected === "Contact" ? "nav--selected" : ""
              }`}
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
