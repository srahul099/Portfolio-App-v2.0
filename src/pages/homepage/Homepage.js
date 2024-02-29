import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/projects/Projects";
import "./homepage.css";
const Homepage = () => {
  return (
    <div className="section-flex">
      <div id="hero-page">
        <Hero />
      </div>

      <div id="about-page">
        <About />
      </div>
      <div id="projects-page">
        <Projects />
      </div>
    </div>
  );
};

export default Homepage;
