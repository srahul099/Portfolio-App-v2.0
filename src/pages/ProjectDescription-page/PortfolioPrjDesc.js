import React from "react";
import { useNavigate } from "react-router-dom";
import portfoliobanner from "../../common/images/banners/Portfolio-banner.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
const PortfolioPrjDesc = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={portfoliobanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">Portfolio</h1>
          <p className="project_Type">Frontend</p>
          <p className="project_Short_Description">
            This project is a portfolio website developed using React.js. The
            website is designed to showcase the user's skills, projects, and
            services. It features a modern and clean design with smooth
            navigation and responsive layout.
          </p>
          <div className="project_Techstack">
            <h3 className="project_Techstack_heading">Tech Stack</h3>
            <img
              src="https://skillicons.dev/icons?i=react,javascript,css,figma"
              alt="tech stack"
              className="project_Techstack_icons"
            />
          </div>
          <div className="project_Buttons">
            <a
              href="https://www.figma.com/community/file/1358720002349391000/portfolio"
              className="Buttons"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFigma} />
              Design File
            </a>
            <a
              href="https://github.com/srahul099/Portfolio-App-v2.0"
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
              <h4>Responsive Design:</h4>
              <p>
                The website is designed to be responsive, ensuring a seamless
                experience across various devices and screen sizes.
              </p>
            </li>
            <li>
              <h4>Modern UI/UX:</h4>
              <p>
                The website features a modern and clean user interface,
                providing a pleasant user experience. It uses a consistent color
                scheme and typography throughout the site.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPrjDesc;
