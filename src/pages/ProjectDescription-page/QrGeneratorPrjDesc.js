import React from "react";
import { useNavigate } from "react-router-dom";
import Qrgeneratorbanner from "../../common/images/banners/qrcodegenerator-banner.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const QrGeneratorPrjDesc = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={Qrgeneratorbanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">Qr Generator</h1>
          <p className="project_Type">Frontend</p>
          <p className="project_Short_Description">
            This project is a QR Code generator developed using JavaScript. It
            allows users to input a URL and generates a QR code for that URL.
            The application also provides functionality to clear the input and
            download the generated QR code.
          </p>
          <div className="project_Techstack">
            <h3 className="project_Techstack_heading">Tech Stack</h3>
            <img
              src="https://skillicons.dev/icons?i=html,css,javascript"
              alt="tech stack"
              className="project_Techstack_icons"
            />
          </div>
          <div className="project_Buttons">
            <a
              href="https://srahul099.github.io/qrcode-generator"
              className="Buttons"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              Demo
            </a>
            <a
              href="https://github.com/srahul099/qrcode-generator"
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
              <h4>QR Code Generation with Google Charts API:</h4>
              <p>
                The application uses the Google Charts API to generate QR codes.
                The API is accessed through a URL, and the input text is
                appended to this URL to generate the QR code. This feature
                allows the application to generate QR codes quickly and
                efficiently without the need for any external libraries.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QrGeneratorPrjDesc;
