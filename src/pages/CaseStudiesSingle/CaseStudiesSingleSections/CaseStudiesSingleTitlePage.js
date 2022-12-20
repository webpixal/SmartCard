import React from "react";

export default function CaseStudiesSingleTitlePage() {
  return (
    <section className="page-title page-title-layout15 mt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-7">
            <nav>
              <ol className="breadcrumb mb-20">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="projects-grid.html">projects</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Financial’s Need For Strategic Advisor
                </li>
              </ol>
            </nav>
            <h1 className="pagetitle__heading">
              Financial’s Need For Strategic Advisor
            </h1>
            <p className="pagetitle__desc">
              Our security services can help ensure your business Trusted by the
              world's best organizations. You need information security services
              to proactively prevent and protect confidential data.
            </p>
          </div>
          {/* /.col-xl-8 */}
          <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1">
            <ul className="portfolio__meta-list list-unstyled d-flex flex-wrap">
              <li>
                <h5 className="portfolio__meta-title">Client</h5>
                <span className="portfolio__meta-items">Optime Logistics</span>
              </li>
              <li>
                <h5 className="portfolio__meta-title">Industry</h5>
                <span className="portfolio__meta-items">
                  Cargo, Logistics, Trucking, Shipping
                </span>
              </li>
              <li>
                <h5 className="portfolio__meta-title">Services</h5>
                <span className="portfolio__meta-items">
                  Consulting, Management, Security, Support
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
