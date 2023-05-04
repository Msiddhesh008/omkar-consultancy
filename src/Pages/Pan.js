import React from "react";
import Banner from "../Components/SubComponents/Banner";
import HeroTitle from "../Components/SubComponents/HeroTitle";
import team from "../images/team-management.png";
import benifits from "../images/benefits.png";
import online from "../images/online (1).png";
import chat from "../images/chat.png";
import card from "../images/card.png";
import sheild from "../images/shield.png";
import Footer from "../Components/Footer";
import DetailedCardOdd from "../Components/SubComponents/DetailedCardOdd";
import DetailedCardEven from "../Components/SubComponents/DetailedCardEven";

const Pan = () => {
  return (
    <div className="  d-flex flex-column justify-content-center align-items-center">
      <Banner
        title="Pan(Permanent Account Number) Card Work"
        p="Omkar Consultancy provide various services related to PAN card, which is a unique identification number issued by the Income Tax Department of India"/>

      <HeroTitle
        title="HIGHLIGHTS OF PAN CARD"
        underlineColor="underline"
        exClass="fs-3 text-center"
      />

      <div className="row d-flex justify-content-center pb-5 container-fluid">
        <DetailedCardOdd
          h3="PAN Application Assistance"
          p="We assist individuals and businesses with the application process for a new PAN card. This may include helping clients fill out the application form correctly, providing guidance on supporting documents needed, and submitting the application on their behalf."
          imgLink={team}
        />

        <DetailedCardEven
          h3="PAN Card Correction/Update"
          p="Consultants can help individuals and businesses update or correct information on their existing PAN card, such as name, address, or date of birth. This may involve submitting documents to the Income Tax Department and following up with the status of the request."
          imgLink={online}
        />

        <DetailedCardOdd
          h3="PAN Card Status Check"
          p=" A consultant can help clients check the status of their PAN card application or update request. This may involve contacting the Income Tax Department on the client's behalf and providing updates on the status of the application."
          imgLink={benifits}
        />

        <DetailedCardEven
          h3="PAN Card Duplication/Re-issue"
          p="If a client has lost or damaged their PAN card, a consultant can assist with the process of getting a duplicate or re-issued card. This may involve submitting documents and following up with the Income Tax Department. " imgLink={chat}
        />

        <DetailedCardOdd
          h3="PAN Card Linking"
          p="A consultant can assist clients with linking their PAN card with other government-issued documents, such as Aadhaar card or passport."
          imgLink={card}
        />

        <DetailedCardEven
          h3="PAN Card Verification"
          p="A consultant can help clients verify the authenticity of a PAN card, which may be required for certain financial or legal transactions."
          imgLink={sheild}
          />

      </div>

      <Footer />
    </div>
  );
};

export default Pan;