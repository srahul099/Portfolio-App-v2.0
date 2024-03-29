import React from "react";
import "./aboutpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faYoutube,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
const SocialLinks = () => {
  return (
    <div className="SocialLinks_Container">
      <div className="Socials">
        <a href="https://www.instagram.com/rahuulllllllllll" target={"_blank"}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com/@user-dy8qp9zn3v" target={"_blank"}>
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
  );
};

export default SocialLinks;
