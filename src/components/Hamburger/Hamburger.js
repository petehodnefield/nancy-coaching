import React from "react";
import styles from "@/styles/Header.module.css";

const Hamburger = ({ hamburgerOpen, setHamburgerOpen }) => {
  return (
    <div
      onClick={() => setHamburgerOpen(!hamburgerOpen)}
      className={`${styles.hamburger}`}
    >
      <div className={`${styles.hamburger__line}`}></div>
      <div className={`${styles.hamburger__line}`}></div>
      <div className={`${styles.hamburger__line}`}></div>
    </div>
  );
};

export default Hamburger;
