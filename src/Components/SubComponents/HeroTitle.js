import React from 'react'
import 'aos/dist/aos.css';

function HeroTitle({title, h2, p, textAlign, underlineColor}) {
  return (
    <div 
    data-aos="fade-up" 
    className={`heroTitle col-12 ${textAlign} title-cnt mb-4`}
    >
    <h1 
    data-aos="fade-up" 
    className='fw-bold '>{title}</h1>
    <span className={`${underlineColor} mb-4`}></span>
    <h2
    data-aos="fade-up" >{h2}</h2>
    <p 
    data-aos="fade-up" 
    className=' fs-5 '>{p}</p>
    </div>
  )
}

export default HeroTitle