import React from "react";
import { useNavigate } from "react-router-dom";
import ISRObanner from "../../common/images/banners/ISRO-banner.png";
import ISROui from "../../common/images/ISRO Landing Page.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBehance, faFigma } from "@fortawesome/free-brands-svg-icons";
const IsroPrjDesc = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={ISRObanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">ISRO Website Redesign</h1>
          <p className="project_Type">Ui Design</p>
          <p className="project_Short_Description">
            This project is a clone of the CRED landing page, implemented using
            React.js. The goal of the project is to replicate the look, feel,
            and functionality of the original CRED landing page.
          </p>
          <div className="project_Techstack">
            <h3 className="project_Techstack_heading">Tech Stack</h3>
            <img
              src="https://skillicons.dev/icons?i=figma"
              alt="tech stack"
              className="project_Techstack_icons"
            />
          </div>
          <div className="project_Buttons">
            <a
              href="https://www.figma.com/community/file/1337096441279951189/isro-website-redesign"
              className="Buttons"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFigma} />
              Design File
            </a>
            <a
              href="https://www.behance.net/gallery/194096535/ISRO-Website-Redesign"
              className="Buttons"
              target="_blank"
            >
              <FontAwesomeIcon icon={faBehance} />
              Behance
            </a>
          </div>
        </div>
      </div>
      <div className="project_Longdesc">
        <h2>Final Design</h2>
        <div className="description_image">
          <img src={ISROui} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IsroPrjDesc;
