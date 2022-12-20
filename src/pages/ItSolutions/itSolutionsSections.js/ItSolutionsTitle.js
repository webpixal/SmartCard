import React from "react";

export default function ItSolutionsTitle() {
  return (
    <section className="page-title page-title-layout8 bg-overlay bg-overlay-gradient bg-parallax">
      <div className="bg-img">
        <img src="assets/images/page-titles/8.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h1 className="pagetitle__heading">
              Keep Business Safe And Ensure High Availability.
            </h1>
            <p className="pagetitle__desc">
              We are experienced professionals who understand that It services
              is changing, and are true partners who care about your success.
              Our team provides a consultative approach on emerging technology.
            </p>
          </div>
          {/* /.col-xl-6 */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 cta-banner-wrapper d-flex justify-content-end">
            <div className="cta-banner text-center">
              <div
                className="slick-carousel"
                data-slick='{"slidesToShow": 1, "arrows": false, "dots": true}'
              >
                <div className="cta__item">
                  <div className="cta__icon">
                    <i className="icon-operating-system" />
                  </div>
                  <h4 className="cta__title">Software License</h4>
                  <p className="cta__desc">
                    Build dynamic request templates with associated workflows,
                    and tasks.
                  </p>
                </div>
                {/* /.cta__item */}
                <div className="cta__item">
                  <div className="cta__icon">
                    <i className="icon-dos" />
                  </div>
                  <h4 className="cta__title">Privileged Access</h4>
                  <p className="cta__desc">
                    Extend proven Tech best practices to HR, finance, and other
                    service delivery areas.
                  </p>
                </div>
                {/* /.cta__item */}
              </div>
              {/* /.slick-carousel */}
            </div>
            {/* /.cta-banner */}
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-12">
            <nav>
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  IT Solutions
                </li>
              </ol>
            </nav>
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
