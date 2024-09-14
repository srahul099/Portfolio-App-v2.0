import React from "react";
import "./projects.css";

// banner imports
import userauthenticationbanner from "../../common/images/banners/UserAunthentication-banner.png";
import rescue from "../../common/images/banners/rescue-paws-banner.png";
import symptom from "../../common/images/banners/Symptom-banner.png";
import contgen from "../../common/images/banners/contgen-banner.png";
import expo from "../../common/images/expologo.png";
import portfoliobanner from "../../common/images/banners/Portfolio-banner.png";
import ISRObanner from "../../common/images/banners/ISRO-banner.png";
//banner imports end
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGear } from "@fortawesome/free-solid-svg-icons";
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
        <div className="projectpage-container">
          <img src={rescue} alt="" className="project-image" />
          <div className="projectpage-desc">
            <div className="prj-card-title">
              <div className="project-card-heading">
                <h2>Rescue Paws</h2>
                <div className="project_type">Mobile Application</div>
              </div>
              <div className="workInProgress">
                <p>Work in Progress</p>
                <FontAwesomeIcon icon={faGear} spin />
              </div>
            </div>
            <p className="proj__descrption">
              Currently Developing an app for animal rescue and adoption which
              will help in connecting dog lovers and the dogs in need.
            </p>
            <div className="techstack-edit">
              <img src={expo} alt="expo" className="expo" />
              <img
                src="https://skillicons.dev/icons?i=react,tailwindcss,javascript,firebase"
                alt="tech stack"
                className="projectpage-tech"
              />
            </div>
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <div className="projectpage-container">
          <img src={symptom} alt="" className="project-image" />
          <div className="projectpage-desc">
            <div className="prj-card-title">
              <div className="project-card-heading">
                <h2 className="warp-text">Symptom Checker</h2>
                <h2 className="warp-text mobile">Symptom</h2>
                <h2 className="warp-text mobile">Checker</h2>
                <div className="project_type">Full Stack</div>
              </div>
              <div className="workInProgress">
                <p>Work in Progress</p>
                <FontAwesomeIcon icon={faGear} spin />
              </div>
            </div>
            <p className="proj__descrption">
              Currently Developing an AI based Animal Symptom Checker which can
              be used for initial diagnosis of animals.
            </p>
            <img
              src="https://skillicons.dev/icons?i=nextjs,react,tailwindcss,javascript,firebase"
              alt="tech stack"
              className="projectpage-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <div className="projectpage-container">
          <img src={contgen} alt="" className="project-image" />
          <div className="projectpage-desc">
            <div className="prj-card-title">
              <div>
                <h2>ContGen</h2>
                <div className="project_type">Full Stack</div>
              </div>
              <div className="workInProgress">
                <p>Work in Progress</p>
                <FontAwesomeIcon icon={faGear} spin />
              </div>
            </div>
            <p className="proj__descrption">
              Currently Developing an AI based Content Generator which will be
              able to generate content for various domains like Blogging, Social
              Media, etc.
            </p>
            <img
              src="https://skillicons.dev/icons?i=nextjs,react,tailwindcss,typescript,firebase"
              alt="tech stack"
              className="projectpage-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        {/* <NavLink
          to="/projects/Portfolio"
          onClick={scrollToTop}
          className="projectpage-container"
        >
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
          </div>
        </NavLink>
        <NavLink
          to="/projects/Isrowebsiteredesign"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img src={ISRObanner} alt="" className="project-image" />
          <div className="project-desc">
            <h2>ISRO Website Redesign</h2>
            <div className="project_type">UI Design</div>
            <p>
              Revamped the whole ISRO website with a modern and clean design
              which emphasises the importance of ISRO's work and easily
              accesible information.
            </p>
            <img
              src="https://skillicons.dev/icons?i=figma"
              alt="tech stack"
              className="project-tech"
            />
          </div>
        </NavLink>
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
          </div>
        </NavLink> */}

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
    </div>
  );
};

export default Projects;
