import React from "react";
import HeroTitle from "./SubComponents/HeroTitle";
import shooting from "../images/shooting-target.png";
import eye from "../images/focus.png";
import "aos/dist/aos.css";
import { heroTitle } from "./Content/Content";

function About() {
  return (
    <div id="about" className="container-fluid ">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-lg-7 col-12 about-left mb-5 mb-lg-0">
            <HeroTitle
              textAlign={heroTitle.aboutUs.textAlign}
              title={heroTitle.aboutUs.title}
              h2={heroTitle.aboutUs.h2}
              underlineColor={heroTitle.aboutUs.underlineColor}
              p={heroTitle.aboutUs.p}
            />
            <div
              id="carouselExampleControls"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card-wrapper container-sm d-flex  justify-content-around">
                    <div
                      className="card text-light p-4 d-flex"
                      style={{ width: "100%" }}
                    >
                      <img src={eye} alt="" width={70} className="mb-2" />
                      <div>
                        <h1>Our Vision</h1>
                        <p>
                          There anyone who loves pursues desires to obtain pain
                          itself, becoaus it is pain but because occasionally
                          ute circumstances which toil and pain can procure
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="card-wrapper container-sm d-flex  justify-content-around">
                    <div
                      className="card text-light p-4 d-flex"
                      style={{ width: "100%" }}
                    >
                      <img src={shooting} alt="" width={70} className="mb-2" />
                      <div>
                        <h1>Our Vision</h1>
                        <p>
                          There anyone who loves pursues desires to obtain pain
                          itself, becoaus it is pain but because occasionally
                          ute circumstances which toil and pain can procure
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev text-white"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                ></button>
                <button
                  className="carousel-control-next text-white"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                ></button>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="col-12 col-lg-5 bg-white about-right overflow-hidden"
          >
            {/* <img src={banner} alt="" width={500}/> */}
            <div className="namecnt">
              <h2 className="name ">MRS. VAIBHAVI MORE</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
