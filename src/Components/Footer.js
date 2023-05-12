import React, { useState, useRef } from "react";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [emali, setEmail] = useState("");
  const [mobile, setMoblie] = useState("");
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6euwe01",
        "template_6q38agh",
        form.current,
        "JISQq4l30W0-Bskc7"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.error("We will get back to you soon.!", {
            theme: "dark",
            icon: false
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong", {
            theme: "colored",
          });
        }
      );
    setName("");
    setMoblie("");
    setEmail("");
  };

  
  return (
    <>
    <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
    />
      <div id="footer" className="container-fluid">
        <div className="container">
          <div className="row pt-5 ">
            <div className="col-lg-6 col-12 p-3 pb-lg-0 mb-5 footerLeft">
              <h4 data-aos="fade-up">About Us</h4>
              <span className="underline mb-4"></span>
              <p data-aos="fade-up">
                Omkar Consultancy is best for providing Online PF ESI Consultant
                for Registration and Monthly Return Filling & PF Withdrawal for
                individuals.
              </p>
            <form ref={form} onSubmit={submitHandler}>
              <h3>Lets Talk</h3>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="footerInput p-2 ps-3 m-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="footerInput p-2 ps-3 m-1"
                value={emali}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="tel"
                name="mobile"
                className="footerInput p-2 ps-3 m-1"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMoblie(e.target.value)}
              />

              
              <button 
              type="submit"
              className="p-2 m-1 footerBtn">Submit</button>
            </form>
              
            </div>

            <div className="col-lg-3 col-12 pb-lg-0 mb-5 footerCenter">
              <h4 data-aos="fade-up">About Us</h4>
              <span className="underline mb-4"></span>

              <Link className="footerLink" to="/esic">
                <p data-aos="fade-up">ESI Consultant</p>
              </Link>

              <Link className="footerLink" to="/epfo">
                <p data-aos="fade-up">PF Consultant</p>
              </Link>

              <Link className="footerLink" to="/taxgst">
                <p data-aos="fade-up">Income Tax & GST Consultant</p>
              </Link>

              <Link className="footerLink" to="/adhar">
                <p data-aos="fade-up">Adhaar Consultant</p>
              </Link>

              <Link className="footerLink" to="/pan">
                <p data-aos="fade-up">Pan Card Consultant</p>
              </Link>

              <Link className="footerLink" to="/labour">
                <p data-aos="fade-up">Labor License Consultant</p>
              </Link>

              <p data-aos="fade-up">Return & Refund Policy</p>
            </div>

            <div className="col-lg-3 pb-lg-0 mb-5 col-12">
              <h4 data-aos="fade-up">Just Reach Us</h4>
              <span className="underline mb-4"></span>
              <h4 data-aos="fade-up">Location</h4>
              <p data-aos="fade-up">
                Shop No 110, First Foloor, Sai Ganesh Building, Yashwant Nagar,
                Khopoli, Raigad - 410 203
              </p>

              <h4 data-aos="fade-up">Contact</h4>
              <div data-aos="fade-up" className="contactWrapper d-flex">
                <b>Phone : </b>
                <p> +919730582892 </p>
              </div>
              <div data-aos="fade-up" className="contactWrapper">
                <b>Mail Us : </b>
                <p>omkarc.1999@rediffmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottomFooter container-fluid pt-1 pb-1">
        <div className="d-lg-block d-md-block d-none">
          © 2023. All Rights Reserved.
        </div>
        <div>Made with❤️by Siddhesh More</div>
        <div className="d-lg-block d-md-block d-none">
          Terms Of Use private policy
        </div>
      </div>
    </>
  );
};

export default Footer;
