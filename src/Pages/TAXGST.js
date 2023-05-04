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

const TAXGST = () => {
  return (
    <div className="  d-flex flex-column justify-content-center align-items-center">
      <Banner
        title="Income Tax & GST(Goods and Services Tax) Consultant"
        p="We are professional who provides advice and assistance to individuals and businesses regarding their tax obligations.We use specialized software and technology to prepare tax returns, track deadlines, and stay up-to-date on changes to tax laws and regulations."
       />

      <HeroTitle
        title="HIGHLIGHTS OF TAX & GST"
        underlineColor="underline"
        exClass="fs-3 text-center"
      />

      <div className="row d-flex justify-content-center pb-5 container-fluid">
        <DetailedCardOdd
          h3="Income Tax"
          p="Income tax is a tax levied by the government on the income earned by individuals and businesses. Income tax consultants help clients understand their tax obligations, file tax returns, and minimize their tax liability through deductions, credits, and other tax planning strategies."
          imgLink={team}
        />

        <DetailedCardEven
          h3="GST(Goods and Services Tax)"
          p="GST is a tax levied on the supply of goods and services in many countries. GST consultants help clients understand their GST obligations, register for GST, and file GST returns. They can also provide advice on GST compliance and planning strategies to minimize GST liability."
          imgLink={online}
        />

        <DetailedCardOdd
          h3="Compliance"
          p="Income tax and GST consultants play a crucial role in helping clients stay compliant with tax laws and regulations. We can provide guidance on record-keeping requirements, deadlines for filing tax returns, and penalties for non-compliance."
          imgLink={benifits}
        />

        <DetailedCardEven
          h3="Tax Planning"
          p="We help clients develop tax planning strategies to minimize their tax liability and maximize their after-tax income. This can include strategies like contributing to retirement accounts, taking advantage of tax credits, and structuring business transactions to minimize tax impact."
          imgLink={chat}
        />

      </div>

      <Footer />
    </div>
  );
};

export default TAXGST;