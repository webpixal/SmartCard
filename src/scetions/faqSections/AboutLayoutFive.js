import React from "react";

export default function AboutLayoutFive() {
  return (
    <section className="about-layout2 animated-Progressbars">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="heading mb-30">
              <div className="d-flex align-items-center mb-20">
                <div className="divider divider-primary mr-30" />
                <h2 className="heading__subtitle mb-0">
                  Timely Service Delivery &amp; Incident Resolutions!!{" "}
                </h2>
              </div>
              <h3 className="heading__title mb-40">
                Manages service delivery across various business like, HR, Legal
                and other IT departments!!
              </h3>
            </div>
          </div>
          {/* /.col-xl-5 */}
        </div>
        {/* /.row */}
        <div className="row about__Text">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1">
            <i className="icon-quote" />
            <p>
              SmartData has been helping organizations throughout the World to
              manage their IT with our unique approach to technology management
              and consultancy solutions. Provide users with appropriate view and
              access permissions to requests, problems, changes, contracts,
              assets, solutions, and reports{" "}
            </p>
            <img
              src="assets/images/about/singnture.png"
              alt="singnture"
              className="mb-20"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1">
            <p className="mb-40">
              As one of the world's largest ITService Providers, our deep pool
              of certified engineers and IT staff are ready to help you to keep
              your IT business safe &amp; ensure high availability.
            </p>
            {/* progress 1 */}
            <div className="progress-item">
              <h5 className="progress__title">Cyber Security</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  role="progressbar"
                >
                  <span className="progress__percentage" />
                </div>
              </div>
              {/* /.progress */}
            </div>
            {/* /.progress-item  */}
            {/* progress 2 */}
            <div className="progress-item">
              <h5 className="progress__title">Cloud Computing</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  aria-valuenow={87}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  role="progressbar"
                >
                  <span className="progress__percentage" />
                </div>
              </div>
              {/* /.progress */}
            </div>
            {/* /.progress-item  */}
            {/* progress 3 */}
            <div className="progress-item">
              <h5 className="progress__title">Cloud Computing</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  aria-valuenow={81}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  role="progressbar"
                >
                  <span className="progress__percentage" />
                </div>
              </div>
              {/* /.progress */}
            </div>
            {/* /.progress-item  */}
          </div>
          {/* /.col-xl-5 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
