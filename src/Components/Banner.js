import React from "react";
// import { Link } from "react-router-dom";
import ganesha from "../images/ganesha.png";
import "aos/dist/aos.css";
// import Typewriter from 'typewriter-effect';

const Banner = () => {
  //   const option = {
  //   strings: ['Provident Fund.', 'ESIC.', 'Icome Tax Return.'],
  //   autoStart: true,
  //   loop: true,
  // }

  return (
    <div id="banner" className="container-fluid">
      <div className="container banner-wrapper mt-lg-5 ">
        <div className="row h-100 banner-row">
          <div className="col-lg-8 col-12 h-100 banner-left-col">
            <h1 className="fw-bold" data-aos="fade-up">
              <span className="heroText">
                <b>Omkar Consultancy Service</b>
              </span>
            </h1>
            <p className="fs-4">
              We are one of the most efficient & renowned firms for providing
              the best Legal Advisory Services like
              <b> Provident Fund, Icome Tax Return.</b>
            </p>

            {/* <Typewriter options={option} /> */}
              <p 
              style={{
                width:"fit-content",
                fontSize:"1.5rem",
                border:"1.5px solid maroon"
              }}
              className="btn text-start fw-bold">Free Consulting</p>

            {/* <Link
              to="https://wa.me/+919730582892?text=%20Hello%20Mrs.Vaibhavi%20More%20I%20want%20consultation%20on%20"
              style={{ textDecoration: "none" }}
              data-aos="fade-up"
            >
              <p className="btn">Free Consulting</p>
            </Link> */}
          </div>

          <div className="col-lg-4 banner-right-col d-none d-lg-flex ">
            <img data-aos="fade-left" src={ganesha} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

//  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
//   <div class="carousel-indicators">
//   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
// </div>
// <div class="carousel-inner">
//   <div class="carousel-item active">
//   <img src="https://abcscprod.azureedge.net/abc-of-money/-/media/Project/ABCL/Internal_Images_526x230/526x230/PM/What_is_the_procedure_to_withdraw_PF_amount_526_230_M_PM_076.svg" class="d-block w-100" alt="..." />
//   </div>
//   <div class="carousel-item ">
//   <img src="https://images.unsplash.com/photo-1437572848259-df63caa1a552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="d-block w-100" alt="..." />
//   </div>
//   <div class="carousel-item">
//   <img src="https://images.unsplash.com/photo-1454418747937-bd95bb945625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="..." />
//   </div>
// </div>
// <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Previous</span>
// </button>
// <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//   <span class="carousel-control-next-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Next</span>
// </button>
//   </div>
