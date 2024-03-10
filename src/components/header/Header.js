import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState("home");
  const homescrollToTop = () => {
    scroll.scrollToTop();
    setCurrentSection("home");
  };
  const projectscrollToTop = () => {
    scroll.scrollToTop();
    setCurrentSection("projects");
  };

  return (
    <div className="navbar">
      <div className="navbaritems">
        <NavLink
          exact
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={homescrollToTop}
        >
          <h3 className="home-nav">Home</h3>
        </NavLink>
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
        <NavLink
          to="/projects"
          className={location.pathname.startsWith("/projects") ? "active" : ""}
          onClick={projectscrollToTop}
        >
          <h3 className="projects-nav">Projects</h3>
        </NavLink>
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
