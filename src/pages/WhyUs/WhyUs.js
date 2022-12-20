import React from "react";
import Footer from "../../components/footer/DarkFooter";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../components/header/SecondaryNav";
import BlogGridSection from "../Home/homeSections/BlogGridSection";
import PortfolioGridSection from "../Home/homeSections/PortfolioGridSection";
import BannerLayoutThree from '../Industries/IndestriesSections/BannerLayoutThree'
import SolutionBannerLayoutOne from "../ItSolutionsSinglePage/ItSolutionsSinglePageSections/SolutionBannerLayoutOne";
import AboutLayoutThree from "./whyUsSections/AboutLayoutThree";
import WhyUsClients from "./whyUsSections/WhyUsClients";
import WhyUsTitle from "./whyUsSections/WhyUsTitle";

export default function WhyUs() {
  return (
    <>
      <Headers />
      <WhyUsTitle />
      <SecondaryNav />
      <AboutLayoutThree />
      <WhyUsClients />
      <BannerLayoutThree />
      <PortfolioGridSection />
      <div className="checking">
        <SolutionBannerLayoutOne />
      </div>
      <BlogGridSection />
      <Footer />
    </>
  );
}
