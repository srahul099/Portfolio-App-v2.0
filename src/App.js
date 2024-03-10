import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Projectspage from "./pages/Projects-page/Projectspage";
import Homepage from "./pages/homepage/Homepage";
import ProgressBar from "react-scroll-progress-bar";
import WeatherappPrjDesc from "./pages/project-description-page/WeatherappPrjDesc";
import CredclonePrjDesc from "./pages/project-description-page/CredclonePrjDesc";
function App() {
  return (
    <div className="App">
      <ProgressBar bgcolor="var(--neon-green)" duration="0.8" />
      <Router>
        <div className="Header">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projectspage />} />
          <Route path="/projects/weatherapp" element={<WeatherappPrjDesc />} />
          <Route path="/projects/credclone" element={<CredclonePrjDesc />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
