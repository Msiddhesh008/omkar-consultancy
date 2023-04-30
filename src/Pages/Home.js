import React from 'react'
import Banner from '../Components/Banner'
import Features from '../Components/Features'
import Belt from '../Components/SubComponents/Belt'
import About from '../Components/About'
import Services from '../Components/Services'
import Footer from '../Components/Footer'
import Working from '../Components/Working'
import Belt2 from '../Components/SubComponents/Belt2'


function Home(){
  return (
    <div>
        <Banner />
        <Features />
        <Belt />
        <About />
        <Working />
        <Belt2/>
        <Services />
        <Footer />
    </div>
  )
}

export default Home