import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import General from "./pages/General";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ChakraProvider>
      <Router>
        <div className={`container ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <General theme={theme} setTheme={setTheme} />
          <Home />
        </div>
        <Routes>
          <Route path="/" element={""} />
          <Route path="/about" element={""} />
          <Route path="/projects" element={""} />
          <Route path="/" element={""} />
          <Route path="/technologies" element={""} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
