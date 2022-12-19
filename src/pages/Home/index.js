import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import SimpleSlider from "../../components/slider/Slider";

import Headers from "../../components/header/Headers";
import AboutSection from "../../scetions/homeSections/AboutSection";
import ServicesCarouselSection from "../../scetions/homeSections/ServicesCarouselSection";
import FeaturesLayoutSection from "../../scetions/homeSections/FeaturesLayoutSection";
import PortfolioGridSection from "../../scetions/homeSections/PortfolioGridSection";
import BannerLayoutSectionFive from "../../scetions/homeSections/BannerLayoutSectionFive";
import BlogGridSection from "../../scetions/homeSections/BlogGridSection";
import BannerLayoutTwo from "../../scetions/homeSections/BannerLayoutTwo";
import Footer from "../../components/footer/Footer";

export default function Index() {
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
        <BannerLayoutSectionFive />
        <BlogGridSection />
        <BannerLayoutTwo />
        <Footer />
      </div>
    </>
  );
}
