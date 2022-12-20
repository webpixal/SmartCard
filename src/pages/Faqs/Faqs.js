import React from "react";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../components/header/SecondaryNav";
import BlogTitlePage from "../../scetions/blogSections/BlogTitlePage";
import Faq from "../../scetions/faqSections/Faq";
import BannerLayoutFour from "../../scetions/faqSections/BannerLayoutFour";
import AboutLayoutFive from "../../scetions/faqSections/AboutLayoutFive";
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
