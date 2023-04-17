import React from 'react'
import  { Link } from 'react-router-dom'
import 'aos/dist/aos.css';

const Belt2 = () => {
  return (
    <div id='belt2'>
        <div className="conatuner-fluid">
            <div className="container belt2Cnt">
                <div className="row belt2row">

                <div
                  data-aos="fade-right" className="belt2Card col-lg-8 col-12 p-5">
                   <h1 className='fw-bold'>Who Are You?</h1>
                   <p className='fw-normal'>We are most stop solution such as esi/pf 
                    registration and monthly return filling out 
                    sourcing. Omkar consultancy is a professional 
                    company which is having vast experience in the 
                    field of esic , epf : PF ESI Consultant</p>
                    <Link className='text-white fw-bold' to="#" style={{textDecoration:"none"}} >Free Cousultation <i class="bi bi-arrow-right"></i></Link>
                </div>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Belt2