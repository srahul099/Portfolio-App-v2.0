import React from "react";
import "./header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbaritems">
        <Link
          className="Link"
          activeClass="active"
          to="hero-page"
          spy={true}
          smooth={true}
          offset={-100}
          duration={400}
        >
          <h3 className="home-nav">Home</h3>
        </Link>
        <Link
          className="Link"
          activeClass="active"
          to="about-page"
          spy={true}
          smooth={true}
          offset={-80}
          duration={400}
        >
          <h3 className="about-nav">About</h3>
        </Link>
        <Link
          className="Link"
          activeClass="active"
          to="projects-page"
          spy={true}
          smooth={true}
          offset={-100}
          duration={400}
        >
          <h3 className="projects-nav">Projects</h3>
        </Link>
        <a href="#">
          <h3 className="contact-nav">Contact</h3>
        </a>
      </div>
    </div>
  );
};

export default Header;
