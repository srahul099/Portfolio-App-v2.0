import React from "react";
import { useNavigate } from "react-router-dom";
import weatherappbanner from "../../common/images/banners/Weather-banner.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const WeatherappPrjDesc = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={weatherappbanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">Weather App</h1>
          <p className="project_Type">Full-Stack</p>
          <p className="project_Short_Description">
            This application is designed to provide real-time weather
            information. It fetches data from the Weather API and presents it to
            the user.
          </p>
          <div className="project_Techstack">
            <h3 className="project_Techstack_heading">Tech Stack</h3>
            <img
              src="https://skillicons.dev/icons?i=html,css,javascript,nodejs,express"
              alt="tech stack"
              className="project_Techstack_icons"
            />
          </div>
          <div className="project_Buttons">
            <a
              href="https://rahul-weather-app.onrender.com"
              className="Buttons"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              Demo
            </a>
            <a
              href="https://github.com/srahul099/weather-website"
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
              <h4>Geocoding:</h4>
              <p>
                This is responsible for converting addresses into geographic
                coordinates (latitude and longitude). It uses the OpenCage
                Geocoding API to achieve this.
              </p>
            </li>
            <li>
              <h4>Weather Forecasting:</h4>
              <p>
                The application takes latitude and longitude as inputs and
                fetches the current weather data for that location. It uses the
                Weather API to get this data.
              </p>
            </li>
            <li>
              <h4>Web Server:</h4>
              <p>
                This acts the entry point of the application and sets up the web
                server using Express, a popular Node.js framework. It sets up
                static file serving using the express.static middleware, and
                sets up routes for the home page and the /weather endpoint. The
                /weather endpoint uses the geocode and forecast modules to fetch
                the weather data for a given address.
              </p>
            </li>
            <li>
              <h4>Data Presentation:</h4>
              <p>
                The application presents the weather data in a user-friendly
                format. It provides information about the current temperature
                (in Celsius), the weather condition (like sunny, cloudy, etc.),
                and the precipitation in millimeters.
              </p>
            </li>
          </ul>
        </div>
        <h2>Libraries Used:</h2>
        <div className="description">
          <p>
            The application uses the express, path, and hbs libraries for
            setting up the web server, handling file paths, and rendering views
            respectively. It also uses the request library to make HTTP requests
            to the Weather API and OpenCage API.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherappPrjDesc;
