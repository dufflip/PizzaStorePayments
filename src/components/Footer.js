import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="FooterContainer">
      <div className="FooterWrap">
        <section className="SocialMedia">
          <div className="SocialMediaWrap">
            <Link className="SocialLogo" to="/">
              Pizza
            </Link>
            <div className="SocialIcons">
              <a
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
              <a
                className="SocialIconLink"
                href="//www.twitter.com/briandesignz"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
