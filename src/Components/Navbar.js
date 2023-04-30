import React from "react";
import { Link } from "react-router-dom";
// import logo from "../images/logo.png"




const Navbar = () => {
  return (
    <>
      <div id="navbar" className="fixed-top mt-lg-1">
        <div className="navtop pt-1 pb-1">
          <span className="d-lg-block d-mg-block d-none">
            <i class="bi bi-check-square-fill"></i> Wellcome to EPF & ESIC
            Consultancy Mentor!
          </span>
          <span className="d-lg-block d-mg-block d-none fw-bold">
            || श्री उत्तरेश्वर प्रसन्न ||
          </span>
          <span>
            <i class="bi bi-geo-alt-fill"></i> Shilphata, Khopoli, Raigad - 410
            203
          </span>
        </div>
        <nav className="navbar navbar-expand-lg  nav-menu">
          <div className="container-fluid">
            <Link className="navbar-brand text-light " to="#">
              <span className="h1 fw-bold logoText ">Omkar</span>
              <span className="h1 iconStyle logoText">Consultancy</span>
              {/* <img className="logo" src={logo} alt="" width={100} /> */}
            </Link>
            <i
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
            </i>
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
                  About
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
