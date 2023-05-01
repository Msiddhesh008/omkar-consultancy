import React from 'react'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';

function FeatureCard({ link, title, disc, imgSize}) {
  return (
    
    <div 
    data-aos="fade-up" 
    style={{transition:"0.5s"}}
    className="col-4 featured-card pt-4 pb-4 ps-3 pe-3 text-center m-2">
        <img 
        src={link} alt="" width={imgSize} />
        <h3 className='mt-3'>{title}</h3>
        <p>{disc}</p>
        <Link to="/epfo" style={{textDecoration:"none"}}><p className='featuredCardBtn' >More Details</p></Link>
    
    </div>
  )
}

export default FeatureCard