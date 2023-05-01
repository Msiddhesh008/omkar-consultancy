import React from 'react'

const DetailedCardEven = ({ h3, p, p2, p3, imgLink }) => {
  return (
    <>

    <div className="col-lg-3 col-12 m-4 d-none d-lg-flex justify-content-center flex-column align-items-center">
      <img src={imgLink} alt="team" width={200} />
    </div>
    <div data-aos="fade-up" className="col-lg-7 col-12 epfoCard p-4 m-4">
      <h3>{h3}</h3>

      <span className="mb-3 text-justify d-flex justify-content-center border-dark underline"></span>

      <span>
        {p}
        <br />
        {p2}
        <br />
        {p3}
      </span>
    </div>
    </>
  )
}

export default DetailedCardEven