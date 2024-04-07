import React from "react";
import { useNavigate } from "react-router-dom";
import playlistgeneratorbanner from "../../common/images/banners/playlistgenerator-banner.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const PlaylistGeneratorPrjDesc = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={playlistgeneratorbanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">Playlist Generator</h1>
          <p className="project_Type">Frontend</p>
          <p className="project_Short_Description">
            This is a simple Spotify playlist generator implemented in
            JavaScript. The script contains an array of Spotify playlist URLs.
            When the button on the webpage is clicked, the script selects a
            random playlist from the array and opens it in a new browser tab.
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
              href="https://srahul099.github.io/playlistgenerator.github.io"
              className="Buttons"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              Demo
            </a>
            <a
              href="https://github.com/srahul099/playlistgenerator.github.io"
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
              <h4>Random Playlist Selection:</h4>
              <p>
                The application contains an array of Spotify playlist URLs. When
                the user interacts with the application, it selects a random
                playlist from this array.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistGeneratorPrjDesc;
