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
              I'm a Computer Science student at{" "}
              <span className="special">
                SRM Institute of Science and Technology
              </span>
              . My passion lies in building user-friendly solutions that enhance
              overall user experiences. I am currently focused on{" "}
              <span className="special">
                React Native, Expo, Firebase, and React
              </span>
              , leveraging these technologies to create responsive and
              functional applications. One of my ongoing projects is Rescue
              Paws, a mobile app designed to facilitate the rescue and adoption
              of stray and pet dogs. The app will soon be published on the{" "}
              <span className="special">Play Store and App Store</span>, and it
              incorporates AI-driven features to guide users through the
              adoption process. In addition to app development, I’ve led the
              design and development of platforms like the GitHub Community SRM
              website, which serves as an all-in-one platform for the community.
              I’ve also organized and managed events such as hackathons and
              workshops, mentoring others in UI/UX and graphic design. I thrive
              in <span className="special">Agile Scrum environments</span> and
              believe collaboration and teamwork are essential to delivering
              successful projects. I’m always eager to work on impactful
              projects that challenge me to grow while also contributing to
              meaningful outcomes. So, whether you're{" "}
              <span className="special">
                looking for a dedicated developer, a creative designer, or a
                collaborative team member
              </span>
              , I’m here to help bring ideas to life. Let’s connect and create
              innovative solutions together!
            </p>

            <div className="about_Buttons">
              <a
                href="https://drive.google.com/uc?export=download&id=1HxLmL7tG_DPDEVOVcbUqSO-Ob9W7NtZt"
                download="Rahul-Resume.pdf"
                aria-label="Download Resume"
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
