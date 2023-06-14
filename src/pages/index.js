import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import signature from "../../public/assets/images/signature.png";
import BtnPrimaryXl from "@/components/Buttons/BtnPrimaryXl";
import heroImage from "../../public/assets/images/hero-image.png";
import aboutImage from "../../public/assets/images/about.png";
import testimonialImage from "../../public/assets/images/testimonial-image.png";
import BtnPrimary from "@/components/Buttons/BtnPrimary";
export default function Home() {
  return (
    <main className={`${styles.main} `}>
      <section className={`${styles.hero__wrapper} section__container`}>
        <Image
          className={`${styles.hero__image} section__bg-img`}
          src={heroImage}
        />
        <div className={`section-card__wrapper ${styles.section__wrapper}`}>
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
              <BtnPrimaryXl
                btnText={"Ignite Your Potential Now"}
              ></BtnPrimaryXl>
            </Link>{" "}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="section__container">
        <div className={`section-card__wrapper ${styles.aboutcard__wrapper}`}>
          {" "}
          <Image
            src={aboutImage}
            alt="Nancy Hodnefield wearing a sweater smiling."
            className={`cover rounded ${styles.about__img}`}
          />
          <div
            className={`section-card section-card--white rounded ${styles.about__card}`}
          >
            <h2 className=" title title--md">Hi, I'm Nancy</h2>
            <p className="section-card__text section-card__text-mgsm">
              Welcome! I'm, a professional coach based in the beautiful state of
              Minnesota. With a background in human resources and a passion for
              empowering young female professionals, I am dedicated to helping
              you unlock your full potential and achieve your career goals.
            </p>
            <p className="section-card__text section-card__text-mglg">
              I bring a deep understanding of organizational dynamics, workplace
              challenges, and effective strategies for career advancement. I'll
              share valuable insights and practical tools to navigate the
              corporate landscape with confidence and authenticity.
            </p>
            <Link href={""}>
              <BtnPrimary btnText={"My Story"} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section__container section__container--centered section__container--primary">
        <div>
          <h2 className="title title--uppercase">Testimonials</h2>
          <h3 className="title title--lg">Hear from our students</h3>
          <div className="testimonial rounded">
            <div className="testimonial__img-wrapper">
              <Image
                className="cover"
                src={testimonialImage}
                alt="A testimonial image"
              />
            </div>
            <p className="testimonial__text">
              "Working with Nancy Hodnefield has been an absolute game-changer!
              Her insightful guidance and unwavering support have empowered me
              to overcome my fears and achieve remarkable personal growth.
              Nancy's coaching has truly transformed my life, and I couldn't be
              more grateful for her expertise and dedication."
            </p>
            <p className="testimonial__name">~ Sarah Thompson</p>
          </div>
        </div>
      </section>
    </main>
  );
}
