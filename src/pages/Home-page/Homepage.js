import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Recent-Projects/Projects";
import "./homepage.css";
import Contact from "../../components/Contact/Contact";
import Behanceprjs from "../../components/BehancePrjs/Behanceprjs";
const Homepage = () => {
  document.title = "Portfolio | Home";
  return (
    <div>
      <div className="section-flex">
        <div id="hero-page">
          <Hero />
        </div>

        <div id="about-page">
          <About />
        </div>
        <div className="behanceprjs">
          <Behanceprjs />
        </div>
        <div id="projects-page">
          <Projects />
        </div>
        <div id="contact-page">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
