import React from "react";
import styles from "@/styles/Header.module.css";

const Hamburger = ({ hamburgerOpen, setHamburgerOpen }) => {
  return (
    <div
      className={styles.hamburger__iconwrapper}
      onClick={() => setHamburgerOpen(!hamburgerOpen)}
    >
      <div className={`${styles.hamburger}`}>
        <div className={`${styles.hamburger__line}`}></div>
        <div className={`${styles.hamburger__line}`}></div>
        <div className={`${styles.hamburger__line}`}></div>
      </div>
    </div>
  );
};

export default Hamburger;
