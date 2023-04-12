import React from 'react'
import Banner from '../Components/Banner'
import About from '../Components/About'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'
import Team from '../Components/Team'
import Contact from '../Components/Contact'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'


function Home(){
  return (
    <div>
        <Banner />
        <About />
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