import React from 'react'
import HeroTitle from '../Components/SubComponents/HeroTitle'
import ServiceCard from './SubComponents/ServiceCard'
import { serviceRowOne, serviceRowTwo, serviceRowThree } from './Content/Content'



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
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">

              <div className="carousel-item  active">
                <div className="w-100 row mx-auto d-flex justify-content-center">


                  {serviceRowOne.map((eachEl, i) => {
                    return(<ServiceCard
                      key={i}
                      title= {eachEl.title}
                      disc={eachEl.disc}
                      link={eachEl.link}
                      />)
                  })}

                </div>
              </div>

              
              <div className="carousel-item ">
                <div className="w-100 row mx-auto   d-flex justify-content-center">

                {serviceRowTwo.map((eachEl, i) => {
                    return(<ServiceCard
                      key={i}
                      title= {eachEl.title}
                      disc={eachEl.disc}
                      link={eachEl.link}
                      />)
                  })}

                </div>
              </div>

              
              <div className="carousel-item">
                <div className="w-100 row mx-auto  d-flex justify-content-center">
                {serviceRowThree.map((eachEl, i) => {
                    return(<ServiceCard
                    key={i}
                      title= {eachEl.title}
                      disc={eachEl.disc}
                      link={eachEl.link}
                      />)
                  })}

                </div>
              </div>
            </div>
            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon text-primary" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
      </div>
      
    </div>
  )
}

export default Services