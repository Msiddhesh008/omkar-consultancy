import React from 'react'

const Footer = () => {
  return (
    <>
    <div id="footer" className="container-fluid">
        <div className="container">
          <div className="row pt-5 ">
            
          <div className="col-lg-6 col-12 p-3 pb-lg-0 mb-5 footerLeft">
            <h4>About Us</h4>
            <span className='underline mb-4'></span>
            <p>Omkar Consultancy is best for providing 
              Online PF ESI Consultant for Registration and 
              Monthly Return Filling & PF Withdrawal for 
              individuals.</p>
              <form action="/">
              <h3>Please Enter your mobile number</h3>
              <input type="number" className='footerInput p-2 ps-3' placeholder='Mobile number'/>
              <button className='p-2 footerBtn'>Submit</button>
              </form>
          </div>

          <div className="col-lg-3 col-12 pb-lg-0 mb-5 footerCenter">
            <h4>About Us</h4>
            <span className='underline mb-4'></span>
            <p>PF ESI Consultant</p>
            <p>PF Withdrawal</p>
            <p>Contact Us</p>
            <p>ESI PF Registration</p>
            <p>Terms & Conditions</p>
            <p>Return & Refund Policy</p>  
          </div>

          <div className="col-lg-3 pb-lg-0 mb-5 col-12">
            <h4>Just Reach Us</h4>
            <span className='underline mb-4'></span>
            <h4>Location</h4>
            <p>Arihalt center shop No- 7, Shilphata, Khopoli, Raigad - 410 203</p>

            <h4>Contact</h4>
            <div className="contactWrapper d-flex">
              <b>Phone : </b>
              <p>+919892429530</p>
            </div>
            <div className="contactWrapper">
              <b>Mail Us : </b>
              <p>omkarc.1999@rediffmail.com</p>
            </div>
          </div>

          </div>
        </div>

    </div>
    

    <div className="bottomFooter container-fluid pt-1 pb-1">
    <div className='d-lg-block d-md-block d-none'>© 2023. All Rights Reserved.</div>
    <div>Made with❤️by Siddhesh More</div>
    <div className='d-lg-block d-md-block d-none'>Terms Of Use private policy</div>
  </div>
  </>
  )
}

export default Footer