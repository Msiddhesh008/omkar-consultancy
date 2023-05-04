import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const ServiceCard = ({ title, disc, link }) => {
  return (
    <div
      data-aos="fade-up"
      style={{ transition: "0.5s" }}
      className="col-4 service-card pt-4 pb-4 ps-4 pe-4 text-center m-2"
    >
      <h5>{title}</h5>
      <span>{disc}</span>
      <img src={link} alt="" className="service-img" />
      <Link
        to="https://wa.me/+919730582892?text=%20Hello%20Mrs.Vaibhavi%20More%20I%20want%20consultation%20on%20"
        className="btn text-primary mt-1"
      >
        For more details
      </Link>
    </div>
  );
};

export default ServiceCard;
