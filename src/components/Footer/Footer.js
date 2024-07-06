import React from "react";
import "./footer.css";
import {
  UilInstagramAlt,
  UilYoutube,
  UilLinkedin,
  UilGithub,
} from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
import { animateScroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="footer-container">
      <div className="footer-desc">
        <NavLink to="/" onClick={scrollToTop}>
          <h2>Rahul.</h2>
        </NavLink>
        <p className="footer-userdesc">
          I'm a web developer and designer based in India. I have a very deep
          passion to design stuff &#10084; This Website is made with the lot of
          love and passion.
        </p>
        <div className="icons">
          <a href="">
            <UilInstagramAlt size="40" color="#d5ff3f" />
          </a>

          <a href="">
            <UilLinkedin size="40" color="#d5ff3f" />
          </a>
          <a href="">
            <UilGithub size="40" color="#d5ff3f" />
          </a>
          <a href="">
            <UilYoutube size="40" color="#d5ff3f" />
          </a>
        </div>
        <div className="footer-text">
          <p>Portfolio v2.1</p>
          <p>© 2024 Rahul</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
