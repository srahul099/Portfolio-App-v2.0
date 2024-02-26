import React from "react";
import "./hero.css";
import github from "../../common/images/github.png";
import linkedin from "../../common/images/linkedin.png";
import Heroanim from "../../Animations/Heroanim";
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
          Currently Studying Computer Science and Engineering
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
    </div>
  );
};

export default Hero;
