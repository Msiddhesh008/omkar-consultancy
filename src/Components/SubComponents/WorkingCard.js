import React from 'react'
import 'aos/dist/aos.css';

function WorkingCard({link, h5, p, aos}) {
  return (
    
    <div 
    data-aos={`${aos}`} 
    className="col-3 worlCard p-3">
    <div className="iconHolder">
    <img src={link} alt="" width={100}/>
    </div>
    <h5 className='fw-bold text-dark'>{h5}</h5>
    <p className='text-secondary fw-bold work-p'>{p}</p>
    </div>
  )
}

export default WorkingCard