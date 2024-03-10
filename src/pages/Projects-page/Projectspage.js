import React, { useEffect, useRef } from "react";
import "./projectspage.css";
import weatherbanner from "../../common/images/banners/Weather-banner.png";
import userauthenticationbanner from "../../common/images/banners/UserAunthentication-banner.png";
import credclonebanner from "../../common/images/banners/Credclone-banner.png";
import inprogressbanner from "../../common/images/banners/inprogress-banner.png";
import portfoliobanner from "../../common/images/banners/Portfolio-banner.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";
const Projects = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const playerRef = useRef(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);
  return (
    <div className="projectspage-section">
      <div className="projectspage-heading">
        <div className="go-back back-icon" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <h2>Back</h2>
        </div>

        <h1>Projects</h1>
      </div>
      <div className="projectspage">
        <div className="projectpage-container">
          <img src={portfoliobanner} alt="" className="projectpage-image" />
          <div className="projectpage-desc">
            <h2>Portfolio</h2>
            <p>
              Developed to showcase my skills in web development, my portfolio
              website exemplifies proficiency in technologies such as ReactJS,
              CSS, and Figma.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,javascript,css,figma"
              alt="tech stack"
              className="projectpage-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <NavLink
          to="/projects/weatherapp"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img src={weatherbanner} alt="" className="projectpage-image" />
          <div className="projectpage-desc">
            <h2>Weather App</h2>
            <p>
              Developed a full-stack weather app using NodeJS/Express for
              server-side logic and ReactJS/Handlebars for interactive frontend,
              delivering real-time weather data.
            </p>
            <img
              src="https://skillicons.dev/icons?i=html,css,javascript,nodejs,express"
              alt="tech stack"
              className="projectpage-tech"
            />
          </div>
        </NavLink>
        <div className="projectpage-container">
          <img src={inprogressbanner} alt="" className="projectpage-image" />
          <div className="projectpage-desc">
            <h2>To-Do app</h2>
            <p>
              Developed a responsive Todo List web app using ReactJS for
              enhanced user interaction , with Firebase for real-time data
              management and synchronization.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,materialui,firebase"
              alt="tech stack"
              className="projectpage-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <NavLink
          to="/projects/credclone"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img src={credclonebanner} alt="" className="projectpage-image" />
          <div className="projectpage-desc">
            <h2>Cred Clone</h2>
            <p>
              Crafted a responsive CRED Landing Page clone using ReactJS for
              modularity and interactivity, styled with CSS to match the
              original design.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,css"
              alt="tech stack"
              className="projectpage-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </NavLink>
        <div className="projectpage-container">
          <img
            src={userauthenticationbanner}
            alt=""
            className="projectpage-image"
          />
          <div className="projectpage-desc">
            <h2>User Aunthentication System</h2>
            <p>
              Developed a cross-platform authentication system using Qt Creator
              (QML/C++) for streamlined user experience across desktop, mobile,
              and web.
            </p>
            <img
              src="https://skillicons.dev/icons?i=qt,figma,cpp"
              alt="tech stack"
              className="projectpage-tech"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
