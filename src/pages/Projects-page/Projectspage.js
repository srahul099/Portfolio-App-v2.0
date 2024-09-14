import React, { useEffect, useRef } from "react";
import "./projectspage.css";
import weatherbanner from "../../common/images/banners/Weather-banner.png";
import userauthenticationbanner from "../../common/images/banners/UserAunthentication-banner.png";
import credclonebanner from "../../common/images/banners/Credclone-banner.png";
import inprogressbanner from "../../common/images/banners/inprogress-banner.png";
import portfoliobanner from "../../common/images/banners/Portfolio-banner.png";
import qrcodegeneratorbanner from "../../common/images/banners/qrcodegenerator-banner.png";
import playlistgeneratorbanner from "../../common/images/banners/playlistgenerator-banner.png";
import ISRObanner from "../../common/images/banners/ISRO-banner.png";
import rescue from "../../common/images/banners/rescue-paws-banner.png";
import symptom from "../../common/images/banners/Symptom-banner.png";
import contgen from "../../common/images/banners/contgen-banner.png";
import expo from "../../common/images/expologo.png";
import { NavLink } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  document.title = "Portfolio | Projects";
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
        <h1>PROJECTS</h1>
      </div>
      <div className="projectspage">
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
        <NavLink
          to="/projects/Portfolio"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img src={portfoliobanner} alt="" className="projectpage-image" />
          <div className="projectpage-desc">
            <h2>Portfolio</h2>
            <p className="project_type">Frontend</p>
            <p className="proj__descrption">
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
        </NavLink>
        <NavLink
          to="/projects/Isrowebsiteredesign"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img src={ISRObanner} alt="" className="project-image" />
          <div className="projectpage-desc">
            <h2>ISRO Website Redesign</h2>
            <div className="project_type">UI Design</div>
            <p className="proj__descrption">
              Revamped the whole ISRO website with a modern and clean design
              which emphasises the importance of ISRO's work and easily
              accesible information.
            </p>
            <img
              src="https://skillicons.dev/icons?i=figma"
              alt="tech stack"
              className="projectpage-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </NavLink>
        <NavLink
          to="/projects/weatherapp"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img src={weatherbanner} alt="" className="projectpage-image" />
          <div className="projectpage-desc">
            <h2>Weather App</h2>
            <p className="project_type">Full Stack</p>
            <p className="proj__descrption">
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

        <NavLink
          to="/projects/credclone"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img src={credclonebanner} alt="" className="projectpage-image" />
          <div className="projectpage-desc">
            <h2>Cred Clone</h2>
            <p className="project_type">Frontend</p>
            <p className="proj__descrption">
              Crafted a responsive CRED Landing Page clone using ReactJS for
              modularity and interactivity, styled with CSS to match the
              original design.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,javascript,css"
              alt="tech stack"
              className="projectpage-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </NavLink>
        <NavLink
          to="/projects/UserAuthentication"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img
            src={userauthenticationbanner}
            alt=""
            className="projectpage-image"
          />
          <div className="projectpage-desc">
            <h2>User Aunthentication System</h2>
            <p className="project_type">Full Stack</p>
            <p className="proj__descrption">
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
        </NavLink>
        <NavLink
          to="/projects/QrGenerator"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img
            src={qrcodegeneratorbanner}
            alt=""
            className="projectpage-image"
          />
          <div className="projectpage-desc">
            <h2>QR Code Generator</h2>
            <p className="project_type">Frontend</p>
            <p className="proj__descrption">
              Developed a simple QR code generator using HTML, CSS, and
              Javascript which takes a user input and generates a QR code for it
              using google charts API.
            </p>
            <img
              src="https://skillicons.dev/icons?i=html,css,javascript"
              alt="tech stack"
              className="projectpage-tech"
            />
          </div>
        </NavLink>
        <NavLink
          to="/projects/PlaylistGenerator"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img
            src={playlistgeneratorbanner}
            alt=""
            className="projectpage-image"
          />
          <div className="projectpage-desc">
            <h2>Playlist Generator</h2>
            <p className="project_type">Frontend</p>
            <p className="proj__descrption">
              Developed a simple spotify playlist generator implemented using
              HTML,CSS and Javascript. It selects a random playlist from the
              array and opens it in a new browser tab.
            </p>
            <img
              src="https://skillicons.dev/icons?i=html,css,javascript"
              alt="tech stack"
              className="projectpage-tech"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Projects;
