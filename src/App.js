import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <Homepage />
    </div>
  );
}

export default App;
