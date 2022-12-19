import React from "react";
import Footer from "../../components/footer/Footer";
import Headers from "../../components/header/Headers";
import BlogGrind from "../../scetions/blogSections/BlogGrind";
import BlogTitlePage from "../../scetions/blogSections/BlogTitlePage";

export default function OurBlog() {
  return (
    <>
      <Headers />
      <BlogTitlePage />
      <BlogGrind />
      <Footer />
    </>
  );
}
