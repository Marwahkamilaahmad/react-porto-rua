import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/about" element={""} />
        <Route path="/projects" element={""} />
        <Route path="/" element={""} />
        <Route path="/technologies" element={""} />
      </Routes>
    </Router>
  );
}

export default App;
