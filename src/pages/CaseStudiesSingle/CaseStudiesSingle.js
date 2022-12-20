import React from "react";
import DarkFooter from "../../components/footer/DarkFooter";
import DarkHeaders from "../../components/header/DarkHeaders";
import PricingWorkProcess from "../Pricing/pricingSections/PricingWorkProcess";
import BannerLayoutSix from "./CaseStudiesSingleSections/BannerLayoutSix";
import CaseStudiesSingleTitlePage from "./CaseStudiesSingleSections/CaseStudiesSingleTitlePage";
import Counter from "./CaseStudiesSingleSections/Counter";
import PortFolioSingle from "./CaseStudiesSingleSections/PortFolioSingle";
import TextContent from "./CaseStudiesSingleSections/TextContent";
import TextContentSec from "./CaseStudiesSingleSections/TextContentSec";
import TextContentThird from "./CaseStudiesSingleSections/TextContentThird";

export default function CaseStudiesSingle() {
  return (
    <>
      <DarkHeaders />
      <CaseStudiesSingleTitlePage />
      <PortFolioSingle />
      <TextContent />
      <BannerLayoutSix />
      <TextContentSec />
      <Counter />
      <PricingWorkProcess />
      <TextContentThird />
      <DarkFooter />
    </>
  );
}
