import React from "react";

export default function TitlePage() {
  return (
    <section className="page-title page-title-layout11 text-center bg-overlay bg-overlay-gradient bg-parallax">
      <div className="bg-img">
        <img src="assets/images/page-titles/1.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-lg-3">
            <span className="pagetitle__subheading">Energy And Utilities</span>
            <h1 className="pagetitle__heading">
              With shorter product cycles, rapid innovation &amp; mergers
              contributing to constant change mission.
            </h1>
            <div className="d-flex align-items-center justify-content-center">
              <a href="it-solutions.html" className="btn btn__white mx-3">
                Our Services
              </a>
              <a
                href="request-quote.html"
                className="btn btn__white btn__link btn__icon  mx-3"
              >
                <span>Get Started</span>
                <i className="icon-arrow-right" />
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
