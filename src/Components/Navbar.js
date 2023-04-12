import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
  <>
    <div id="navbar">
    <nav className="navbar navbar-expand-lg fixed-top mt-1 nav-menu">
      <div className="container-fluid">
        <Link className="navbar-brand text-light " to="#">
          <span className="h1 fw-bold logoText ">Omkar</span>
          <span className="h1 iconStyle logoText">Consultancy</span>
        </Link>
        <button
          className="navbar-toggler nav-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="bg-light line1"></div>
          <div className="bg-light line2"></div>
          <div className="bg-light line3"></div>
        </button>
      </div>

      <div
        className="collapse navbar-collapse text-uppercase fw-bold text-light text-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className="nav-link text-light m-2 menu-item"
              aria-current="page"
              to="#home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-light m-2 menu-item"
              aria-current="page"
              to="#aboutus"
            >
              AboutUS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-light m-2 menu-item"
              aria-current="page"
              to="#services"
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-light m-2 menu-item"
              aria-current="page"
              to="#team"
            >
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-light m-2 menu-item"
              aria-current="page"
              to="#testimonial"
            >
              Testimonial
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-light m-2 menu-item"
              aria-current="page"
              to="#blog"
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-light m-2 menu-item"
              aria-current="page"
              to="#FAQ"
            >
              FAQ's
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-light m-2 menu-item"
              aria-current="page"
              to="#contacts"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  </>


  );
};

export default Navbar;