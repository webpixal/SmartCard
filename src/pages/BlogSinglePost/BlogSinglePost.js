import React from "react";
import Headers from "../../components/header/Headers";
import SingleBlog from "./blogSinglePostSections/SingleBlog";
import TitlePage from "./blogSinglePostSections/TitlePage";
import Footer from "../../components/footer/Footer";
import DarkHeaders from "../../components/header/DarkHeaders";

export default function BlogSinglePost() {
  return (
    <>
      <DarkHeaders />
      <TitlePage />
      <SingleBlog />
      <Footer />
    </>
  );
}
