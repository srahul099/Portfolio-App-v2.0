import "./App.css";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Projectspage from "./pages/Projects-page/Projectspage";
import Homepage from "./pages/Home-page/Homepage";
import ProgressBar from "react-scroll-progress-bar";
import WeatherappPrjDesc from "./pages/ProjectDescription-page/WeatherappPrjDesc";
import CredclonePrjDesc from "./pages/ProjectDescription-page/CredclonePrjDesc";
import UserAuthenticationPrjDesc from "./pages/ProjectDescription-page/UserAunthenticationPrjDesc";
import PlaylistGeneratorPrjDesc from "./pages/ProjectDescription-page/PlaylistGeneratorPrjDesc";
import QrGeneratorPrjDesc from "./pages/ProjectDescription-page/QrGeneratorPrjDesc";
import AboutPage from "./pages/About-page/AboutPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Contactpage from "./pages/Contact-page/Contactpage";
import PortfolioPrjDesc from "./pages/ProjectDescription-page/PortfolioPrjDesc";
import IsroPrjDesc from "./pages/ProjectDescription-page/IsroPrjDesc";
import { Analytics } from "@vercel/analytics/react";
import Loader from "./components/Loader/Loader";
import GalleryPage from "./pages/Gallery-page/GalleryPage";
function App() {
  return (
    <div className="App">
      <div className="Screen_Small">
        <div>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            style={{ color: "#ffffff" }}
          />
        </div>
        <div>Display too small</div>
      </div>
      <div className="main_Screen">
        <ProgressBar bgcolor="var(--neon-green)" duration="0.8" />
        <div className="loader_Overlay">
          <Loader />
        </div>
        <Router>
          <div className="Header">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projectspage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/projects/weatherapp"
              element={<WeatherappPrjDesc />}
            />
            <Route path="/projects/credclone" element={<CredclonePrjDesc />} />
            <Route
              path="/projects/UserAuthentication"
              element={<UserAuthenticationPrjDesc />}
            />
            <Route
              path="/projects/PlaylistGenerator"
              element={<PlaylistGeneratorPrjDesc />}
            />
            <Route
              path="/projects/QrGenerator"
              element={<QrGeneratorPrjDesc />}
            />
            <Route
              path="/projects/Isrowebsiteredesign"
              element={<IsroPrjDesc />}
            />
            <Route path="/projects/Portfolio" element={<PortfolioPrjDesc />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contactpage />} />
          </Routes>
          <Footer />
        </Router>
        <SpeedInsights />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
