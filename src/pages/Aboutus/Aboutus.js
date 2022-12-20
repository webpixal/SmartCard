import React from "react";
import Footer from "../../components/footer/DarkFooter";
import Headers from "../../components/header/Headers";
import AboutLayoutOne from "./aboutusSections/AboutLayoutOne";
import HistoryTimeline from "./aboutusSections/HistoryTimeline";
import PageTitle from "./aboutusSections/PageTitle";
import SecondaryNav from "../../components/header/SecondaryNav";
import TestimonialSection from "./aboutusSections/TestimonialSection";
import BannerLayoutSectionFive from "../../scetions/homeSections/BannerLayoutSectionFive";
import BlogGridSection from "../../scetions/homeSections/BlogGridSection";

export default function Aboutus() {
  return (
    <>
      <Headers />
      <PageTitle />
      <SecondaryNav />
      <AboutLayoutOne />
      <HistoryTimeline />
      <TestimonialSection />
      <BannerLayoutSectionFive />
      <BlogGridSection />
      <Footer />
    </>
  );
}
