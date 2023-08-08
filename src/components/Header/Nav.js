import React from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Nav = ({ setNavSelected, navSelected }) => {
  return (
    <nav className={styles.nav__main}>
      <ul className={styles.nav__ul}>
        <li className="nav__li">
          <Link
            onClick={() => setNavSelected("")}
            className={`${styles.nav__link} ${
              !navSelected ? "nav--selected" : ""
            }`}
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={() => setNavSelected("about")}
            className={`${styles.nav__link}  ${
              navSelected === "about" ? "nav--selected" : ""
            }`}
            href={"/about"}
          >
            About
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={() => setNavSelected("coaching")}
            className={`${styles.nav__link}  ${
              navSelected === "coaching" ? "nav--selected" : ""
            }`}
            href={"/coaching"}
          >
            Coaching
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={() => setNavSelected("contact")}
            className={`${styles.nav__link}  ${
              navSelected === "contact" ? "nav--selected" : ""
            }`}
            href={"/contact"}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
