import React from "react";
import "./contact.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { animateScroll as scroll } from "react-scroll";
import {
  faBehance,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="home_contact-container">
      <div className="getintouch">
        <div className="contact-heading">
          <h1>Get in Touch</h1>
        </div>
        <div className="contact-desc">
          <p>
            If you are interested in my work or want to provide feedback about
            this website, I am open to exchanging ideas .
          </p>
        </div>
      </div>
      <div className="right_container">
        <div className="follow_me">
          <h3>Follow me on</h3>
          <div className="contact_socials">
            <a
              href="https://www.instagram.com/rahuulllllllllll"
              target={"_blank"}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/@user-dy8qp9zn3v"
              target={"_blank"}
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.behance.net/rahuls39" target={"_blank"}>
              <FontAwesomeIcon icon={faBehance} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-s-a5a375252/"
              target={"_blank"}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/srahul099" target={"_blank"}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <NavLink to="/contact" className="contact-link" onClick={scrollToTop}>
          <h3>Contact Me</h3>
          <FontAwesomeIcon icon={faPaperPlane} />
        </NavLink>
      </div>
    </div>
  );
};

export default Contact;
