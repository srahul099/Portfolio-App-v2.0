import React from "react";
import { useNavigate } from "react-router-dom";
import HMI from "../../common/images/banners/HMI.png";
import hmifont1 from "../../common/images/hmifont-1.png";
import hmifont2 from "../../common/images/hmifont-2.png";
import hmicolors from "../../common/images/hmicolors.png";
import hmicolorsdesk from "../../common/images/hmicolorsdesk.png";
import hmiicons from "../../common/images/Indicator.png";
import hmiconsmobile from "../../common/images/Indicatormob.png";
import screen1 from "../../common/images/hmi-screen-1.png";
import screen2 from "../../common/images/hmi-screen-2.png";
import screen3 from "../../common/images/hmi-screen-3.png";
import screen4 from "../../common/images/hmi-screen-4.png";
import screen5 from "../../common/images/hmi-screen-5.png";
import screen6 from "../../common/images/hmi-screen-6.png";

import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBehance, faFigma } from "@fortawesome/free-brands-svg-icons";
import "./hmi.css";
const InstrumentCluster = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={HMI} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">Instrument Cluster Design</h1>
          <p className="project_Type">Ui Design</p>
          <p className="project_Short_Description">
            This project showcases a Human-Machine Interface (HMI) design
            concept tailored to enhance the modern driving experience. The
            design focuses on clarity, functionality, and aesthetics, ensuring
            an intuitive user experience.
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
              href="https://www.figma.com/community/file/1441377587450293029/instrument-cluster-hmi-design"
              className="Buttons"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFigma} />
              Design File
            </a>
            <a
              href="https://www.behance.net/gallery/212971763/Instrument-Cluster-HMI-Design"
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
        <div className="description_image">
          <div className="hmi-container">
            <h2 className="hmi-heading">Overview</h2>
            <p className="hmi-desc">
              This project showcases a Human-Machine Interface (HMI) design
              concept tailored to enhance the modern driving experience. While
              the Kia Sonet served as an inspiration for gaining basic
              knowledge, this design is not built specifically for it but rather
              aims to deliver a universal and futuristic approach to vehicle
              dashboards. The design focuses on clarity, functionality, and
              aesthetics, ensuring an intuitive user experience.
            </p>
          </div>
          <div className="hmi-row hmi-container">
            <div className="hmi-fonts">
              <h2 className="hmi-heading">Typography</h2>
              <img src={hmifont1} alt="" className="hmi-img-grid" />
              <img src={hmifont2} alt="" className="hmi-img-grid" />
            </div>
            <div className="hmi-colors">
              <h2 className="hmi-heading">Colors</h2>
              <img src={hmicolorsdesk} alt="" className="hmi-img hmi-desk" />
              <img src={hmicolors} alt="" className="hmi-img hmi-mobile" />
            </div>
            <div className="hmi-icons">
              <h2 className="hmi-heading">Iconography</h2>
              <img src={hmiicons} alt="" className="hmi-icon-img hmi-desk" />
              <img
                src={hmiconsmobile}
                alt=""
                className="hmi-icon-img hmi-mobile"
              />
            </div>
          </div>
          <div className="hmi-screen-grid">
            <img src={screen1} alt="" className="hmi-icon-img" />
            <img src={screen2} alt="" className="hmi-icon-img" />
            <img src={screen3} alt="" className="hmi-icon-img" />
            <img src={screen4} alt="" className="hmi-icon-img" />
            <img src={screen5} alt="" className="hmi-icon-img" />
            <img src={screen6} alt="" className="hmi-icon-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstrumentCluster;
