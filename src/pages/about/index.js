import React from "react";
import Link from "next/link";
import styles from "@/styles/About.module.css";
// Images
import speakingImage from "../../../public/assets/images/stage-speaking.png";
import tableImage from "../../../public/assets/images/table.png";
import smilingImage from "../../../public/assets/images/smiling.png";
import Image from "next/image";
import BtnPrimary from "@/components/Buttons/BtnPrimary";

const index = () => {
  return (
    <main className="coaching">
      {/* Hero section */}
      <section className={`section__container ${styles.heroImg}`}>
        <div className="section-card__wrapper">
          <div className="section-card section-card--white  rounded-lg">
            <h2 className="title title--uppercase">Welcome!</h2>
            <h3 className="title title--lg">
              Empowering Young Professionals to <br /> Reach Their Full
              Potential
            </h3>
            <p className="section-card__text section-card__text-mgsm">
              I&lsquo;m Nancy, a passionate professional coach dedicated to
              guiding and mentoring young female professionals like you. I
              firmly believe that every woman has incredible potential waiting
              to be unleashed, and it&lsquo;s our mission to help you tap into
              that power and achieve the success and fulfillment you deserve.
            </p>
            <p className="section-card__text section-card__text-mgsm">
              As a young professional myself not too long ago, I understand the
              challenges and unique obstacles that women face in the workplace.
              Through years of experience and personal growth, I&lsquo;ve
              developed a coaching approach tailored specifically to address
              these challenges head-on. Together, we&lsquo;ll navigate through
              any roadblocks, harness your strengths, and create a clear path to
              realizing your goals and aspirations.
            </p>
            <p className="section-card__text">
              I strongly believe that mentoring is a powerful tool for personal
              and professional development. By providing guidance, support, and
              a safe space for exploration, I aim to empower you to break
              through self-limiting beliefs, build your confidence, and embrace
              your authentic self. Together, we&lsquo;ll uncover your true
              potential and unlock the doors to endless opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section__container ">
        <div className={`section-card__wrapper ${styles.relativeSection}`}>
          <Image
            className={`cover flip-horizontally ${styles.section__withinImg}`}
            src={tableImage}
            alt="Nancy sitting at a kitchen table smiling at the camera."
          />
          <div className="section-card  section-card--white rounded-lg">
            <h2 className="title title--uppercase">Our Approach</h2>
            <h3 className="title title--lg">
              Holistic Coaching for <br /> Lasting Transformation
            </h3>
            <p className="section-card__text section-card__text-mgsm">
              At Nancy Johnson Coaching, our approach is rooted in a holistic
              perspective that considers every aspect of your life and career.
              We understand that your professional journey is intertwined with
              your personal growth, and we take a comprehensive approach to
              ensure your transformation is sustainable and impactful.
            </p>
            <p className="section-card__text section-card__text-mgsm">
              Through personalized one-on-one coaching sessions, we&lsquo;ll
              delve deep into your unique circumstances, goals, and aspirations.
              We&lsquo;ll work together to identify and overcome any limiting
              beliefs, develop effective strategies, and enhance your skills and
              capabilities. Whether you&lsquo;re looking to advance in your
              current role, transition to a new career, or establish your own
              business, our coaching sessions will provide you with the tools
              and insights to make it happen.
            </p>
            <p className="section-card__text section-card__text-mgsm">
              In addition to individual coaching, we also offer workshops and
              group sessions where you&lsquo;ll have the opportunity to connect
              with like-minded young professionals. These sessions provide a
              supportive community where you can share experiences, learn from
              others, and expand your network.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section__container section__container--centered section__container--primary ">
        <div className="section-card__wrapper section-card__wrapper--column">
          <div className="section-card section-card--white rounded-lg">
            <h2 className="title title--uppercase">What to Expect</h2>
            <h3 className="title title--lg">
              A Personalized Coaching Journey <br /> Tailored to You
            </h3>
            <p className="section-card__text section-card__text-mgsm ">
              When you embark on a coaching journey with Nancy Johnson Coaching,
              you can expect a highly personalized and tailored experience
              designed to meet your specific needs and goals. Here&lsquo;s what
              you can anticipate along the way:
            </p>
            <ol className="section-card__ol">
              <li className="section-card__text ">
                <span className="bold">Discovery: </span>We&lsquo;ll start by
                getting to know each other and understanding your current
                situation, goals, and aspirations. This phase allows us to
                establish a strong foundation and create a roadmap for your
                coaching journey.
              </li>
              <li className="section-card__text">
                <span className="bold">Exploration: </span>Through
                thought-provoking conversations and powerful questioning,
                we&lsquo;ll delve deep into your values, strengths, and
                passions. We&lsquo;ll uncover any limiting beliefs or barriers
                and develop strategies to overcome them.
              </li>
              <li className="section-card__text">
                <span className="bold">Action: </span> Armed with a clear vision
                and concrete goals, we&lsquo;ll develop an actionable plan to
                help you make steady progress towards your objectives.
                We&lsquo;ll identify specific steps, milestones, and
                accountability measures to ensure your success.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section__container ${styles.aboutCTA}`}>
        <div className="section-cta__wrapper">
          <div className="section-cta">
            <h2 className="title title--uppercase">Let&lsquo;s get started</h2>
            <h3 className="title title--lg">
              Take the First Step Towards a Brighter Future
            </h3>
            <h4 className="title title--sm title--xtra-mg">
              Are you ready to embark on a transformative coaching journey that
              will empower you to reach new heights in your personal and
              professional life?{" "}
            </h4>
            <Link className="btn" href="/contact">
              <BtnPrimary btnText={"Reach out"} btnType={"text"} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default index;
