import React from "react";
import MiltiSlider from "../../../components/slider/MiltiSlider";
import img2 from "../../../assets/images/banners/3.jpg";

export default function HistoryTimeline() {
  return (
    <section className="history-timeline pb-0">
      <div className="history-timeline-bg bg-slider-img-Banner-multi">
        {/* <div className="">
          <img src={img1} alt="background" />
        </div> */}
      </div>
      <div className="container">
        <div className="row heading mb-50">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="d-flex align-items-center mb-20">
              <div className="divider divider-primary mr-30" />
              <h2 className="heading__subtitle mb-0">
                Explore Our Great History!!
              </h2>
            </div>
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="heading__title color-white">
              One of the world's largest IT Providers since 2005.
            </h3>
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <div className="position-relative">
        <div className="timeline-bar">
          <div className="container d-flex">
            <div className="col" />
            <div className="col" />
            <div className="col" />
            <div className="col" />
          </div>
          {/* /.container */}
        </div>
        {/* /.timeline-bar */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="timeline-carousel-wrapper mb-70">
                <MiltiSlider />
              </div>
            </div>
            {/* /.col-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between">
            <div className="row row-no-gutter read-note">
              <div className="col-sm-4">
                <div className="rating mb-10">
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                </div>
              </div>
              {/* /.col-lg-4 */}
              <div className="col-sm-8">
                <p className="read-note__text color-white">
                  <span className="font-weight-bold text-underlined">
                    99.9% Customer Satisfaction
                  </span>
                  based on 750+ reviews and 20,000 Objective Resource
                </p>
              </div>
              {/* /.col-lg-8 */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <p className="mb-30 font-weight-bold sub__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </p>
                <a
                  href="#"
                  className="btn btn__primary btn__bordered btn__icon mb-30">
                  <span>Request Demo</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.col-sm-6 */}
              <div className="col-sm-12 col-md-6">
                <ul className="list-items list-unstyled mb-30">
                  <li>450,000 client’s interactions </li>
                  <li>Help challenge critical activities</li>
                  <li>Simplify &amp; Automate Workflows</li>
                  <li>Peer perspectives and advice</li>
                </ul>
              </div>
              {/* /.col-sm-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img src={img2} alt="banner" />
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
