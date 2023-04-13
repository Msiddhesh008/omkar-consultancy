import React from 'react'
import HeroTitle from './SubComponents/HeroTitle'
import support from '../images/customer-service.png'
import WorkingCard from './SubComponents/WorkingCard'
import quick from '../images/quick.png'
import team from '../images/employee.png'
import solution from "../images/innovation.png"

function Working() {
  return (
    <div id='working'>
        <div class="container-fluid">
            <div className="container">
                <div className="row pt-5 pb-4">
                <HeroTitle 
                title="WAY OF WORKING"
                h2="Our Working Process"
                />
                <div className="container-fluid">
                <div className="row workRow">
                <WorkingCard 
                link={support}
                h5="24/7 Support"
                p="0 1"
                />
                <WorkingCard 
                link={quick}
                h5="Quick Response"
                p="0 2"
                />
                <WorkingCard 
                link={team}
                h5="Experience Team"
                p="0 3"
                />
                <WorkingCard 
                link={solution}
                h5="Smart Solution"
                p="0 4"
                />

                </div>
            </div>


            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Working