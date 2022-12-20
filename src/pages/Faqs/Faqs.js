import React from "react";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../components/header/SecondaryNav";
import BlogTitlePage from "../CaseStudiesGrid/blogSections/BlogTitlePage";
import Faq from "./faqSections/Faq";
import BannerLayoutFour from "./faqSections/BannerLayoutFour";
import AboutLayoutFive from "./faqSections/AboutLayoutFive";
import DarkFooter from "../../components/footer/DarkFooter";

export default function Faqs() {
  return (
    <>
      <Headers />
      <BlogTitlePage title="Faqs" />
      <SecondaryNav />
      <Faq />
      <BannerLayoutFour />
      <AboutLayoutFive />
      <DarkFooter />
    </>
  );
}
