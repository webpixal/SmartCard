import React from "react";

export default function RequestQuoteTitle() {
  return (
    <section className="page-title page-title-layout12 text-center bg-overlay bg-overlay-gradient bg-parallax">
      <div className="bg-img">
        <img src="assets/images/page-titles/13.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
            <h1 className="pagetitle__heading">Request A Quote</h1>
            <p className="pagetitle__desc">
              As one of the world's largest ITService Providers, our deep pool
              of certified engineers and IT staff are ready to help you to keep
              your IT business safe &amp; ensure high availability.
            </p>
            <a
              className="video__btn video__btn-rounded video__btn-white popup-video"
              href="https://www.youtube.com/watch?v=nrJtHemSPW4"
            >
              <div className="video__player">
                <i className="fa fa-play" />
              </div>
            </a>
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
