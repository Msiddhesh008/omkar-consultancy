import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import { useState, useEffect } from "react";

function App() {
  
  // ====[ scrollBar ]====
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100; 

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div className="App ">
      
    <div id="scrollWrap" >
      <div id="scrollBar" style={{ width: `${scrollTop}%` }}></div>
    </div>

    <div className="call d-block d-md-none d-lg-none">
      <Link to="tel:+919730582892" className="callIcon"><p>Call Now</p></Link>
    </div>
    
      <Navbar />
      <Routes>
        <Route path="/omkar-consultancy" element={ <Home /> } />

      </Routes>
      
    </div>
  );
}

export default App;
