import React from "react";
import { Icon } from "@iconify/react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
const SocialIconsFooter = () => {
  return (
    <div className={`social-icons__wrapper `}>
      <Link
        href="#"
        className="social-icon__wrapper social-icon__wrapper--white"
      >
        <Icon
          className="social-icon social-icon--white"
          icon="fa6-brands:linkedin-in"
        />
      </Link>
      <Link
        href="#"
        className="social-icon__wrapper social-icon__wrapper--white"
      >
        <Icon className="social-icon" icon="fa6-brands:instagram" />
      </Link>
      <Link
        href="#"
        className="social-icon__wrapper social-icon__wrapper--white"
      >
        <Icon className="social-icon" icon="fa6-brands:facebook" />
      </Link>
    </div>
  );
};

export default SocialIconsFooter;
