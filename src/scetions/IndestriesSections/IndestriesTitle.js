import React from "react";

export default function IndestriesTitle() {
  return (
    <section className="page-title page-title-layout10 bg-overlay bg-overlay-gradient bg-parallax">
      <div className="bg-img">
        <img src="assets/images/page-titles/8.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h1 className="pagetitle__heading">Industries</h1>
            <p className="pagetitle__desc">
              We are experienced professionals who understand that It services
              is changing, and are true partners who care about your success.
              Our team provides a consultative approach on emerging technology.
            </p>
            <div className="d-flex align-items-center flex-wrap">
              <a href="contact-us.html" className="btn btn__white mr-30">
                Contact Us
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
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
