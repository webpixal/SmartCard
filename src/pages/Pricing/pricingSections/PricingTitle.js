import React from "react";

export default function PricingTitle() {
  return (
    <section className="page-title page-title-layout5 bg-overlay bg-overlay-gradient bg-parallax text-center">
      <div className="bg-img">
        <img src="assets/images/page-titles/5.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
            <span className="pagetitle__subheading">
              Nationwide Service, Local Expertise
            </span>
            <h1 className="pagetitle__heading">
              Offering the latest software and IT services to our customers!
            </h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <a href="projects-grid.html" className="btn btn__primary mx-3">
                Our Services
              </a>
              <a
                className="video__btn video__btn-rounded video__btn-white popup-video mx-3"
                href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              >
                <div className="video__player">
                  <i className="fa fa-play" />
                </div>
                <span className="video__btn-title color-white">Our Video!</span>
              </a>
            </div>
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
