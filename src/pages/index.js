import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useContext } from "react";
import { NavContext } from "./_app";
// Components
import signature from "../../public/assets/images/signature.png";
import BtnPrimaryXl from "@/components/Buttons/BtnPrimaryXl";
import BtnPrimary from "@/components/Buttons/BtnPrimary";

// Images
import aboutImage from "../../public/assets/images/about.png";
import testimonialImage from "../../public/assets/images/testimonial-image.png";
import bossImage from "../../public/assets/images/leadership.jpg";
import blueprintImage from "../../public/assets/images/career-success.jpg";
import transformImage from "../../public/assets/images/transform.jpg";

export default function Home() {
  const [navSelected, setNavSelected] = useContext(NavContext);
  return (
    <main className={`${styles.main} `}>
      <div className={styles.wrapper}>
        <section className={`${styles.hero__wrapper} section__container`}>
          <div
            className={`section-card__wrapper ${styles.section__wrapper} ${styles.foreground}`}
          >
            <div className="section-card section-card--glass rounded">
              <Image
                className={styles.signature}
                src={signature}
                alt="Nancy Johnson&lsquo;s signature"
              />
              <h1 className="title title--lg">
                Elevate Your Career <br /> with Confidence
              </h1>
              <h2 className="title--sm">
                Guiding Ambitious Young Women to Success
              </h2>
              <Link href={"/contact"} onClick={() => setNavSelected("contact")}>
                <BtnPrimaryXl
                  btnText={"Ignite Your Potential Now"}
                ></BtnPrimaryXl>
              </Link>{" "}
            </div>
          </div>
        </section>
      </div>

      {/* About section */}
      <section className={`section__container ${styles.about__section}`}>
        <div className={`section-card__wrapper ${styles.aboutcard__wrapper}`}>
          {" "}
          <Image
            src={aboutImage}
            alt="Nancy Johnson wearing a sweater smiling."
            className={`cover rounded ${styles.about__img}`}
          />
          <div
            className={`section-card section-card--white rounded ${styles.about__card}`}
          >
            <h2 className=" title title--md">Hi, I&lsquo;m Nancy</h2>
            <p className="section-card__text section-card__text-mgsm">
              Welcome! I&lsquo;m, a professional coach based in the beautiful
              state of Minnesota. With a background in human resources and a
              passion for empowering young female professionals, I am dedicated
              to helping you unlock your full potential and achieve your career
              goals.
            </p>
            <p className="section-card__text section-card__text-mglg">
              I bring a deep understanding of organizational dynamics, workplace
              challenges, and effective strategies for career advancement.
              I&lsquo;ll share valuable insights and practical tools to navigate
              the corporate landscape with confidence and authenticity.
            </p>
            <Link href={"/about"} onClick={() => setNavSelected("about")}>
              <BtnPrimary btnText={"My Story"} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section__container section__container--centered section__container--primary">
        <div className="section-card__wrapper section-card__wrapper--column">
          <h2 className="title title--uppercase">Testimonials</h2>
          <h3 className="title title--lg">Hear From Our Students</h3>
          <div className="testimonial rounded">
            <div className="testimonial__img-wrapper">
              <Image
                className="cover"
                src={testimonialImage}
                alt="A testimonial image"
              />
            </div>
            <p className="testimonial__text">
              &ldquo;Working with Nancy Johnson has been an absolute
              game-changer! Her insightful guidance and unwavering support have
              empowered me to overcome my fears and achieve remarkable personal
              growth. Nancy&lsquo;s coaching has truly transformed my life, and
              I couldn&lsquo;t be more grateful for her expertise and
              dedication.&ldquo;
            </p>
            <p className="testimonial__name">~ Sarah Thompson</p>
          </div>
        </div>
      </section>

      {/* Growth Solutions Section */}
      <section className="section__container section__container--centered">
        <div className="section-card__wrapper section-card__wrapper--column">
          <h2 className="title title--uppercase">Growth Solutions</h2>
          <h3 className="title title--lg">Elevate Your Career</h3>
          <div className="growth-cards__wrapper">
            <Link href={"/coaching"} onClick={() => setNavSelected("coaching")}>
              <div className="growth-card__wrapper">
                <Image
                  src={bossImage}
                  className="cover growth-card__img"
                  alt="Someone holding a coffee mug that says Like a Boss"
                />
                <div className="growth-card__text-wrapper">
                  <h4 className="growth-card__title">Leadership Excellence</h4>
                  <p className="growth-card__text">
                    Develop exceptional leadership skills for greater impact.
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/coaching"} onClick={() => setNavSelected("coaching")}>
              <div className="growth-card__wrapper">
                <Image
                  src={blueprintImage}
                  className="cover growth-card__img"
                  alt="A woman sitting at a chair smiling away from the camera."
                />
                <div className="growth-card__text-wrapper">
                  <h4 className="growth-card__title">
                    Career Success Blueprint
                  </h4>
                  <p className="growth-card__text">
                    Unlock your career potential and thrive professionally.
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/coaching"} onClick={() => setNavSelected("coaching")}>
              <div className="growth-card__wrapper">
                <Image
                  src={transformImage}
                  className="cover growth-card__img"
                  alt="A sign that says Difficult roads lead to beautiful destinations."
                />
                <div className="growth-card__text-wrapper">
                  <h4 className="growth-card__title">Transform Your Life</h4>
                  <p className="growth-card__text">
                    Experience profound personal growth and achieve your dreams.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section__container ${styles.cta}`}>
        <div className="section-cta__wrapper">
          <div className="section-cta">
            <h2 className="title title--xl">Ready to level up your career?</h2>
            <h3 className="title title--sm">
              Get access to our free career guide and start becoming your best
              self
            </h3>
            <form
              id="homepageForm"
              action="https://Instagram.us18.list-manage.com/subscribe/post"
              method="POST"
            >
              <input type="hidden" name="u" value="f388accd24cd6540958e58484" />
              <input type="hidden" name="id" value="477bd3de93" />
              <div className="form__label-input-wrapper">
                <label className="form__label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form__input form__input--lg form__input--hollow"
                  type="text"
                  id="name"
                  name="MERGE1"
                />
              </div>
              <div className="form__label-input-wrapper form__label-input-wrapper--last ">
                <label className="form__label" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="form__input form__input--lg form__input--hollow"
                  type="email"
                  id="email"
                  name="MERGE0"
                />
              </div>{" "}
              <BtnPrimary btnText={"Download"} btnType={"submit"} />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
