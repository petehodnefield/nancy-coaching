import BtnPrimary from "@/components/Buttons/BtnPrimary";
import Image from "next/image";
import React from "react";
import heroImage from "../../../public/assets/images/hero-image.png";
import { useState } from "react";
const index = () => {
  const [formContent, setFormContent] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(formContent);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    window.alert(
      "Thank you for contacting us! We will reply as soon as we can."
    );
  };
  return (
    <main className="contact">
      {/* Banner */}
      <div className="banner">
        <div className="banner-content">
          <h2 className="title--lg banner__title">Contact</h2>
          <p className="banner__text">
            Thank you for your interest in our professional coaching services!
            We&lsquo;re here to help you unleash your full potential and achieve
            your goals.
          </p>
          <p className="banner__text">
            If you have any questions, inquiries, or would like to explore how
            we can work together, please don&lsquo;t hesitate to reach out.
            Simply fill out the form below, and we&lsquo;ll get back to you as
            soon as possible.
          </p>
        </div>
      </div>

      {/* Contact form */}
      <form
        id="contactFormMain"
        className="contact__form"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="form__label-input-wrapper">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            onChange={(e) =>
              setFormContent({ ...formContent, name: e.target.value })
            }
            type="name"
            name="name"
            id="name"
            className="form__input form__input--lg form__input--dark"
            required
          />
        </div>
        <div className="form__label-input-wrapper">
          <label htmlFor="email" className="form__label">
            Email Address
          </label>
          <input
            onChange={(e) =>
              setFormContent({ ...formContent, email: e.target.value })
            }
            type="email"
            name="email"
            id="email"
            className="form__input form__input--lg form__input--dark"
            required
          />
        </div>
        <div className="form__label-input-wrapper form__label-input-wrapper--last">
          <label htmlFor="message" className="form__label">
            Message{" "}
          </label>
          <textarea
            onChange={(e) =>
              setFormContent({ ...formContent, message: e.target.value })
            }
            maxLength={"200"}
            name="message"
            id="message"
            className="form__input form__text-area form__input--dark"
            required
          />
        </div>
        <BtnPrimary btnType={"submit"} btnText={"Submit"} />
      </form>
    </main>
  );
};

export default index;
