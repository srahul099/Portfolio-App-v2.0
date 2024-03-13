import React from "react";
import "./aboutpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFile } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import profilepicture from "../../common/images/ProfilePicture.jpg";
import { useNavigate } from "react-router-dom";
const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="aboutpage_Wrapper">
      <div className="go-back back-icon" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h2>Back</h2>
      </div>
      <div className="about_Wrapper">
        <div className="about_Heading_mobile">About</div>
        <div className="about_L">
          <img src={profilepicture} alt="" className="about_Image" />
          <div className="about_Buttons">
            <div className="resume_Download">
              <FontAwesomeIcon icon={faFile} />
              <p>Download Resume</p>
            </div>
            <div className="about_LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <div className="about_Github">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="about_Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
        <div className="about_R">
          <div className="about_Heading">About</div>
          <div className="about_Description">
            <p>
              Greetings! I'm Rahul, a third-year Computer Science student at SRM
              Institute of Science and Engineering. My passion lies in crafting
              user-centric experiences as a UI/UX designer and front-end
              developer. With a keen eye for detail and a love for clean code, I
              specialize in building high-performance websites and applications.
              My expertise spans HTML, CSS, JavaScript, React, Node.js, Tailwind
              CSS, QML, and C++. From concept to execution, I strive to create
              digital experiences that seamlessly blend functionality with
              aesthetics. My journey isn't just confined to coding. I bring a
              wealth of experience in graphic design and agile scrum
              methodologies, ensuring smooth integrations between design and
              development. Collaboration is at the heart of my approach, as I
              believe the best results emerge from teamwork and communication.
              Beyond the realm of technology, I find solace in creative
              pursuits. Photography allows me to capture moments and tell
              stories through my lens, while graphic design unleashes my
              creativity in the digital realm. And when I need to recharge,
              you'll often find me exploring new music, curating playlists, and
              immersing myself in melodies from diverse genres. So, whether
              you're seeking a skilled developer, a creative designer, or a
              collaborative team player, I'm here to bring your digital visions
              to life. Let's connect and embark on an exciting journey of
              innovation together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
