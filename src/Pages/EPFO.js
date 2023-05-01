import React from "react";
import Banner from "../Components/SubComponents/Banner";
import HeroTitle from "../Components/SubComponents/HeroTitle";
import team from "../images/team-management.png";
import benifits from "../images/benefits.png";
import online from "../images/online (1).png";
import due from "../images/schedule.png";
import Footer from "../Components/Footer";
import DetailedCardOdd from "../Components/SubComponents/DetailedCardOdd";
import DetailedCardEven from "../Components/SubComponents/DetailedCardEven";

const EPFO = () => {
  return (
    <div className="  d-flex flex-column justify-content-center align-items-center">
      <Banner
        title="Employee's Provident Fund (EPFO)"
        p="These registrations are being managed by consultancy firms on a larger basis. One of the best-known firms in Raigad Dist is owned by Mrs. Vaibhavi More. The consultancy is serving various industries by providing the facility of Online EPF Registration. Now let’s discuss the facts related to the EPF."
      />

      <HeroTitle
        title="HIGHLIGHTS OF PROVIDENT FUND"
        underlineColor="underline"
        exClass="fs-3 text-center"
      />

      <div className="row d-flex justify-content-center pb-5 container-fluid">
        <DetailedCardOdd
          h3="Employee's Provident Fund organization (EPFO)"
          p="EPFO or PF is an arrangement made by the government and managed by 
          Employee’s Provident Fund Organization (EPFO), which is covered under 
          the Employees’ Provident Fund and Miscellaneous Provisions Act, 1952. 
          The EPF organization is controlled by Ministry of Labour and Employment, 
          Government of India. The Act was framed to provide the benefits to salaried 
          class employees. Under this act, the employees are entitled to receive a 
          pension, insurance or special benefits at specific occasions by 
          contributing a nominal amount towards this fund. The contribution 
          is being deposited from applicable for both employee and employer."
          imgLink={team}
        />

        <DetailedCardEven
          h3="Online EPF Registration"
          p="Filling up of form"
          p2="Submission of Documents"
          p3="Application Submission to the EPFO and it’s done"
          imgLink={online}
        />

        <DetailedCardOdd
          h3="Benefits of PF"
          p="Earlier this registration was being done manually by visiting the organization. 
          But now it can be easily done online. An important investment plan for future needs 
          has been made mandatory by the government for the employees drawing a basic salary 
          less than Rs. 15000/-. The fund accumulated would be tax-free and if withdrawal is 
          being made after 5 years of registration then the maturity amount with interest will 
          also be treated as the tax-free income. The contribution also helps employees by 
          facilitating to withdrawal partial amount for expenses like house construction, 
          daughter’s wedding, in the case of critical illness, higher education etc. Thus, 
          it is very important to contribute towards this fund for both employer and employee."
          imgLink={benifits}
        />

        <DetailedCardEven
          h3="Last Date of EPF Payment"
          p="Deposition of EPF contributions due date is 15th of every month."
          imgLink={due}
        />
      </div>

      <Footer />
    </div>
  );
};

export default EPFO;
