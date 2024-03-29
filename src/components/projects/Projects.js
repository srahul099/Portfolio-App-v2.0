import React from "react";
import "./projects.css";

// banner imports
import weatherbanner from "../../common/images/banners/Weather-banner.png";
import userauthenticationbanner from "../../common/images/banners/UserAunthentication-banner.png";
import credclonebanner from "../../common/images/banners/Credclone-banner.png";
// import inprogressbanner from "../../common/images/banners/inprogress-banner.png";
import portfoliobanner from "../../common/images/banners/Portfolio-banner.png";
//banner imports end
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { animateScroll } from "react-scroll";
const Projects = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="projects-section">
      <div className="projects-header">
        <h1>Recent Projects</h1>
        <NavLink to="/projects" onClick={scrollToTop} className="more-projects">
          <h2>See All</h2>
          <div className="more">
            <FontAwesomeIcon icon={faArrowRight} className="more-icon" />
          </div>
        </NavLink>
      </div>
      <div className="projects">
        {/*  */}
        {/* projects */}
        <div className="project-container">
          <img src={portfoliobanner} alt="" className="project-image" />
          <div className="project-desc">
            <h2>Portfolio</h2>
            <div className="project_type">Frontend</div>
            <p>
              Developed to showcase my skills in web development, my portfolio
              website exemplifies proficiency in technologies such as ReactJS,
              CSS, and Figma.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,javascript,css,figma"
              alt="tech stack"
              className="project-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <NavLink
          to="/projects/UserAuthentication"
          onClick={scrollToTop}
          className="project-container"
        >
          <img
            src={userauthenticationbanner}
            alt=""
            className="project-image"
          />
          <div className="project-desc">
            <h2>User Aunthentication System</h2>
            <div className="project_type">Full Stack</div>
            <p>
              Developed a cross-platform authentication system using Qt Creator
              (QML/C++) for streamlined user experience across desktop, mobile,
              and web.
            </p>
            <img
              src="https://skillicons.dev/icons?i=qt,cpp,figma"
              alt="tech stack"
              className="project-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </NavLink>
        <NavLink
          to="/projects/weatherapp"
          onClick={scrollToTop}
          className="project-container"
        >
          <img src={weatherbanner} alt="" className="project-image" />
          <div className="project-desc">
            <h2>Weather App</h2>
            <div className="project_type">Full Stack</div>
            <p>
              Developed a full-stack weather app using NodeJS/Express for
              server-side logic and ReactJS/Handlebars for interactive frontend,
              delivering real-time weather data.
            </p>
            <img
              src="https://skillicons.dev/icons?i=html,css,javascript,nodejs,express"
              alt="tech stack"
              className="project-tech"
            />
          </div>
        </NavLink>
        <NavLink
          to="/projects/credclone"
          onClick={scrollToTop}
          className="project-container"
        >
          <img src={credclonebanner} alt="" className="project-image" />
          <div className="project-desc">
            <h2>Cred Clone</h2>
            <div className="project_type">Frontend</div>
            <p>
              Crafted a responsive CRED Landing Page clone using ReactJS for
              modularity and interactivity, styled with CSS to match the
              original design.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,css,javascript"
              alt="tech stack"
              className="project-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </NavLink>
      </div>
      <NavLink
        to="/projects"
        onClick={scrollToTop}
        className="more-projects_mobile"
      >
        <h2>See All</h2>
        <div className="more">
          <FontAwesomeIcon icon={faArrowRight} className="more-icon" />
        </div>
      </NavLink>
    </div>
  );
};

export default Projects;
