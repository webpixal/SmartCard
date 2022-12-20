import React from "react";
import Headers from "../../components/header/Headers";
import SingleBlog from "./blogSinglePostSections/SingleBlog";
import TitlePage from "./blogSinglePostSections/TitlePage";
import Footer from "../../components/footer/Footer";

export default function BlogSinglePost() {
  return (
    <>
      <Headers />
      <TitlePage />
      <SingleBlog />
      <Footer />
    </>
  );
}
