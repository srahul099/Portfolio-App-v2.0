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
        Hi there! I'm Rahul, a third-year Computer Science student at SRM
        Institute with a passion for crafting user-centric experiences. I
        specialize in UI/UX design, front-end development, and graphic design,
        with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS,
        QML, and C++. I thrive on collaboration and bring experience in agile
        scrum methodologies. Beyond coding, I enjoy photography, graphic design,
        and exploring music. Let's connect and bring your digital visions to
        life!
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
