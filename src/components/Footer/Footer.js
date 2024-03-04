import React from "react";
import "./footer.css";
import Logo from "../../common/images/LOGO FINAL white png.png";
import {
  UilInstagramAlt,
  UilYoutube,
  UilLinkedin,
  UilGithub,
} from "@iconscout/react-unicons";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-desc">
        <h2>Rahul.</h2>
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
          <p>Portfolio v2.0</p>
          <p>© 2024 Rahul</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
