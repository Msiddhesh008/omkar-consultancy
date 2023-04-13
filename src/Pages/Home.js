import React from 'react'
import Banner from '../Components/Banner'
import Features from '../Components/Features'
import Belt from '../Components/SubComponents/Belt'
import About from '../Components/About'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'
import Team from '../Components/Team'
import Contact from '../Components/Contact'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'
import Working from '../Components/Working'


function Home(){
  return (
    <div>
        <Banner />
        <Features />
        <Belt />
        <About />
        <Working />
        <Services />
        <Testimonials />
        <Team />
        <Contact />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Home