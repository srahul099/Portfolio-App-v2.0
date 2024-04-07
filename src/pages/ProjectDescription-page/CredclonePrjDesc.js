import React from "react";
import { useNavigate } from "react-router-dom";
import credclonebanner from "../../common/images/banners/Credclone-banner.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const CredclonePrjDesc = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={credclonebanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">Cred Clone</h1>
          <p className="project_Type">Frontend</p>
          <p className="project_Short_Description">
            This project is a clone of the CRED landing page, implemented using
            React.js. The goal of the project is to replicate the look, feel,
            and functionality of the original CRED landing page.
          </p>
          <div className="project_Techstack">
            <h3 className="project_Techstack_heading">Tech Stack</h3>
            <img
              src="https://skillicons.dev/icons?i=react,css,javascript"
              alt="tech stack"
              className="project_Techstack_icons"
            />
          </div>
          <div className="project_Buttons">
            <a
              href="https://cred-landing-page-clone.vercel.app"
              className="Buttons"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              Demo
            </a>
            <a
              href="https://github.com/srahul099/Cred_Landing-Page_Clone"
              className="Buttons"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="project_Longdesc">
        <h2>Main Features</h2>
        <div className="description">
          <ul>
            <li>
              <h4>Intersection Observer API:</h4>
              <p>
                The project is built using ReactThis API is used to detect when
                an element becomes visible in the viewport. It's used in the
                ScreenText.js file to control animations and image changes as
                the user scrolls through the page.
              </p>
            </li>
            <li>
              <h4>Animations:</h4>
              <p>
                The project uses animations to enhance the user experience.
                Animations are controlled by the Intersection Observer API and
                the state of the showanimation variable.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CredclonePrjDesc;
