import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import ProgressBar from "react-scroll-progress-bar";
function App() {
  return (
    <div className="App">
      <ProgressBar bgcolor="var(--neon-green)" duration="0.8" />
      <div className="Header">
        <Header />
      </div>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
