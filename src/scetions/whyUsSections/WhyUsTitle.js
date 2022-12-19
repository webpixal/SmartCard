import React from "react";

export default function WhyUsTitle() {
  return (
    <section className="page-title page-title-layout2 bg-overlay bg-overlay-gradient bg-parallax">
      <div className="bg-img">
        <img src="assets/images/page-titles/2.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-7 col-xl-5">
            <h1 className="pagetitle__heading">
              Easy solutions for all difficult IT problems, keep business safe
              &amp; ensure high availability.
            </h1>
            <a href="it-solutions.html" className="btn btn__white mt-20 mr-30">
              Our Services
            </a>
            <a
              href="request-quote.html"
              className="btn btn__white btn__bordered btn__icon mt-20"
            >
              <span>Get Started</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
          {/* /.col-xl-5 */}
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-7 d-flex justify-content-end cta-banner-wrapper">
            <div className="cta-banner">
              <div className="cta__icon">
                <i className="icon-developer" />
              </div>
              <h4 className="cta__title">Since 1999</h4>
              <p className="cta__desc mb-25">
                Provide users with appropriate view and access to requests,
                problems, changes and reports.
              </p>
              <a
                href="#"
                className="btn btn__link btn__secondary btn__icon px-0"
              >
                <span>Find Your Solution</span>{" "}
                <i className="icon-arrow-right" />
              </a>
            </div>
          </div>
          {/* /.col-xl-7 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
