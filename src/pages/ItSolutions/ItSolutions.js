import React from "react";
import Headers from "../../components/header/Headers";
import ItSolutionsTitle from "../../scetions/itSolutionsSections.js/ItSolutionsTitle";
import AboutSection from "../../scetions/homeSections/AboutSection";
import ServicesCarouselSection from "../../scetions/homeSections/ServicesCarouselSection";
import FeaturesLayoutSection from "../../scetions/homeSections/FeaturesLayoutSection";
import PortfolioGridSection from "../../scetions/homeSections/PortfolioGridSection";
import BannerLayoutSectionFive from "../../scetions/homeSections/BannerLayoutSectionFive";
import BlogGridSection from "../../scetions/homeSections/BlogGridSection";
import BannerLayoutTwo from "../../scetions/homeSections/BannerLayoutTwo";
import AwardsCards from "../../scetions/awardsSections/AwardsCards";
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
