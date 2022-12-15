import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import logoL from "../assets/images/logo/logo-light.png";
import logoD from "../assets/images/logo/logo-dark.png";
import Aboutone from "../assets/images/about/2.jpg";
import miniimg from "../assets/images/clients/1.png";
import SimpleSlider from "../components/slider/Slider";
import Minislider from "../components/slider/Minislider";
import featurebgimg from "../assets/images/backgrounds/14.jpg";
import bannerimgthree from "../assets/images/banners/3.jpg";
import OfferingSlider from "../components/slider/OfferingSlider";
import PortfolioSlider from "../components/slider/PortfolioSlider";
import bannerimg from "../assets/images/banners/7.jpg";
import singnture from "../assets/images/about/singnture.png";
import Awards from "../components/slider/Awards";
import img1 from "../assets/images/blog/grid/1.jpg";
import img2 from "../assets/images/blog/grid/2.jpg";
import img3 from "../assets/images/blog/grid/3.jpg";
import img4 from "../assets/images/banners/8.jpg";

import Headers from "../components/header/Headers";
import AboutSection from "../scetions/AboutSection";
import ServicesCarouselSection from "../scetions/ServicesCarouselSection";
import FeaturesLayoutSection from "../scetions/FeaturesLayoutSection";
import PortfolioGridSection from "../scetions/PortfolioGridSection";
import BannerLayoutSectionFive from "../scetions/BannerLayoutSectionFive";
import BlogGridSection from "../scetions/BlogGridSection";
import BannerLayoutTwo from "../scetions/BannerLayoutTwo";
import Footer from "../components/footer/Footer";

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
