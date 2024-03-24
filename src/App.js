import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Projectspage from "./pages/Projects-page/Projectspage";
import Homepage from "./pages/homepage/Homepage";
import ProgressBar from "react-scroll-progress-bar";
import WeatherappPrjDesc from "./pages/project-description-page/WeatherappPrjDesc";
import CredclonePrjDesc from "./pages/project-description-page/CredclonePrjDesc";
import UserAuthenticationPrjDesc from "./pages/project-description-page/UserAunthenticationPrjDesc";
import PlaylistGeneratorPrjDesc from "./pages/project-description-page/PlaylistGeneratorPrjDesc";
import QrGeneratorPrjDesc from "./pages/project-description-page/QrGeneratorPrjDesc";
import AboutPage from "./pages/aboutpage/AboutPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <ProgressBar bgcolor="var(--neon-green)" duration="0.8" />

      <Router>
        <div className="Header">
          <div className="work_in_progress">
            <p>
              This website is under development{" "}
              <FontAwesomeIcon icon={faGear} spin />
            </p>
          </div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projectspage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/weatherapp" element={<WeatherappPrjDesc />} />
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
        </Routes>
        <Footer />
      </Router>
      <SpeedInsights />
    </div>
  );
}

export default App;
