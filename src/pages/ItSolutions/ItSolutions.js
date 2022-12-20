import React from "react";
import Headers from "../../components/header/Headers";
import ItSolutionsTitle from "./itSolutionsSections.js/ItSolutionsTitle";
import ServicesCarouselSection from "../Home/homeSections/ServicesCarouselSection";
import FeaturesLayoutSection from "../Home/homeSections/FeaturesLayoutSection";
import PortfolioGridSection from "../Home/homeSections/PortfolioGridSection";
import BannerLayoutTwo from "../Home/homeSections/BannerLayoutTwo";
import AwardsCards from "../Awards/awardsSections/AwardsCards";
import Minislider from "../../components/slider/Minislider";
import DarkFoorer from "../../components/footer/DarkFooter";

export default function ItSolutions() {
  return (
    <>
      <Headers />
      <ItSolutionsTitle />
      <ServicesCarouselSection />
      <FeaturesLayoutSection />
      <PortfolioGridSection />
      <div className="checking">
        <BannerLayoutTwo />
      </div>
      <AwardsCards />
      <Minislider />
      <DarkFoorer />
    </>
  );
}
