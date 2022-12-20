import React from "react";

export default function BannerLayoutFour() {
  return (
    <section className="banner-layout4 py-0 bg-img-page-title-faq">
      <div className="container-fluid px-0">
        <div className="row row-no-gutter">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 background-banner d-flex bg-img-page-title-faq-inner">
       
            <div className="cta-banner bg-primary align-self-end">
              <div className="cta__icon color-white">
                <i className="icon-developer" />
              </div>
              <h4 className="cta__title color-white">Since 1999</h4>
              <p className="cta__desc color-white mb-25">
                Provide users with appropriate view and access to requests,
                problems, changes, contracts, solutions, and reports.
              </p>
              <a href="#" className="btn btn__link btn__white btn__icon px-0">
                <span>Find Your Solution</span>{" "}
                <i className="icon-arrow-right" />
              </a>
            </div>
            {/* /.cta-banner */}
          </div>
          {/* /.col-xl-6 */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 fancybox-light">
            <div className="inner-padding">
              <div className="row">
                <div className="col-12">
                  <div className="heading heading-light mb-60">
                    <h3 className="heading__title mb-30">
                      Easy solutions for all difficult IT problems, keep
                      business safe &amp; ensure high availability.
                    </h3>
                  </div>
                  {/* /.heading */}
                </div>
                <div className="col-sm-6">
                  {/* fancybox item #1 */}
                  <div className="fancybox-item">
                    <div className="fancybox__icon">
                      <i className="icon-coding" />
                    </div>
                    {/* /.fancybox__icon */}
                    <div className="fancybox__content">
                      <h4 className="fancybox__title">Software Asset</h4>
                      <p className="fancybox__desc">
                        All aspects of your software assets including
                        purchasing, deployment &amp; maintenance.
                      </p>
                    </div>
                    {/* /.fancybox-content */}
                  </div>
                  {/* /.fancybox-item */}
                </div>
                {/* /.col-sm-6 */}
                <div className="col-sm-6">
                  {/* fancybox item #2 */}
                  <div className="fancybox-item">
                    <div className="fancybox__icon">
                      <i className="icon-programming2" />
                    </div>
                    {/* /.fancybox__icon */}
                    <div className="fancybox__content">
                      <h4 className="fancybox__title">Privileged Access</h4>
                      <p className="fancybox__desc">
                        Extend proven Tech best practices to HR, finance, and
                        other service delivery areas.
                      </p>
                    </div>
                    {/* /.fancybox-content */}
                  </div>
                  {/* /.fancybox-item */}
                </div>
                {/* /.col-sm-6 */}
                <div className="col-12">
                  <div className="d-flex flex-wrap read-note">
                    <div className="rating mb-10 mr-40">
                      <i className="fas fa-star color-primary" />
                      <i className="fas fa-star color-primary" />
                      <i className="fas fa-star color-primary" />
                      <i className="fas fa-star color-primary" />
                      <i className="fas fa-star color-primary" />
                    </div>
                    <p className="read-note__text color-white">
                      <span className="font-weight-bold text-underlined">
                        99.9% Customer Satisfaction
                      </span>
                      based on 750+ reviews and 20,000 Objective Resource
                    </p>
                  </div>
                </div>
              </div>
              {/* /.row */}
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
