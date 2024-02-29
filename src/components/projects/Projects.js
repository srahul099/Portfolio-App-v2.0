import React from "react";
import "./projects.css";
const Projects = () => {
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="projects">
        <div className="project-container">
          <img
            src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="project-image"
          />
          <div className="project-desc">
            <h2>Weather App</h2>
            <p>
              Developed a full-stack weather app using NodeJS/Express for
              server-side logic and ReactJS/Handlebars for interactive frontend,
              delivering real-time weather data.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,nodejs,express"
              alt="tech stack"
              className="project-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <div className="project-container">
          <img
            src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="project-image"
          />
          <div className="project-desc">
            <h2>To-Do app</h2>
            <p>
              Developed a responsive Todo List web app using ReactJS for
              enhanced user interaction , with Firebase for real-time data
              management and synchronization.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,materialui,firebase"
              alt="tech stack"
              className="project-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <div className="project-container">
          <img
            src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="project-image"
          />
          <div className="project-desc">
            <h2>Cred Clone</h2>
            <p>
              Crafted a responsive CRED Landing Page clone using ReactJS for
              modularity and interactivity, styled with CSS to match the
              original design.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,css"
              alt="tech stack"
              className="project-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <div className="project-container">
          <img
            src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="project-image"
          />
          <div className="project-desc">
            <h2>User Aunthentication System</h2>
            <p>
              Developed a cross-platform authentication system using Qt Creator
              (QML/C++) for streamlined user experience across desktop, mobile,
              and web.
            </p>
            <img
              src="https://skillicons.dev/icons?i=qt,cpp"
              alt="tech stack"
              className="project-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
