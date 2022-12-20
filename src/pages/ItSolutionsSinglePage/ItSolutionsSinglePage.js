import React from "react";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../components/header/SecondaryNav";
import ItSolutionsSinglePageTitle from "./ItSolutionsSinglePageSections/ItSolutionsSinglePageTitle";
import SolutionClient from "./ItSolutionsSinglePageSections/SolutionClient";
import SolutionsLayoutThree from "./ItSolutionsSinglePageSections/SolutionsLayoutThree";
import BannerLayoutThree from "../Industries/IndestriesSections/BannerLayoutThree";
import PortfolioGridSection from "../Home/homeSections/PortfolioGridSection";
import Pricing from "./ItSolutionsSinglePageSections/Pricing";
import SolutionBannerLayoutOne from "./ItSolutionsSinglePageSections/SolutionBannerLayoutOne";
import SolutionFaq from "./ItSolutionsSinglePageSections/SolutionFaq";
import DarkFooter from "../../components/footer/DarkFooter";

export default function ItSolutionsSinglePage() {
  return (
    <>
      <Headers />
      <ItSolutionsSinglePageTitle />
      <SecondaryNav />
      <SolutionsLayoutThree />
      <SolutionClient />
      <BannerLayoutThree />
      <PortfolioGridSection />
      <div className="checking">
        <Pricing />
      </div>
      <SolutionBannerLayoutOne />
      <SolutionFaq />
      <DarkFooter />
    </>
  );
}
