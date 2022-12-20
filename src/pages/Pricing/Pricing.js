import React from "react";
import Headers from "../../components/header/Headers";
import SolutionFaq from "../ItSolutionsSinglePage/ItSolutionsSinglePageSections/SolutionFaq";
import PricingBanner from "./pricingSections/PricingBanner";
import PricingClient from "./pricingSections/PricingClient";
import PricingTitle from "./pricingSections/PricingTitle";
import PricingWorkProcess from "./pricingSections/PricingWorkProcess";
import DarkFooter from "../../components/footer/DarkFooter";

export default function Pricing() {
  return (
    <>
      <Headers />
      <PricingTitle />
      <PricingBanner />
      <PricingClient />
      <PricingWorkProcess />
      <SolutionFaq />
      <DarkFooter />
    </>
  );
}
