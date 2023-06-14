import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
// Components
import signature from "../../public/assets/images/signature.png";
import BtnPrimaryXl from "@/components/Buttons/BtnPrimaryXl";
import BtnPrimary from "@/components/Buttons/BtnPrimary";

// Images
import heroImage from "../../public/assets/images/hero-image.png";
import aboutImage from "../../public/assets/images/about.png";
import testimonialImage from "../../public/assets/images/testimonial-image.png";
import bossImage from "../../public/assets/images/leadership.jpg";
import blueprintImage from "../../public/assets/images/career-success.jpg";
import transformImage from "../../public/assets/images/transform.jpg";

export default function Home() {
  return (
    <main className={`${styles.main} `}>
      <section className={`${styles.hero__wrapper} section__container`}>
        <Image
          className={`${styles.hero__image} section__bg-img`}
          alt="Nancy Hodnefield sitting in her office full of plants smiling at the camera."
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

      {/* Growth Solutions Section */}
      <section className="section__container section__container--centered">
        <div className="section-card__wrapper section-card__wrapper--column">
          <h2 className="title title--uppercase">Growth Solutions</h2>
          <h3 className="title title--lg">Elevate Your Career</h3>
          {/* Solution cards */}
          <div className="growth-cards__wrapper">
            {/* Solution 1 */}
            <Link href={""}>
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
            {/* Solution 2 */}
            <Link href={""}>
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
            {/* Solution 3 */}
            <Link href={""}>
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
      <section className="section__container">
        <Image
          className={`${styles.hero__image} section__bg-img section__bg-img--filter`}
          src={heroImage}
          alt="Nancy Hodnefield sitting in her office full of plants smiling at the camera."
        />
        <div className="section-cta__wrapper">
          <div className="section-cta">
            <h2 className="title title--xl">Ready to level up your career?</h2>
            <h3 className="title title--sm">
              Get access to our free career guide and start becoming your best
              self
            </h3>
            <form id="homepageForm">
              {/* Name input */}
              <div className="form__label-input-wrapper">
                <label className="form__label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form__input form__input--hollow"
                  type="text"
                  id="name"
                />
              </div>
              {/* Email input */}
              <div className="form__label-input-wrapper form__label-input-wrapper--last ">
                <label className="form__label" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="form__input form__input--hollow"
                  type="email"
                  id="email"
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
