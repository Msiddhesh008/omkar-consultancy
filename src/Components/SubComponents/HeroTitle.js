import React from 'react'

function HeroTitle({title, h2, p}) {
  return (
    <div className="col-12 text-center title-cnt mb-4">
    <h1 className='fw-bold '>{title}</h1>
    <span className='underline mb-4'></span>
    <h2>{h2}</h2>
    <p className='fs-5 ps-5 pe-5'>{p}</p>
    </div>
  )
}

export default HeroTitle