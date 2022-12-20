import Home from "../pages/Home/Home";
import Awards from "../pages/Awards/Awards";

import ErrorPage from "../pages/404Page/ErrorPage";
import Careers from "../pages/Careers/Careers";
import WhyUs from "../pages/WhyUs/WhyUs";
import Aboutus from "../pages/Aboutus/Aboutus";
import BlogSinglePost from "../pages/BlogSinglePost/BlogSinglePost";
import CaseStudiesGrid from "../pages/CaseStudiesGrid/CaseStudiesGrid";
import CaseStudiesSingle from "../pages/CaseStudiesSingle/CaseStudiesSingle";
import ContactUs from "../pages/ContactUs/ContactUs";
import Faqs from "../pages/Faqs/Faqs";
import ItSolutionsSinglePage from "../pages/ItSolutionsSinglePage/ItSolutionsSinglePage";
import LeadershipTeam from "../pages/LeadershipTeam/LeadershipTeam";
import OurBlog from "../pages/OurBlog/OurBlog";
import Pricing from "../pages/Pricing/Pricing";
import RequestQuote from "../pages/RequestQuote/RequestQuote";
import ItSolutions from "../pages/ItSolutions/ItSolutions";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/awards",
    element: <Awards />,
    errorElement: <ErrorPage />
  },
  {
    path: "/careers",
    element: <Careers />,
    errorElement: <ErrorPage />
  },
  {
    // path: "why-us/:contactId",
    path: "/why-us",
    element: <WhyUs />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about-us",
    element: <Aboutus />,
    errorElement: <ErrorPage />
  },
  {
    path: "/blog-single-post",
    element: <BlogSinglePost />,
    errorElement: <ErrorPage />
  },
  {
    path: "/case-studies-grid",
    element: <CaseStudiesGrid />,
    errorElement: <ErrorPage />
  },
  {
    path: "/case-studies-single",
    element: <CaseStudiesSingle />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    errorElement: <ErrorPage />
  },
  {
    path: "/faqs",
    element: <Faqs />,
    errorElement: <ErrorPage />
  },
  {
    path: "/it-solutions-single-page",
    element: <ItSolutionsSinglePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/leadership-team",
    element: <LeadershipTeam />,
    errorElement: <ErrorPage />
  },
  {
    path: "/our-blog",
    element: <OurBlog />,
    errorElement: <ErrorPage />
  },
  {
    path: "/pricing",
    element: <Pricing />,
    errorElement: <ErrorPage />
  },
  {
    path: "/request-quote",
    element: <RequestQuote />,
    errorElement: <ErrorPage />
  },
  {
    path: "/it-solutions",
    element: <ItSolutions />,
    errorElement: <ErrorPage />
  }
]);
