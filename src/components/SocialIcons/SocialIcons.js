import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "@/styles/Header.module.css";

const SocialIcons = () => {
  return (
    <div className={`social-icons__wrapper ${styles.social__icons}`}>
      <Link href="#" className="social-icon__wrapper">
        <Icon className="social-icon" icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href="#" className="social-icon__wrapper">
        <Icon className="social-icon" icon="fa6-brands:instagram" />
      </Link>
      <Link href="#" className="social-icon__wrapper">
        <Icon className="social-icon" icon="fa6-brands:facebook" />
      </Link>
    </div>
  );
};

export default SocialIcons;
