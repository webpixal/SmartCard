import React from "react";
import DarkFooter from "../../components/footer/DarkFooter";
import Headers from "../../components/header/Headers";
import AboutLayoutOne from "../../scetions/aboutusSections/AboutLayoutOne";
import BannerLayoutTwo from "../../scetions/homeSections/BannerLayoutTwo";
import SolutionFaq from "../../scetions/ItSolutionsSinglePageSections/SolutionFaq";
import RequestQuoteTitle from "../../scetions/requestQuoteSections/RequestQuoteTitle";

export default function RequestQuote() {
  return (
    <>
      <Headers />
      <RequestQuoteTitle/>
      <AboutLayoutOne/>
      <BannerLayoutTwo/>
      <SolutionFaq />
      <DarkFooter />
    </>
  );
}
