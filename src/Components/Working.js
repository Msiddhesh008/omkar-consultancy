import React from "react";
import HeroTitle from "./SubComponents/HeroTitle";
import WorkingCard from "./SubComponents/WorkingCard";
import "aos/dist/aos.css";
import { heroTitle, workingCard } from "./Content/Content";

function Working() {
  return (
    <div id="working">
      <div class="container-fluid">
        <div className="container">
          <div className="row pt-5 pb-4">
            <HeroTitle
              title={heroTitle.wayOfWorking.title}
              h2={heroTitle.wayOfWorking.h2}
              underlineColor={heroTitle.wayOfWorking.underlineColor}
            />
            <div className="container-fluid">
              <div className="row workRow">
                {workingCard.map((eachDetail, index) => {
                  return (
                    <WorkingCard
                      key={index}
                      aos={eachDetail.aos}
                      link={eachDetail.link}
                      h5={eachDetail.h5}
                      p={eachDetail.p}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Working;
