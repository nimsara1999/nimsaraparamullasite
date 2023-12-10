import { useEffect, useState } from "react";
import "./App.css";
import Home from "../pages/Home";
import {Routes,Route, useLocation} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const {pathname} = useLocation() 
  
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);


  return (
    <div className="App">
      <Routes>
        {<Route path="/" element={<Home/>}/>}
      </Routes>
    </div>
  );
}
export default App;
