import React from "react";
import { Icon } from "@iconify/react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { instagramLink, facebookLink, linkedInLink } from "@/utils/socialLinks";
const SocialIconsFooter = ({ extraClassName }) => {
  return (
    <div className={`social-icons__wrapper ${extraClassName}`}>
      <Link
        target="__blank"
        href={linkedInLink}
        className="social-icon__wrapper social-icon__wrapper--white"
      >
        <Icon
          className="social-icon social-icon--white"
          icon="fa6-brands:linkedin-in"
        />
      </Link>
      <Link
        target="__blank"
        href={instagramLink}
        className="social-icon__wrapper social-icon__wrapper--white"
      >
        <Icon className="social-icon" icon="fa6-brands:instagram" />
      </Link>
      <Link
        target="__blank"
        href={facebookLink}
        className="social-icon__wrapper social-icon__wrapper--white"
      >
        <Icon className="social-icon" icon="fa6-brands:facebook" />
      </Link>
    </div>
  );
};

export default SocialIconsFooter;
