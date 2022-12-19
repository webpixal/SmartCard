import React from "react";
import img1 from "../../assets/images/work-process/1.jpg";

export default function PricingWorkProcess() {
  return (
    <section className="work-process pb-100 bg-img-page-title-faq">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="sticky-top">
              <div className="tab-content mb-50">
                <div className="tab-pane fade show active" id="tab1">
                  <img src={img1} className="rounded" alt="banner" />
                </div>
                <div className="tab-pane fade" id="tab2">
                  <img src={img1} className="rounded" alt="banner" />
                </div>
                <div className="tab-pane fade" id="tab3">
                  <img src={img1} className="rounded" alt="banner" />
                </div>
                <div className="tab-pane fade" id="tab4">
                  <img src={img1} className="rounded" alt="banner" />
                </div>
              </div>
              {/* /.tab-content */}
              <p className="color-white font-weight-bold fz-16 mb-30">
                SmartData been helping organizations throughout the World to
                manage their IT with our unique approach to technology
                management and consultancy solutions.{" "}
              </p>
              <a
                href="#"
                className="btn btn__white btn__white-style2 btn__icon mb-30"
              >
                <span>Request Demo</span>
                <i className="icon-arrow-right" />
              </a>
            </div>
          </div>
          {/* /.col-lg-5 */}
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <div className="heading mb-80">
              <h2 className="heading__subtitle">How We Works!!</h2>
              <h3 className="heading__title color-white">
                Deliver Only Exceptional Quality, And Improve!{" "}
              </h3>
            </div>
            <nav className="nav nav-tabs">
              {/* process Item #1 */}
              <a
                className="process-item d-flex flex-wrap active"
                data-toggle="tab"
                href="#tab1"
              >
                <div className="process-item__icon">
                  <i className="icon-cyberspace" />
                </div>
                {/* /.process-item__icon */}
                <div className="process-item__content">
                  <h4 className="process-item__title">Brainstorming</h4>
                  <p className="process-item__desc">
                    The first step is to take the projects data &amp; think
                    about to manage all aspects of your software assets
                    including maintenance. Our skilled personnel along with a
                    high-level look at the client’s network and suggestions for
                    strategic direction utilising the latest processing
                    software.
                  </p>
                </div>
              </a>
              {/* /.process-item */}
              {/* process Item #2 */}
              <a
                className="process-item d-flex flex-wrap"
                data-toggle="tab"
                href="#tab2"
              >
                <div className="process-item__icon">
                  <i className="icon-algorithm" />
                </div>
                {/* /.process-item__icon */}
                <div className="process-item__content">
                  <h4 className="process-item__title">Concept Prototype</h4>
                  <p className="process-item__desc">
                    To know about the product, customers &amp; competitors offer
                    integral communication services software assets. Our skilled
                    personnel, utilising the latest processing software,
                    combined with decades of experience. Once the critical
                    situation resolved, work on the ITA roadmap resumed.
                  </p>
                </div>
              </a>
              {/* /.process-item */}
              {/* process Item #3 */}
              <a
                className="process-item d-flex flex-wrap"
                data-toggle="tab"
                href="#tab3"
              >
                <div className="process-item__icon">
                  <i className="icon-programming3" />
                </div>
                {/* /.process-item__icon */}
                <div className="process-item__content">
                  <h4 className="process-item__title">Design Layout</h4>
                  <p className="process-item__desc">
                    Start to work on the design taking with collected data,
                    we're responsible for our process and results. Skilled
                    personnel, utilising the latest processing software,
                    combined with decades of experience about the product &amp;
                    competitors offer integral communication services.
                  </p>
                </div>
              </a>
              {/* /.process-item */}
              {/* process Item #4 */}
              <a
                className="process-item d-flex flex-wrap"
                data-toggle="tab"
                href="#tab4"
              >
                <div className="process-item__icon">
                  <i className="icon-browser" />
                </div>
                {/* /.process-item__icon */}
                <div className="process-item__content">
                  <h4 className="process-item__title">Evaluation</h4>
                  <p className="process-item__desc">
                    Reach a conclusion from the investigations about product and
                    we thank each of our great clients projects, latest
                    software, combined with decades of experience.
                  </p>
                </div>
              </a>
              {/* /.process-item */}
            </nav>
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
