import React from "react";
import FeatureCard from "./SubComponents/FeatureCard";
import HeroTitle from "./SubComponents/HeroTitle";
import { featureDetails, heroTitle } from "../Components/Content/Content";

const Features = () => {
  return (
    <div id="features" className="conatainer-fluid">
      <div className="container">
        <div className="row pt-5 pb-5 features-row">
          <HeroTitle
            textAlign={heroTitle.features.textAlign}
            title={heroTitle.features.title}
            underlineColor={heroTitle.features.underlineColor}
            h2={heroTitle.features.h2}
            p={heroTitle.features.p}
          />
          {featureDetails.map((eachFeature, index) => {
            return (
              <FeatureCard
                key={index}
                imgSize={eachFeature.imgSize}
                title={eachFeature.title}
                link={eachFeature.link}
                disc={eachFeature.disc}
                route={eachFeature.route}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
