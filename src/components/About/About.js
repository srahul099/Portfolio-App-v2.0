import React from "react";
import "./about.css";
import { NavLink } from "react-router-dom";
import { animateScroll } from "react-scroll";
const About = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="about_Container">
      <h2 className="about-Heading">About</h2>
      <p className="about_Desc">
        Hi, I’m Rahul, a Computer Science student passionate about developing
        user-friendly applications and enhancing digital experiences. With a
        strong interest in modern technologies, I focus on creating solutions
        that make a difference. I love working on projects that combine
        creativity with problem-solving, always aiming to deliver meaningful
        results.
      </p>
      <div className="more_About">
        <NavLink to="/about" className="more_About" onClick={scrollToTop}>
          More..
        </NavLink>
      </div>
    </div>
  );
};

export default About;
