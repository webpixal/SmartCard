import React from "react";

export default function LeaderShipTitle() {
  return (
    <section className="page-title page-title-layout3 bg-overlay bg-overlay-gradient bg-parallax">
      <div className="bg-img">
        <img src="assets/images/page-titles/3.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h1 className="pagetitle__heading">Leadership</h1>
            <p className="pagetitle__desc">
              Our team provides a consultative approach on emerging technology,
              experienced professionals who understand that true partners who
              care about your success.
            </p>
            <div className="d-flex align-items-center">
              <a href="contact-us.html" className="btn btn__white mr-30">
                Contact Us
              </a>
              <a
                href="request-quote.html"
                className="btn btn__white btn__bordered btn__icon"
              >
                <span>Get Started</span>
                <i className="icon-arrow-right" />
              </a>
            </div>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="about-us.html">Company</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Leadership
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
