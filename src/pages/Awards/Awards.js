import React from "react";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../scetions/aboutusSections/SecondaryNav";
import AwardsCards from "../../scetions/awardsSections/AwardsCards";
import TitleSection from "../../scetions/awardsSections/TitleSection";
import MiniSlider from "../../components/slider/Minislider";
import BannerLayoutSectionFive from "../../scetions/homeSections/BannerLayoutSectionFive";
import BlogGridSection from "../../scetions/homeSections/BlogGridSection";
import Footer from "../../components/footer/Footer";
import BannerLayoutFive from "../../scetions/awardsSections/BannerLayoutFive";

export default function Awards() {
  return (
    <>
      <Headers />
      <TitleSection />
      <SecondaryNav />
      <AwardsCards />
      <MiniSlider />
      <BannerLayoutFive />
      <BlogGridSection />
      <Footer />
    </>
  );
}
