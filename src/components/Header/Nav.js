import React from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav__main}>
      <ul className={styles.nav__ul}>
        <li className="nav__li">
          <Link className="nav__link" href={"/"}>
            Home
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" href={"/about"}>
            About
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" href={"/coaching"}>
            Coaching
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" href={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
