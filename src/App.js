import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
function App() {
  return (
    <div className="App">
      <div className="customcursor-display"></div>
      <div className="Header">
        <Header />
      </div>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
