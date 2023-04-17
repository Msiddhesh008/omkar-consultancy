import React from 'react'
import HeroTitle from '../Components/SubComponents/HeroTitle'
import epfo from "../images/globalicon.jpg"
import ServiceCard from './SubComponents/ServiceCard'


const Services = () => {
  return (
    <div id='service' className='container-fluid'>
      <div className="container pt-5 pb-5">
        <div className="row pt-5">
          <div className='col-12 pt-5'>
        <HeroTitle 
            textAlign="text-center"
            title="OUR SERVICES"
            h2="We Offer Services"
            underlineColor="underlineDake"
            />
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">

              <div class="carousel-item  active">
                <div className="w-100 row mx-auto d-flex justify-content-center">

                      <ServiceCard
                      aos="fade-up" />

                      <ServiceCard
                      aos="fade-up" />

                      <ServiceCard
                      aos="fade-up" />

                </div>
              </div>

              
              <div class="carousel-item ">
                <div className="w-100 row mx-auto   d-flex justify-content-center">

                      <ServiceCard
                      aos="fade-up"/>

                      <ServiceCard
                      aos="fade-up" />

                      <ServiceCard
                      aos="fade-up" />

                </div>
              </div>

              
              <div class="carousel-item">
                <div className="w-100 row mx-auto  d-flex justify-content-center">

                      <ServiceCard
                      aos="fade-up" />

                      <ServiceCard
                      aos="fade-up" />

                      <ServiceCard
                      aos="fade-up" />

                </div>
              </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon text-primary" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </div>
      </div>
      
    </div>
  )
}

export default Services