import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../images/globalicon.jpg'
import 'aos/dist/aos.css';

const ServiceCard = ({ link, title, disc, aos}) => {


  return (
    
    <div 
    data-aos={`${aos}`} 
    style={{transition:"0.5s"}}
    className="col-4 service-card pt-4 pb-4 ps-3 pe-3 text-center m-2">
      <h3>Dummy Card</h3>
      <p>Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Dolore maiores voluptatibus 
        explicabo quisquam unde! In neque at amet velit </p>
      <img src={image} alt=""   className='service-img'/>
      <Link to="#" className='btn text-primary mt-1'>Read More</Link>
      
    </div>
  )
}

export default ServiceCard