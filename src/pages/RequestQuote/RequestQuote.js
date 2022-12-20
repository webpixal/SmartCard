import React from "react";
import DarkFooter from "../../components/footer/DarkFooter";
import Headers from "../../components/header/Headers";
import AboutLayoutOne from "../Aboutus/aboutusSections/AboutLayoutOne";
import BannerLayoutTwo from "../Home/homeSections/BannerLayoutTwo";
import SolutionFaq from "../ItSolutionsSinglePage/ItSolutionsSinglePageSections/SolutionFaq";
import RequestQuoteTitle from "./requestQuoteSections/RequestQuoteTitle";

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
