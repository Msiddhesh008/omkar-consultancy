import epfo from "../../images/EPFO-Color.png";
import tax from "../../images/income_tax.png";
import esic from "../../images/ESIC-Color.png";
import support from "../../images/customer-service.png";
import quick from "../../images/quick.png";
import team from "../../images/employee.png";
import solution from "../../images/innovation.png";
import pan from "../../images/pan2.png";
import adhar from "../../images/adhar.png";
import labour from "../../images/labour.png";

const featureDetails = [
  {
    title: "EPFO Consultant",
    imgSize: 100,
    link: epfo,
    disc: "Best Provident Fund / PF Registration Consultant for company's. We provide Monthly PF Compliance / Return Filling",
    route: "/epfo",
  },
  {
    title: "ESIC Consultant",
    imgSize: 100,
    link: esic,
    disc: "Best Provident Fund / PF Registration Consultant for company's. We provide Monthly PF Compliance / Return Filling",
    route: "/esic",
  },
  {
    title: "Income Tax & GST Consultant",
    imgSize: 150,
    link: tax,
    disc: "We are One of the Best Icome Tax Consultant in all over India. Provides GST Consulting Services too.",
    route: "/taxgst",
  },
  {
    title: "Adhar Card Work",
    imgSize: 150,
    link: adhar,
    disc: "Omkar Consultancy provide guidance and assistance to individuals or businesses in obtaining and managing their Aadhaar card. ",
    route: "/adhar",
  },
  {
    title: "Pan Card Work",
    imgSize: 60,
    link: pan,
    disc: "We are One of the Best Icome Tax Consultant in all over India. Provides GST Consulting Services too.",
    route: "/pan",
  },
  {
    title: "Labour License & Company Reg",
    imgSize: 100,
    link: labour,
    disc: "We provide guidance to individuals and businesses seeking to navigate complex regulations and ensure compliance with the law.",
    route: "/labour",
  },
];

const heroTitle = {
  features: {
    title: "FEATURES",
    h2: "We offer many services to progress!",
    p: "As a PF ESI consultant, We provide PF & ESIC registration and monthly return filling PF Withdrawal & Correction Services for Employees & Company.",
    textAlign: "text-center",
    underlineColor: "underline",
  },
  aboutUs: {
    title: "ABOUT US",
    h2: "Welcome to Omkar Consultancy",
    p: "Over 10 years of experience we’ll ensure you always get the best guidance. We serve a clients at every level of their organization we can be most useful, whether as a trusted advisor to top trusted our management coach for fronts line employees.",
    textAlign: "text-center",
    underlineColor: "underline",
  },
  wayOfWorking: {
    title: "WAY OF WORKING",
    h2: "Our Working Process",
    underlineColor: "underline",
  },
  ourServices: {
    title: "",
    h2: "",
    p: "",
    textAlign: "",
    underlineColor: "",
  },
};

const workingCard = [
  {
    aos: "fade-right",
    link: support,
    h5: "24/7 Support",
    p: "0 1",
  },
  {
    aos: "fade-up",
    link: quick,
    h5: "Quick Response",
    p: "0 2",
  },
  {
    aos: "fade-up",
    link: team,
    h5: "Experience Team",
    p: "0 3",
  },
  {
    aos: "fade-right",
    link: solution,
    h5: "Smart Solution",
    p: "0 4",
  },
];

export { featureDetails, heroTitle, workingCard };
