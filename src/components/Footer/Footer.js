import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import SocialIconsFooter from "../SocialIcons/SocialIconsFooter";
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });
import { Icon } from "@iconify/react";
const Footer = ({ navSelected, setNavSelected }) => {
  const currentYear = new Date().getFullYear();

  const handleFooterFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={`footer ${pjs.className}`}>
      <div className="footer__columns-wrapper">
        {/* Column 1 */}
        <div className="footer__column footer__column--lg">
          <Link
            className="title title--sm"
            href="/"
            onClick={() => setNavSelected("")}
          >
            <h2 className="footer__title">Nancy Johnson</h2>
          </Link>
          <p className="footer__copyright footer__copyright--md-screen">
            ©{currentYear} Nancy Johnson Coaching LLC.
          </p>
          <div className="footer__terms-wrapper">
            <Link
              onClick={() => setNavSelected("")}
              className="footer__link--sm"
              href={""}
            >
              Terms of Use
            </Link>
            <Link
              onClick={() => setNavSelected("")}
              className="footer__link--sm"
              href={""}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        {/* Column 2 */}
        <div className="footer__column footer__column--sm footer__hidden-mobile">
          <h3 className="footer__subtitle">Quick Links</h3>
          <ul className="footer__ul">
            <li className="footer__li">
              <Link
                onClick={() => setNavSelected("")}
                className="footer__link"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li className="footer__li">
              <Link
                onClick={() => setNavSelected("about")}
                className="footer__link"
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li className="footer__li">
              <Link
                onClick={() => setNavSelected("coaching")}
                className="footer__link"
                href={"/coaching"}
              >
                Coaching
              </Link>
            </li>
            <li className="footer__li">
              <Link
                onClick={() => setNavSelected("contact")}
                className="footer__link"
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer__column footer__column--sm">
          <h3 className="footer__subtitle">Sign up</h3>
          <form
            action="https://formsubmit.co/4fa4996dc920551c7b4515f7cb84bb72"
            method="POST"
            className="footer__form"
            id="footerForm"
          >
            <input
              type="hidden"
              name="_next"
              value="https://nancy-coaching.vercel.app/"
            />
            <label
              htmlFor="signUp"
              className="thin footer__text form__label--thin"
            >
              Join our newsletter!
            </label>
            <div className="footer__form-wrapper">
              <input
                className="form__input form__input--hollow form__input--sm"
                type="email"
                id="signUp"
                name="email"
                required
              />
              <button className="footer__form-submit-btn" type="submit">
                <Icon
                  className="footer__form-icon"
                  icon="basil:arrow-right-solid"
                />
              </button>
            </div>
          </form>
          <div></div>
          <h3 className="footer__subtitle">Follow</h3>
          <SocialIconsFooter extraClassName={"social-icons__footer"} />
          <p className="footer__copyright footer__copyright--sm-screen">
            ©{currentYear} Nancy Johnson Coaching LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
