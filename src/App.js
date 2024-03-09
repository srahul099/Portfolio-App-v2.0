import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Projectspage from "./pages/Projects-page/Projectspage";
import Homepage from "./pages/homepage/Homepage";
import ProgressBar from "react-scroll-progress-bar";
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
