import React from 'react'
import FeatureCard from './SubComponents/FeatureCard'
import epfo from '../images/EPFO-Color.png'
import esic from '../images/ESIC-Color.png'
import HeroTitle from './SubComponents/HeroTitle'

const Features = () => {
  return (
      <div id="features" className="conatainer-fluid">
        <div className="container">
          <div className="row pt-5 pb-5 features-row">

          <HeroTitle 
          
          textAlign="text-center"
          title="FEATURES"
          h2="We offer many services to progress!"
          p="As a PF ESI consultant, We provide PF & ESIC registration and monthly return filling
          PF Withdrawal & Correction Services for Employees & Company."
          />

          <FeatureCard 
          title="EPFO Consultant"
          link={epfo}
          disc="Best Provident Fund / PF Registration Consultant for company's. We provide Monthly PF Compliance / Return Filling"
          />
          <FeatureCard 
          title="ESIC Consultant"
          link={esic}
          disc="Best ESIC Registration Consultant for company's. We provide Monthly ESI Return Filling Service & New Member Joining and Exit"
          />
          <FeatureCard 
          title="PF Withdrawal"
          link={epfo}
          disc="We are One of the Best PF Withdrawal Agent / Consultant in all over India. Provides EPF Withdrawal & Member Services"
          />

          </div>


        </div>
      </div>
  )
}

export default Features