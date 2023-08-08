import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "@/styles/Header.module.css";
import { facebookLink, linkedInLink, instagramLink } from "@/utils/socialLinks";
const SocialIcons = () => {
  return (
    <div className={`social-icons__wrapper ${styles.social__icons}`}>
      <Link
        target="__blank"
        href={linkedInLink}
        className="social-icon__wrapper social-icon__wrapper--dark"
      >
        <Icon className="social-icon" icon="fa6-brands:linkedin-in" />
      </Link>
      <Link
        target="__blank"
        href={instagramLink}
        className="social-icon__wrapper social-icon__wrapper--dark"
      >
        <Icon className="social-icon" icon="fa6-brands:instagram" />
      </Link>
      <Link
        target="__blank"
        href={facebookLink}
        className="social-icon__wrapper social-icon__wrapper--dark"
      >
        <Icon className="social-icon" icon="fa6-brands:facebook" />
      </Link>
    </div>
  );
};

export default SocialIcons;
