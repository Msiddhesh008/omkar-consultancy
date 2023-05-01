import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import { useState, useEffect } from "react";
import FloatButton from "./Components/SubComponents/FloatButton";
import EPFO from "./Pages/EPFO";
import ScrollToTop from "./Components/ScrollToTop";



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

    <div id="google_element" className="google_element" ></div>

    <FloatButton />

    {/* <div className="call d-block d-md-none d-lg-none">
      <Link to="tel:+919730582892" className="callIcon"><p>Call Now</p></Link>
    </div> */}


    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/omkar-consultancy" element={ <Home /> } />
        <Route path="/epfo" element={ <EPFO /> } />

      </Routes>
    </div>
  );
}

export default App;
