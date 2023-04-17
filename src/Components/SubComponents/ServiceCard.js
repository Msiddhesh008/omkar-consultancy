import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import image from '../../images/globalicon.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({ link, title, disc, aos}) => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, [])

  return (
    
    <div 
    data-aos={`${aos}`} 
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