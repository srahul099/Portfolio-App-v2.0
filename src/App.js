import "./App.css";
import CustomCursor from "./components/CustomCursor";
import CustomCursorManager from "./components/CustomCursor/context/CustomCursorManager";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
function App() {
  return (
    <CustomCursorManager>
      <div className="App">
        <div className="customcursor-display">
          <CustomCursor />
        </div>
        <div className="Header">
          <Header />
        </div>
        <Homepage />
      </div>
    </CustomCursorManager>
  );
}

export default App;
