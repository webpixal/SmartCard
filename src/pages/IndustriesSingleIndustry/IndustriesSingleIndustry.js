import React from "react";
import DarkFooter from "../../components/footer/DarkFooter";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../components/header/SecondaryNav";
import AwardsCards from "../Awards/awardsSections/AwardsCards";
import Faq from "../Faqs/faqSections/Faq";
import BannerLayoutTwo from "../Home/homeSections/BannerLayoutTwo";
import AboutLayoutOne from "../Aboutus/aboutusSections/AboutLayoutOne";
import HistoryTimeline from "../Aboutus/aboutusSections/HistoryTimeline";
import TestimonialSection from "../Aboutus/aboutusSections/TestimonialSection";
import IndustriesSingleClients from "./IndustriesSingleIndustrySections/IndustriesSingleClients";
import TitlePage from "./IndustriesSingleIndustrySections/TitlePage";

export default function IndustriesSingleIndustry() {
  return (
    <>
      <Headers />
      <TitlePage />
      <SecondaryNav />
      <AboutLayoutOne />
      <HistoryTimeline />
      <TestimonialSection />
      <AwardsCards />
      <IndustriesSingleClients />
      <BannerLayoutTwo />
      <Faq />
      <DarkFooter />
    </>
  );
}
