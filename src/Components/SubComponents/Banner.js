import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = ({ title, p }) => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);


  return (
    
    <div id="banner" className='container-fluid'>
    <div className="container banner-wrapper mt-lg-5 mb-5 ">
    <div className="row h-100 banner-row">

    <div className="col-lg-12 col-12 h-100 epfo text-center">
    <h1 className='fw-bold' data-aos="fade-up" ><span className='heroText'><b>{title}</b></span></h1>
    <p 
    data-aos="fade-up"
    className='fs-5'>{p}</p>
    
      <Link to="https://wa.me/+919730582892?text=%20Hello%20Mrs.Vaibhavi%20More%20I%20want%20consultation%20on%20" 
      style={{textDecoration:"none"}}
      data-aos="fade-up"
      >
        <p className='heroBtn mx-auto' >Free Consulting</p></Link>
    </div>
    
    
    <div className="col-lg-4 banner-right-col d-none d-lg-flex ">
    
    </div>
    </div>
    </div>
   </div>
  )
}

export default Banner

