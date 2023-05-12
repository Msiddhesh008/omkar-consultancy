import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
// import logo from "../images/logo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashLink } from 'react-router-hash-link';




const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, [])

  
  const navScrollBackground = () => {
    if (window.scrollY >= 4 || burger) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", navScrollBackground);


  return (
    <>
      <div id="navbar" className="fixed-top mt-lg-1">
        <div className="navtop p-1 ps-3 pe-3">
          <span className="d-lg-block d-mg-block d-none">
            <i class="bi bi-check-square-fill"></i> Wellcome to EPF & ESIC
            Consultancy Mentor!
          </span>
          {/* <span className="d-lg-block d-mg-block d-none fw-bold">
            || श्री उत्तरेश्वर प्रसन्न ||
          </span> */}
          <span>
            <i class="bi bi-geo-alt-fill"></i> Shilphata, Khopoli, Raigad - 410
            203
          </span>
        </div>
        <nav className={
          navbar
          ? "navbar navbar-expand-lg  nav-menu active"
          : "navbar navbar-expand-lg  nav-menu" }>
          <div className="container-fluid">
            <Link className="navbar-brand text-light " to="/omkar-consultancy">
              <span className="h1 fs-1 fw-bold logoText ">O</span>
              <span className="h1 fs-1 iconStyle logoText">C</span>
              {/* <img className="logo" src={logo} alt="" width={100} /> */}
            </Link>
            <i
              className={
                burger 
                ? "navbar-toggler nav-button change"
                : "navbar-toggler nav-button "}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setBurger(!burger)}
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
                <HashLink
                  
                  className="nav-link text-light m-2 menu-item"
                  aria-current="page"
                  to="/omkar-consultancy#banner"
                >
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link text-light m-2 menu-item"
                  aria-current="page"
                  to="/omkar-consultancy#belt"
                >
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link text-light m-2 menu-item"
                  aria-current="page"
                  to="#service"
                >
                  Services
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link text-light m-2 menu-item"
                  aria-current="page"
                  to="#footer"
                >
                  CONTACT
                </HashLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
