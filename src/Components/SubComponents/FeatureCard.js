import React from 'react'
import { Link } from 'react-router-dom'

function FeatureCard({ link, title, disc}) {
  return (
    
    <div className="col-4 featured-card pt-4 pb-4 ps-3 pe-3 text-center m-2">
        <img src={link} alt="" width={100} />
        <h3 className='mt-3'>{title}</h3>
        <p>{disc}</p>
        <Link to="#" style={{textDecoration:"none"}}><p className='btn btn-danger' >More Details</p></Link>
    
    </div>
  )
}

export default FeatureCard