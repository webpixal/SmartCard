import React from "react";
import Footer from "../../components/footer/Footer";
import Headers from "../../components/header/Headers";
import AboutLayoutOne from "../../scetions/aboutusSections/AboutLayoutOne";
import HistoryTimeline from "../../scetions/aboutusSections/HistoryTimeline";
import PageTitle from "../../scetions/aboutusSections/PageTitle";
import SecondaryNav from "../../scetions/aboutusSections/SecondaryNav";
import BannerLayoutSectionFive from "../../scetions/BannerLayoutSectionFive";
import BlogGridSection from "../../scetions/BlogGridSection";

export default function Aboutus() {
  return (
    <>
      <Headers />
      <PageTitle />
      <SecondaryNav />
      <AboutLayoutOne />
      <HistoryTimeline />
      <BannerLayoutSectionFive />
      <BlogGridSection />
      <Footer />
    </>
  );
}
