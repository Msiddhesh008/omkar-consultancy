import React from 'react'
import FeatureCard from './SubComponents/FeatureCard'
import epfo from '../images/EPFO-Color.png'
import tax from '../images/income_tax.png'
import esic from '../images/ESIC-Color.png'
import HeroTitle from './SubComponents/HeroTitle'

const Features = () => {
  return (
      <div 
      id="features" 
      className="conatainer-fluid"
      >
        <div className="container">
          <div className="row pt-5 pb-5 features-row">

          <HeroTitle 
          textAlign="text-center"
          title="FEATURES"
          underlineColor="underline"
          h2="We offer many services to progress!"
          p="As a PF ESI consultant, We provide PF & ESIC registration and monthly return filling
          PF Withdrawal & Correction Services for Employees & Company."
          />

          <FeatureCard 
          imgSize={100}
          title="EPFO Consultant"
          link={epfo}
          disc="Best Provident Fund / PF Registration Consultant for company's. We provide Monthly PF Compliance / Return Filling"
          />
          <FeatureCard 
          imgSize={100}
          title="ESIC Consultant"
          link={esic}
          disc="Best ESIC Registration Consultant for company's. We provide Monthly ESI Return Filling Service & New Member Joining and Exit"
          />
          <FeatureCard 
          imgSize={150}
          title="Income Tax & GST Consultant"
          link={tax}
          disc="We are One of the Best Icome Tax Consultant in all over India. Provides GST Consulting Services too."
          />

          </div>


        </div>
      </div>
  )
}

export default Features