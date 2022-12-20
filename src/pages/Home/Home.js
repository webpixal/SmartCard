import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import SimpleSlider from "../../components/slider/Slider";

import Headers from "../../components/header/Headers";
import AboutSection from "./homeSections/AboutSection";
import ServicesCarouselSection from "./homeSections/ServicesCarouselSection";
import FeaturesLayoutSection from "./homeSections/FeaturesLayoutSection";
import PortfolioGridSection from "./homeSections/PortfolioGridSection";
import BannerLayoutSectionFive from "./homeSections/BannerLayoutSectionFive";
import BlogGridSection from "./homeSections/BlogGridSection";
import BannerLayoutTwo from "./homeSections/BannerLayoutTwo";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const [isLoader, setisLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoader(false);
    }, 900);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smart Data IT Solutions & Services Template</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div class="wrapper">
        {isLoader && (
          <div class="preloader">
            <div class="sk-cube-grid">
              <span class="sk-cube"></span>
              <span class="sk-cube"></span>
              <span class="sk-cube"></span>
              <span class="sk-cube"></span>
              <span class="sk-cube"></span>
              <span class="sk-cube"></span>
              <span class="sk-cube"></span>
              <span class="sk-cube"></span>
              <span class="sk-cube"></span>
            </div>
          </div>
        )}

        <Headers />
        <SimpleSlider />
        <AboutSection />
        <ServicesCarouselSection />
        <FeaturesLayoutSection />
        <PortfolioGridSection />
        <div className="checking">
          <BannerLayoutSectionFive />
        </div>
        <BlogGridSection />
        <BannerLayoutTwo />
        <Footer />
      </div>
    </>
  );
}
