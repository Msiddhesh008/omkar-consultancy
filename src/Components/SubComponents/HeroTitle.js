import React from 'react'

function HeroTitle({title, h2, p, textAlign}) {
  return (
    <div className={`col-12 ${textAlign} title-cnt mb-4`}>
    <h1 className='fw-bold '>{title}</h1>
    <span className='underline mb-4'></span>
    <h2>{h2}</h2>
    <p className='text-dark fs-5 '>{p}</p>
    </div>
  )
}

export default HeroTitle