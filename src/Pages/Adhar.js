import React from "react";
import Banner from "../Components/SubComponents/Banner";
import HeroTitle from "../Components/SubComponents/HeroTitle";
import team from "../images/team-management.png";
import benifits from "../images/benefits.png";
import online from "../images/online (1).png";
import chat from "../images/chat.png";
import Footer from "../Components/Footer";
import DetailedCardOdd from "../Components/SubComponents/DetailedCardOdd";
import DetailedCardEven from "../Components/SubComponents/DetailedCardEven";

const Adhar = () => {
  return (
    <div className="  d-flex flex-column justify-content-center align-items-center">
      <Banner
        title="Adhar Card Work"
        p="Omkar Consultancy provide guidance and assistance to individuals or businesses in obtaining and managing their Aadhaar card. Aadhaar is a 12-digit unique identification number issued by the Indian government to residents of India." 
      />

      <HeroTitle
        title="HIGHLIGHTS OF ADHAAR CARD"
        underlineColor="underline"
        exClass="fs-3 text-center"
      />

      <div className="row d-flex justify-content-center pb-5 container-fluid">
        <DetailedCardOdd
          h3="Aadhaar Enrollment"
          p="We assist individuals in enrolling for Aadhaar card by providing guidance on the required documents, scheduling appointments, and helping with the enrollment process."
          imgLink={team}
        />

        <DetailedCardEven
          h3="Aadhaar Updates"
          p="Consultants can help individuals update their Aadhaar card information, such as name, address, and other details."
          imgLink={online}
        />

        <DetailedCardOdd
          h3="Aadhaar Verification"
          p="We help individuals and businesses verify the Aadhaar card details of their employees, customers, or partners." 
          imgLink={benifits}
        />

        <DetailedCardEven
          h3="Aadhaar-Related Services"
          p=" Omkar Consultancy provide assistance with various Aadhaar-related services, such as linking Aadhaar card to bank accounts, mobile numbers, or other government services."
          imgLink={chat}
        />

      </div>

      <Footer />
    </div>
  );
};

export default Adhar;