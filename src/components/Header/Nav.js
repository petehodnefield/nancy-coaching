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
            onClick={() => setNavSelected("About")}
            className={`${styles.nav__link}  ${
              navSelected === "About" ? "nav--selected" : ""
            }`}
            href={"/about"}
          >
            About
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={() => setNavSelected("Coaching")}
            className={`${styles.nav__link}  ${
              navSelected === "Coaching" ? "nav--selected" : ""
            }`}
            href={"/coaching"}
          >
            Coaching
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={() => setNavSelected("Contact")}
            className={`${styles.nav__link}  ${
              navSelected === "Contact" ? "nav--selected" : ""
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
