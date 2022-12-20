import React from "react";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../components/header/SecondaryNav";
import ItSolutionsSinglePageTitle from "../../scetions/ItSolutionsSinglePageSections/ItSolutionsSinglePageTitle";
import SolutionClient from "../../scetions/ItSolutionsSinglePageSections/SolutionClient";
import SolutionsLayoutThree from "../../scetions/ItSolutionsSinglePageSections/SolutionsLayoutThree";
import BannerLayoutThree from "../../scetions/IndestriesSections/BannerLayoutThree";
import PortfolioGridSection from "../../scetions/homeSections/PortfolioGridSection";
import Pricing from "../../scetions/ItSolutionsSinglePageSections/Pricing";
import SolutionBannerLayoutOne from "../../scetions/ItSolutionsSinglePageSections/SolutionBannerLayoutOne";
import SolutionFaq from "../../scetions/ItSolutionsSinglePageSections/SolutionFaq";
import DarkFooter from '../../components/footer/DarkFooter'

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
      <DarkFooter/>
    </>
  );
}
