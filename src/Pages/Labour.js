import React from "react";
import Banner from "../Components/SubComponents/Banner";
import HeroTitle from "../Components/SubComponents/HeroTitle";
import eng from "../images/engineer.png";
import benifits from "../images/benefits.png";
import online from "../images/online (1).png";
import chat from "../images/chat.png";
import workinghr from "../images/working-hours.png";
import Footer from "../Components/Footer";
import DetailedCardOdd from "../Components/SubComponents/DetailedCardOdd";
import DetailedCardEven from "../Components/SubComponents/DetailedCardEven";

const Labour = () => {
  return (
    <div className="  d-flex flex-column justify-content-center align-items-center">
      <Banner
        title="Labor License & Company Registration"
        p="Omkar Consultancy provides guidance and assistance to individuals and businesses who are seeking to comply with government regulations related to labor and company registration"
      />

      <HeroTitle
        title="HIGHLIGHTS OF LABOR LICENSE & COMPANY REGISTRATION"
        underlineColor="underline"
        exClass="fs-3 text-center"
      />

      <div className="row d-flex justify-content-center pb-5 container-fluid">
        <DetailedCardOdd
          h3="Advising on Labor Laws"
          p="A consultant can provide guidance on local labor laws and regulations, such as minimum wage requirements, working hour restrictions, and employment contract requirements."
          imgLink={workinghr}
        />

        <DetailedCardEven
          h3="Facilitating Labor License Applications"
          p="A consultant can help individuals and businesses apply for labor licenses and permits. This may involve preparing necessary documentation, completing forms, and submitting applications to the appropriate government agency."
          imgLink={eng}
        />

        <DetailedCardOdd
          h3="Conducting Company Registration"
          p="A consultant can assist with the company registration process, including selecting the appropriate business structure, obtaining necessary permits and licenses, and registering the company with government agencies."
          imgLink={benifits}
        />

        <DetailedCardEven
          h3="Ensuring Compliance"
          p="A consultant can help ensure that businesses are complying with labor and company registration regulations. This may involve conducting compliance audits and making recommendations to improve compliance."
          imgLink={online}
        />

        <DetailedCardOdd
          h3="Handling Disputes"
          p=" A consultant can provide guidance and assistance in resolving disputes related to labor and company registration, including disputes with employees, government agencies, and other stakeholders."
          imgLink={chat}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Labour;
