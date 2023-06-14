import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import signature from "../../public/assets/images/signature.png";
import BtnPrimaryXl from "@/components/Buttons/BtnPrimaryXl";
import heroImage from "../../public/assets/images/hero-image.png";
export default function Home() {
  return (
    <main className={`${styles.main} `}>
      <Image
        className={`${styles.hero__image} section__bg-img`}
        src={heroImage}
      />
      <div className={styles.section__wrapper}>
        <div className="section-card section-card--glass rounded">
          <Image
            className={styles.signature}
            src={signature}
            alt="Nancy Hodnefield's signature"
          />
          <h1 className="title title--lg">
            Elevate Your Career <br /> with Confidence
          </h1>
          <h2 className="title--sm">
            Guiding Ambitious Young Women to Success
          </h2>
          <Link href={"/"}>
            <BtnPrimaryXl btnText={"Ignite Your Potential Now"}></BtnPrimaryXl>
          </Link>{" "}
        </div>
      </div>
    </main>
  );
}
