import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="navbar">
      <div className="navbaritems">
        <a href="#">
          <h3 className="home">Home</h3>
        </a>
        <a href="#">
          <h3 className="about">About</h3>
        </a>
        <a href="#">
          <h3 className="projects">Projects</h3>
        </a>
        <a href="#">
          <h3 className="contact">Contact</h3>
        </a>
      </div>
    </div>
  );
};

export default Header;
