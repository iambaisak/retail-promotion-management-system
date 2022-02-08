import "./App.css";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./components/pages/Calendar";
import Visualization from "./components/pages/Visualization";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/visualization" element={<Visualization />} />
      </Routes>
    </Router>
  );
}

export default App;
