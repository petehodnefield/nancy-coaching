import React from "react";
import Image from "next/image";
import Link from "next/link";

// Style import
import styles from "@/styles/Coaching.module.css";

// Image imports
import heroImage from "../../../public/assets/images/hero-image.png";
import twoprosImage from "../../../public/assets/images/two-professionals.png";
import professionalImage from "../../../public/assets/images/professional.jpg";
import bestbossImage from "../../../public/assets/images/best-boss.jpg";

// Components imports
import BtnOutline from "@/components/Buttons/BtnOutline";
import BtnPrimary from "@/components/Buttons/BtnPrimary";

const index = () => {
  return (
    <main>
      {" "}
      {/* Banner */}
      <div className="banner">
        <Image
          className="banner__img cover"
          src={heroImage}
          alt="Nancy Hodnefield sitting in her office full of plants smiling at the camera."
        />
        <div className="banner-content banner-content--centered">
          <h2 className="title--lg banner__title">Work With Us</h2>
        </div>
      </div>
      {/* 1 on 1 Coaching */}
      <section className="section__container section__continer--xtra-padding">
        <div className="section-card__wrapper">
          <div className="section-card section-card--bare">
            <h2 className="title title--uppercase">1 on 1 Coaching</h2>
            <h3 className="title title--lg">
              Personalized Guidance for Young <br /> Female Professionals
            </h3>
            <p className="section-card__text section-card__text-mglg">
              In our one-on-one coaching sessions, I offer a highly personalized
              and tailored approach to help young female professionals navigate
              their unique challenges and achieve their goals. Together,
              we&lsquo;ll embark on a transformative journey that focuses on
              your individual needs, aspirations, and growth.
            </p>
            <div className="section-card__ul-wrapper">
              <p className="section-card__text medium">
                Some of what we&lsquo;ll cover:
              </p>
              <ul className="section-card__ul">
                <li>Career advancement</li>
                <li>Work-life balance</li>
                <li>Building confidence</li>
                <li>Address self-limiting beliefs</li>
              </ul>
            </div>
            <p className="section-card__text">
              I am committed to providing you with unwavering support and
              guidance as we work towards your desired outcomes. Together,
              we&lsquo;ll develop action plans, set achievable milestones, and
              navigate through obstacles that may arise. With our experience and
              expertise, I will empower you to unlock your full potential and
              thrive in both your personal and professional endeavors.
            </p>
          </div>
          <Image
            src={twoprosImage}
            alt="A young professional wearing a business suit"
            className={`cover section__within-img ${styles.professional}`}
          />
        </div>
      </section>
      {/* Career Transition Coaching  */}
      <section className="section__container section__container--primary section__continer--xtra-padding">
        <div className="section-card__wrapper">
          <div className="section-card section-card--white rounded-lg">
            <h2 className="title title--uppercase">
              Career Transition Coaching
            </h2>
            <h3 className="title title--lg">
              {" "}
              Embrace New Opportunities <br /> with Confidence
            </h3>
            <p className="section-card__text section-card__text-mgsm">
              Are you considering a career transition? Whether you&lsquo;re
              looking to switch industries, explore entrepreneurship, or pursue
              a passion project, our career transition coaching services are
              designed to help you navigate this exciting yet challenging phase
              in your professional life.
            </p>
            <p className="section-card__text section-card__text-mgsm">
              Together, we&lsquo;ll embark on a comprehensive journey that
              includes self-assessment, exploration of potential career paths,
              and development of a strategic plan to make your transition a
              success. We&lsquo;ll identify your transferable skills, leverage
              your strengths, and address any fears or uncertainties that may
              arise during this process.
            </p>
            <p className="section-card__text section-card__text-mglg">
              Through personalized guidance and practical tools, I will provide
              you with the confidence and clarity needed to navigate the job
              market, create a standout resume, and excel in interviews.
              Together, we&lsquo;ll ensure that your career transition aligns
              with your values, passions, and long-term goals, allowing you to
              embark on a fulfilling and rewarding new chapter in your
              professional life.
            </p>
            <Link href={"#"}>
              <BtnOutline btnText={"Embrace change"} btnType={"text"} />
            </Link>
          </div>
          <Image
            src={professionalImage}
            className={`cover section__within-img ${styles.professional}`}
            alt="A female professional standing in an office holding her hands together."
          />
        </div>
      </section>
      {/* Leadership Development */}
      <section className="section__container section__continer--xtra-padding">
        <div className="section-card__wrapper">
          <Image
            src={bestbossImage}
            className="cover section__within-img"
            alt="A woman holding a mug that says: &lsquo;Worl&lsquo;s Best Boss&lsquo;"
          />
          <div className="section-card section-card--bare rounded-lg">
            <h2 className="title title--uppercase">Leadership Development</h2>
            <h3 className="title title--lg">
              Unlock Your Leadership Potential
            </h3>
            {/* Questions */}
            <h4 className="section-card__h4">Why leadership?</h4>
            <p className="section-card__text section-card__text-mglg">
              Leadership skills are crucial for young female professionals
              seeking to make a significant impact in their careers. In our
              leadership development coaching, I focus on empowering you with
              the necessary skills and mindset to become an influential and
              successful leader.
            </p>
            <h4 className="section-card__h4">
              What if I&lsquo;m not a natural leader?
            </h4>
            <p className="section-card__text section-card__text-mgsm">
              Through a combination of self-reflection, skill-building
              exercises, and practical strategies, we&lsquo;ll work together to
              enhance your leadership abilities. We&lsquo;ll explore topics such
              as effective communication, decision-making, team building, and
              overcoming challenges in a male-dominated workplace.
            </p>
            <p className="section-card__text section-card__text-mgxl">
              I will provide you with the tools to identify and leverage your
              unique leadership style, fostering authenticity and empowering you
              to lead with confidence and influence. Together, we&lsquo;ll
              develop a leadership development plan that aligns with your career
              goals and supports your long-term growth.
            </p>
            <Link href={"#"}>
              <BtnPrimary btnText={"Unlock your potential"} btnType={"text"} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default index;
