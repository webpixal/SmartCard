import React from "react";
import DarkFooter from "../../components/footer/DarkFooter";
import Headers from "../../components/header/Headers";
import Faq from "../../scetions/faqSections/Faq";
import BannerLayoutTwo from "../../scetions/homeSections/BannerLayoutTwo";
import BannerLayoutThree from "../../scetions/IndestriesSections/BannerLayoutThree";
import IndestriesTitle from "../../scetions/IndestriesSections/IndestriesTitle";
import ServicesLayoutOne from "../../scetions/IndestriesSections/ServicesLayoutOne";

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
