import React from "react";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../components/header/SecondaryNav";
import AwardsCards from "./awardsSections/AwardsCards";
import TitleSection from "./awardsSections/TitleSection";
import MiniSlider from "../../components/slider/Minislider";
import BlogGridSection from "../Home/homeSections/BlogGridSection";
import Footer from "../../components/footer/Footer";
import BannerLayoutFive from "./awardsSections/BannerLayoutFive";

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
