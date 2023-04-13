import React from 'react'
import gTag from '../../images/taggold.png'

function Belt() {
  return (
    <div className="row belt  text-center p-lg-5 pt-5 belt">
            <img src={gTag} alt=""  className='col-3 col-12 m-2'/>
            <div className='col-lg-6 col-12 mt-2'>
            <h1 className='fs-3'>The Best ESI PF Consultant - Omkar Consultancy offers many services!</h1>
            <p className='text-secondary fs-5'>As a ESI PF consultant, we provide PF & ESIC registration and monthly 
              return file, PF Withdrawal. Digital Signature Certificate / DSC Registration.</p>
            </div>
            <img src={gTag} alt=""  className='col-lg-3 col-12 m-2 d-none d-lg-block d-md-block'/>
    </div>
  )
}

export default Belt