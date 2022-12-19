import React from "react";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="pricing pt-130 bg-top-center bg-slider-img-Banner-Pricing"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-50">
              <h2 className="heading__subtitle">
                Suitable For Small To Midsize Businesses
              </h2>
              <h3 className="heading__title">
                Effective &amp; flexible pricing that adapts your needs!
              </h3>
            </div>
            {/* /.heading */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        <div className="row row-no-gutter pricing-wrapper">
          {/* pricing item #1*/}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="pricing-item d-flex flex-column justify-content-between">
              <div>
                <div className="pricing__top">For Small Teams</div>
                <div className="pricing__header">
                  <h5 className="pricing__title">Starter Plan</h5>
                  <div className="pricing__price">
                    <span className="pricing__currency">$</span>
                    <span>49,99</span>
                    <span className="pricing__time">/Monthly</span>
                  </div>
                </div>
                {/* /.pricing__header  */}
                <div className="pricing__content">
                  <p className="pricing__desc">
                    Fast project turnaround time, substantial cost savings &amp;
                    quality standards.
                  </p>
                  <ul className="pricing__list list-items list-items-layout2 list-unstyled">
                    <li>Five Brand Monitors</li>
                    <li>Five Keyword Monitors</li>
                    <li>Full Social Profiles</li>
                  </ul>
                </div>
                {/* /.pricing__content  */}
              </div>
              <div className="pricing__footer">
                <a href="#" className="btn btn__secondary btn__block btn__icon">
                  <span>Purchase Now</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.pricing__footer  */}
            </div>
            {/* /.pricing-item */}
          </div>
          {/* /.col-lg-4 */}
          {/* pricing item #2*/}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="pricing-item d-flex flex-column justify-content-between">
              <div>
                <div className="pricing__top">
                  For Small And Beginning Business
                </div>
                <div className="pricing__header">
                  <h5 className="pricing__title">Basic Plan</h5>
                  <div className="pricing__price">
                    <span className="pricing__currency">$</span>
                    <span>79,99</span>
                    <span className="pricing__time">/Monthly</span>
                  </div>
                </div>
                {/* /.pricing__header  */}
                <div className="pricing__content">
                  <p className="pricing__desc">
                    Fast project turnaround time, substantial cost savings &amp;
                    quality standards.
                  </p>
                  <ul className="pricing__list list-items list-items-layout2 list-unstyled">
                    <li>Five Brand Monitors</li>
                    <li>Five Keyword Monitors</li>
                    <li>Full Social Profiles</li>
                    <li>500 Search Results </li>
                  </ul>
                </div>
                {/* /.pricing__content  */}
              </div>
              <div className="pricing__footer">
                <a href="#" className="btn btn__primary btn__block btn__icon">
                  <span>Purchase Now</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.pricing__footer  */}
            </div>
            {/* /.pricing-item */}
          </div>
          {/* /.col-lg-4 */}
          {/* pricing item #3*/}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="pricing-item d-flex flex-column justify-content-between">
              <div>
                <div className="pricing__top">For Big Teams And Enterprise</div>
                <div className="pricing__header">
                  <h5 className="pricing__title">Advanced Plan</h5>
                  <div className="pricing__price">
                    <span className="pricing__currency">$</span>
                    <span>99,99</span>
                    <span className="pricing__time">/Monthly</span>
                  </div>
                </div>
                {/* /.pricing__header  */}
                <div className="pricing__content">
                  <p className="pricing__desc">
                    Fast project turnaround time, substantial cost savings &amp;
                    quality standards.
                  </p>
                  <ul className="pricing__list list-items list-items-layout2 list-unstyled">
                    <li>Five Brand Monitors</li>
                    <li>Five Keyword Monitors</li>
                    <li>Basic Quota </li>
                    <li>PDF reports</li>
                    <li>Full Social Profiles</li>
                    <li>500 Search Results </li>
                  </ul>
                </div>
                {/* /.pricing__content  */}
              </div>
              <div className="pricing__footer">
                <a href="#" className="btn btn__secondary btn__block btn__icon">
                  <span>Purchase Now</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.pricing__footer  */}
            </div>
            {/* /.pricing-item */}
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
