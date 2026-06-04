import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import General from "./pages/General";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Router>
      <div className={`application ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <General theme={theme} />
        <Home theme={theme} />
      </div>
    </Router>
  );
}

export default App;
