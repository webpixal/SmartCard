import React from "react";
import DarkFooter from "../../components/footer/DarkFooter";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../components/header/SecondaryNav";
import HistoryTimeline from "../Aboutus/aboutusSections/HistoryTimeline";
import BlogGridSection from "../Home/homeSections/BlogGridSection";
import CareersMid from "./CareersSection.js/CareersMid";
import CareersTitle from "./CareersSection.js/CareersTitle";

export default function Careers() {
  return (
    <>
      <Headers />
      <CareersTitle />
      <SecondaryNav />
      <CareersMid/>
      <HistoryTimeline/>
      <BlogGridSection/>
      <DarkFooter />
    </>
  );
}
