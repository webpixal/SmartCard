import React from "react";
import DarkFooter from "../../components/footer/DarkFooter";
import Headers from "../../components/header/Headers";
import Faq from "../Faqs/faqSections/Faq";
import BannerLayoutTwo from "../Home/homeSections/BannerLayoutTwo";
import BannerLayoutThree from "./IndestriesSections/BannerLayoutThree";
import IndestriesTitle from "./IndestriesSections/IndestriesTitle";
import ServicesLayoutOne from "./IndestriesSections/ServicesLayoutOne";

export default function Industries() {
  return (
    <>
      <Headers />
      <IndestriesTitle />
      <ServicesLayoutOne />
      <BannerLayoutThree />
      <BannerLayoutTwo />
      <Faq />
      <DarkFooter />
    </>
  );
}
