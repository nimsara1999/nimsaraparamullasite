import { useState } from "react";
import "./App.css";
import Home from "../pages/Home";
import Projects from "../pages/projects";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
      <Routes>
        {<Route path="/" element={<Home/>}/>}
        {<Route path="/Projects" element={<Projects/>}/>}
      </Routes>
      </Router>
    </div>
  );
}
export default App;
