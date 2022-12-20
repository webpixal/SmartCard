import "./assets/css/style.css";
import "./assets/css/libraries.css";
import "./assets/scss/style.scss";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Awards from "./pages/Awards/Awards";
import ErrorPage from "./pages/404Page/ErrorPage";
import Careers from "./pages/Careers/Careers";
import WhyUs from "./pages/WhyUs/WhyUs";
import Aboutus from "./pages/Aboutus/Aboutus";
import BlogSinglePost from "./pages/BlogSinglePost/BlogSinglePost";
import CaseStudiesGrid from "./pages/CaseStudiesGrid/CaseStudiesGrid";
import CaseStudiesSingle from "./pages/CaseStudiesSingle/CaseStudiesSingle";
import ContactUs from "./pages/ContactUs/ContactUs";
import Faqs from "./pages/Faqs/Faqs";
import ItSolutionsSinglePage from "./pages/ItSolutionsSinglePage/ItSolutionsSinglePage";
import LeadershipTeam from "./pages/LeadershipTeam/LeadershipTeam";
import OurBlog from "./pages/OurBlog/OurBlog";
import Pricing from "./pages/Pricing/Pricing";
import RequestQuote from "./pages/RequestQuote/RequestQuote";
import ItSolutions from "./pages/ItSolutions/ItSolutions";
import Industries from "./pages/Industries/Industries";
import IndustriesSingleIndustry from "./pages/IndustriesSingleIndustry/IndustriesSingleIndustry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/leadership-team" element={<LeadershipTeam />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/it-solutions" element={<ItSolutions />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/industries-single-industry" element={<IndustriesSingleIndustry />} />
      <Route
        path="/it-solutions-single-page"
        element={<ItSolutionsSinglePage />}
      />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/our-blog" element={<OurBlog />} />
      <Route path="/blog-single-post" element={<BlogSinglePost />} />
      <Route path="/case-studies-grid" element={<CaseStudiesGrid />} />
      <Route path="/case-studies-single" element={<CaseStudiesSingle />} />
    </Routes>
  );
}

export default App;
