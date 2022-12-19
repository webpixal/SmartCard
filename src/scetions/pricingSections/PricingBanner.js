import React from "react";

export default function PricingBanner() {
  return (
    <section className="pricing pt-0">
      <div className="container">
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
        <div className="row">
          <div className="col-12">
            <p className="text__link text-center mt-10 mb-0">
              Innovative and Sustainable Solutions,
              <a
                href="#"
                className="btn btn__link btn__secondary btn__icon px-0"
              >
                <span>Find Your Solution</span>{" "}
                <i className="icon-arrow-right" />
              </a>
            </p>
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
