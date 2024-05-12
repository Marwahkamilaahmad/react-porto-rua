import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
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
