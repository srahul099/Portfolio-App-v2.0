import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";
import { Squash as Hamburger } from "hamburger-react";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
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
        <NavLink
          exact
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
          onClick={homescrollToTop}
        >
          <h3 className="about-nav">About</h3>
        </NavLink>
        <NavLink
          to="/projects"
          className={location.pathname.startsWith("/projects") ? "active" : ""}
          onClick={projectscrollToTop}
        >
          <h3 className="projects-nav">Projects</h3>
        </NavLink>
        <NavLink
          exact
          to="/gallery"
          className={location.pathname.startsWith("/gallery") ? "active" : ""}
          onClick={projectscrollToTop}
        >
          <h3 className="home-nav">Gallery</h3>
        </NavLink>
        <NavLink
          to="/contact"
          className={location.pathname.startsWith("/contact") ? "active" : ""}
          onClick={projectscrollToTop}
        >
          <h3 className="contact-nav">Contact</h3>
        </NavLink>
      </div>
      <header>
        <div className="hamburger" onClick={toggleNav}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>

        <div className={`nav-links ${isOpen ? "" : "closed"}`}>
          <div className="nav-links">
            <NavLink
              exact
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => {
                homescrollToTop();
                toggleNav();
              }}
            >
              <h3 className="home-nav">Home</h3>
            </NavLink>
            <NavLink
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={() => {
                homescrollToTop();
                toggleNav();
              }}
            >
              <h3 className="about-nav">About</h3>
            </NavLink>
            <NavLink
              to="/projects"
              className={
                location.pathname.startsWith("/projects") ? "active" : ""
              }
              onClick={() => {
                projectscrollToTop();
                toggleNav();
              }}
            >
              <h3 className="projects-nav">Projects</h3>
            </NavLink>
            <NavLink
              exact
              to="/gallery"
              className={
                location.pathname.startsWith("/gallery") ? "active" : ""
              }
              onClick={() => {
                projectscrollToTop();
                toggleNav();
              }}
            >
              <h3 className="home-nav">Gallery</h3>
            </NavLink>
            <NavLink
              to="/contact"
              className={
                location.pathname.startsWith("/contact") ? "active" : ""
              }
              onClick={() => {
                projectscrollToTop();
                toggleNav();
              }}
            >
              <h3 className="contact-nav">Contact</h3>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
