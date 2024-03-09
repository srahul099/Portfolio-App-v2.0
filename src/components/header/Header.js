import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const scrollToTop = () => {
    scroll.scrollToTop();
    setCurrentSection("home");
  };

  return (
    <div className="navbar">
      <div className="navbaritems">
        <RouterLink
          to="/"
          className={currentSection === "home" ? "active" : ""}
          onClick={scrollToTop}
        >
          <h3 className="home-nav">Home</h3>
        </RouterLink>
        <ScrollLink
          className="Link"
          to="about-page"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active"
          onSetActive={() => setCurrentSection("about")}
          onSetInactive={() => setCurrentSection("home")}
        >
          <h3 className="about-nav">About</h3>
        </ScrollLink>
        <ScrollLink
          className="Link"
          to="projects-page"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active"
          onSetActive={() => setCurrentSection("projects")}
          onSetInactive={() => setCurrentSection("home")}
        >
          <h3 className="projects-nav">Projects</h3>
        </ScrollLink>
        <ScrollLink
          className="Link"
          to="contact-page"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active"
          onSetActive={() => setCurrentSection("contact")}
          onSetInactive={() => setCurrentSection("home")}
        >
          <h3 className="contact-nav">Contact</h3>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Header;
