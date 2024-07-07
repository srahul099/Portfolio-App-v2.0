import React from "react";
import "./aboutpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import profilepicture from "../../common/images/ProfilePicture.jpg";
import AboutCarousel from "./AboutCarousel";
import SocialLinks from "./SocialLinks";
const AboutPage = () => {
  document.title = "Portfolio | About";
  return (
    <div className="aboutpage_Wrapper">
      <div className="about_Wrapper">
        <div className="about_Heading">ABOUT</div>
        <div className="about_container">
          <div className="about_L">
            <img src={profilepicture} alt="" className="about_Image" />
          </div>
          <div className="about_R">
            <p>
              I'm Rahul, a fourth-year Computer Science student at{" "}
              <span className="special">
                SRM Institute of Science and Engineering
              </span>
              . My passion lies in crafting user-centric experiences as a UI/UX
              designer and front-end developer. With a keen eye for detail and a
              love for clean code, I specialize in building high-performance
              websites and applications. My expertise spans{" "}
              <span className="special">
                HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, QML, and
                C++
              </span>
              . From concept to execution, I strive to create digital
              experiences that seamlessly blend functionality with aesthetics.
              My journey isn't just confined to coding. I bring a wealth of{" "}
              <span className="special">
                experience in graphic design and agile scrum methodologies
              </span>
              , ensuring smooth integrations between design and development.
              Collaboration is at the heart of my approach, as I believe the
              best results emerge from teamwork and communication. Beyond the
              realm of technology, I find solace in creative pursuits.
              Photography allows me to capture moments and tell stories through
              my lens, while graphic design unleashes my creativity in the
              digital realm. And when I need to recharge, you'll often find me
              exploring new music, curating playlists, and immersing myself in
              melodies from diverse genres. So, whether you're{" "}
              <span className="special">
                seeking a skilled developer, a creative designer, or a
                collaborative team player
              </span>
              , I'm here to bring your digital visions to life. Let's connect
              and embark on an exciting journey of innovation together!
            </p>
            <div className="about_Buttons">
              <a
                href="https://drive.google.com/uc?export=download&id=1SAWQg0rKhkxOWiLXpyPyYTHl0M31ujGs"
                download="Rahul-Resume.pdf"
              >
                <div className="resume_Download">
                  <FontAwesomeIcon icon={faFile} />
                  <p>Download Resume</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="carousel_sociallinks_container">
          <AboutCarousel />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
