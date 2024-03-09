import React, { useEffect, useRef } from "react";
import "./projects.css";

// banner imports
import weatherbanner from "../../common/images/banners/Weather-banner.png";
import userauthenticationbanner from "../../common/images/banners/UserAunthentication-banner.png";
import credclonebanner from "../../common/images/banners/Credclone-banner.png";
import inprogressbanner from "../../common/images/banners/inprogress-banner.png";
import portfoliobanner from "../../common/images/banners/Portfolio-banner.png";
//banner imports end

import { Player } from "@lordicon/react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
const ICON = require("../../common/lotties/more-animation");
const Projects = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const playerRef = useRef(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);
  return (
    <div className="projects-section">
      <div className="projects-header">
        <h1>Projects</h1>
        <Link to="/projects" onClick={scrollToTop} className="more-projects">
          <h2>See All</h2>
          <div className="more-icon">
            <Player
              ref={playerRef}
              icon={ICON}
              colorize="var(--white)"
              onComplete={() => playerRef.current?.playFromBeginning()}
              size={40}
            />
          </div>
        </Link>
      </div>
      <div className="projects">
        {/*  */}
        {/* projects */}
        <div className="project-container">
          <img src={portfoliobanner} alt="" className="project-image" />
          <div className="project-desc">
            <h2>Portfolio</h2>
            <p>
              Developed to showcase my skills in web development, my portfolio
              website exemplifies proficiency in technologies such as ReactJS,
              CSS, and Figma. Through these tools, I ensure a seamless and
              interactive user experience.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,javascript,css,figma"
              alt="tech stack"
              className="project-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <div className="project-container">
          <img src={weatherbanner} alt="" className="project-image" />
          <div className="project-desc">
            <h2>Weather App</h2>
            <p>
              Developed a full-stack weather app using NodeJS/Express for
              server-side logic and ReactJS/Handlebars for interactive frontend,
              delivering real-time weather data.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,nodejs,express"
              alt="tech stack"
              className="project-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <div className="project-container">
          <img src={credclonebanner} alt="" className="project-image" />
          <div className="project-desc">
            <h2>Cred Clone</h2>
            <p>
              Crafted a responsive CRED Landing Page clone using ReactJS for
              modularity and interactivity, styled with CSS to match the
              original design.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,css"
              alt="tech stack"
              className="project-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <div className="project-container">
          <img
            src={userauthenticationbanner}
            alt=""
            className="project-image"
          />
          <div className="project-desc">
            <h2>User Aunthentication System</h2>
            <p>
              Developed a cross-platform authentication system using Qt Creator
              (QML/C++) for streamlined user experience across desktop, mobile,
              and web.
            </p>
            <img
              src="https://skillicons.dev/icons?i=qt,cpp"
              alt="tech stack"
              className="project-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
