import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Data from "./Components/Data";
import PredictedData from "./Components/PredictedData";
import PastData from "./Components/PastData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/data" element={<Data />} />
        <Route exact path="/predata" element={<PredictedData />} />
        <Route exact path="/pastdata" element={<PastData />} />
      </Routes>
    </div>
  );
}

export default App;
