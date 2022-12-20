import React from "react";
import Footer from "../../components/footer/Footer";
import Headers from "../../components/header/Headers";
import BlogGrind from "./blogSections/BlogGrind";
import BlogTitlePage from "./blogSections/BlogTitlePage";

export default function CaseStudiesGrid() {
  return (
    <>
      <Headers />
      <BlogTitlePage title={"Careers"} />
      <BlogGrind />
      <Footer />
    </>
  );
}
