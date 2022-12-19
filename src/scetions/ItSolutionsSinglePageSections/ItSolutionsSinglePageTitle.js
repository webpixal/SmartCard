import React from "react";

export default function ItSolutionsSinglePageTitle() {
  return (
    <section className="page-title page-title-layout9 bg-overlay bg-overlay-gradient bg-parallax">
      <div className="bg-img">
        <img src="assets/images/page-titles/9.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h1 className="pagetitle__heading">Software Dev Services</h1>
            <p className="pagetitle__desc">
              With shorter product cycles, innovation, and mergers contributing
              to constant change, you are faced making business decisions every
              day.
            </p>
            <div className="d-flex align-items-center flex-wrap">
              <a
                href="request-quote.html"
                className="btn btn__white btn__icon mr-30"
              >
                <span>Get Started</span>
                <i className="icon-arrow-right" />
              </a>
              <a
                className="video__btn video__btn-rounded video__btn-white popup-video"
                href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              >
                <div className="video__player">
                  <i className="fa fa-play" />
                </div>
                <span className="video__btn-title color-white">Our Video!</span>
              </a>
            </div>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="it-solutions.html">IT Solutions</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Software Dev
                </li>
              </ol>
            </nav>
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
