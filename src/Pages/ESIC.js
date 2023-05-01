import React from "react";
import Banner from "../Components/SubComponents/Banner";
import HeroTitle from "../Components/SubComponents/HeroTitle";
import team from "../images/team-management.png";
import benifits from "../images/benefits.png";
import online from "../images/online (1).png";
import Footer from "../Components/Footer";
import DetailedCardOdd from "../Components/SubComponents/DetailedCardOdd";
import DetailedCardEven from "../Components/SubComponents/DetailedCardEven";

const ESIC = () => {
  return (
    <div className="  d-flex flex-column justify-content-center align-items-center">
      <Banner
        title="Employee's State Insurance Corporation (ESIC)"
        p="Employee State Insurance Corporation Act 1948 was introduced by the government 
        to provide social security and medical facilities to employees and their families. 
         Registered employees and their families are eligible to get medical 
        benefits including surgical and obstetric treatment etc."
       />

      <HeroTitle
        title="HIGHLIGHTS OF ESIC REGISTRATION"
        underlineColor="underline"
        exClass="fs-3 text-center"
      />

      <div className="row d-flex justify-content-center pb-5 container-fluid">
        <DetailedCardOdd
          h3="ESI Registration"
          p="ESIC Registration is applicable to the establishments which in an implemented area and having more than 10 employees. Once, the organization gets registered, a 17 digit unique identification code will be allotted to them. It is the statutory responsibility of the employer to get registered under this act after achieving the said employee level within 15 days."
          imgLink={team}
        />

        <DetailedCardEven
          h3="Benefits of ESI"
          p="Provides complete medical assistance to the employee"
          p2="It also includes dependents"
          p3="These benefits can be availed at different ESI dispensaries, clinics and hospitals"
          imgLink={online}
        />

        <DetailedCardOdd
          h3="ESI Contribution"
          p="ESIC contribution is must to be made by the employer for all employees drawing a monthly gross salary of up to Rs.21,000 per month. The employer contribution is 4.75% and employee contribution is 1.75% of the wages. The total contribution made towards ESI Fund will be 6.50% of total monthly gross."
          imgLink={benifits}
        />

      </div>

      <Footer />
    </div>
  );
};

export default ESIC;
