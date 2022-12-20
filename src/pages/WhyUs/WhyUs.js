import React from "react";
import Footer from "../../components/footer/DarkFooter";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../components/header/SecondaryNav";
import BlogGridSection from "../../scetions/homeSections/BlogGridSection";
import PortfolioGridSection from "../../scetions/homeSections/PortfolioGridSection";
import BannerLayoutThree from "../../scetions/IndestriesSections/BannerLayoutThree";
import SolutionBannerLayoutOne from "../../scetions/ItSolutionsSinglePageSections/SolutionBannerLayoutOne";
import AboutLayoutThree from "../../scetions/whyUsSections/AboutLayoutThree";
import WhyUsClients from "../../scetions/whyUsSections/WhyUsClients";
import WhyUsTitle from "../../scetions/whyUsSections/WhyUsTitle";

export default function WhyUs() {
  return (
    <>
      <Headers />
      <WhyUsTitle />
      <SecondaryNav/>
      <AboutLayoutThree/>
      <WhyUsClients/>
      <BannerLayoutThree/>
      <PortfolioGridSection />
      <div className="checking">
      <SolutionBannerLayoutOne/>
      </div>
      <BlogGridSection />
      <Footer />
    </>
  );
}
