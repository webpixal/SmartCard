import React from "react";
import Headers from "../../components/header/Headers";
import SolutionFaq from "../../scetions/ItSolutionsSinglePageSections/SolutionFaq";
import PricingBanner from "../../scetions/pricingSections/PricingBanner";
import PricingClient from "../../scetions/pricingSections/PricingClient";
import PricingTitle from "../../scetions/pricingSections/PricingTitle";
import PricingWorkProcess from "../../scetions/pricingSections/PricingWorkProcess";
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
