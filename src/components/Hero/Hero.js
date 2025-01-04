import React from "react";
import "./hero.css";
import github from "../../common/images/github.png";
import linkedin from "../../common/images/linkedin.png";
import Heroanim from "../../Animations/Heroanim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="heroitems">
      <div className="infinitescroll">
        <Heroanim />
      </div>
      <div className="desc">
        <p className="line1">Hey There I'm</p>
        <h1 className="name">RAHUL</h1>
        <p className="line2">
          Fullstack Developer and <br></br>UI Designer based in India
        </p>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/rahul-s-a5a375252/"
            target={"_blank"}
          >
            <img src={linkedin} alt="Linkedinacc" className="linkedinacc" />
          </a>
          <a href="https://github.com/srahul099" target={"_blank"}>
            <img src={github} alt="githubacc" className="githubacc" />
          </a>
        </div>
      </div>
      <FontAwesomeIcon icon={faAnglesDown} bounce className="arrow-Down" />
    </div>
  );
};

export default Hero;
