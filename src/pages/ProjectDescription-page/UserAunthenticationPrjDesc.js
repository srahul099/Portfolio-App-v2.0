import React from "react";
import { useNavigate } from "react-router-dom";
import userauthenticationbanner from "../../common/images/banners/UserAunthentication-banner.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const UserAuthenticationPrjDesc = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={userauthenticationbanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">User Authentication</h1>
          <p className="project_Type">Full-Stack</p>
          <p className="project_Short_Description">
            This is an authentication system which enables the user to login,
            sign up and change password.
          </p>
          <div className="project_Techstack">
            <h3 className="project_Techstack_heading">Tech Stack</h3>
            <img
              src="https://skillicons.dev/icons?i=qt,cpp,figma"
              alt="tech stack"
              className="project_Techstack_icons"
            />
          </div>
          <div className="project_Buttons">
            <div className="Buttons inactivebutton">
              <FontAwesomeIcon icon={faLaptopCode} />
              Demo
            </div>
            <a
              href="https://github.com/srahul099/User-Authertication-App"
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
              <h4>User Authentication:</h4>
              <p>
                The system provides a robust user authentication mechanism. It
                allows users to register, login, and manage their accounts
                securely.
              </p>
            </li>
            <li>
              <h4>QML Frontend:</h4>
              <p>
                The user interface of the system is built using QML, providing a
                modern and intuitive user experience.
              </p>
            </li>
            <li>
              <h4>C++ Backend:</h4>
              <p>
                The backend logic of the system is implemented in C++, ensuring
                high performance and efficiency.
              </p>
            </li>
            <li>
              <h4>CSV Data Storage:</h4>
              <p>
                The system uses CSV files for data storage, providing a simple
                and effective way to manage user data.
              </p>
            </li>
          </ul>
        </div>
        <h2>Libraries Used:</h2>
        <div className="description">
          <h4>QML: </h4>
          <p>
            A user interface markup language. It is a declarative language for
            designing user interface–centric applications. It is used for
            handling both static and dynamic layouts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserAuthenticationPrjDesc;
