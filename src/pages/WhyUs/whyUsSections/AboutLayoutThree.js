import React from "react";
import img1 from "../../../assets/images/about/2.jpg";

export default function AboutLayoutThree() {
  return (
    <section id="about" className="about-layout3 pt-130 pb-40">
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
            <p>
              As one of the world's largest ITService Providers, our deep pool
              of certified engineers and IT staff are ready to help you to keep
              your IT business safe &amp; ensure high availability.
            </p>
            <ul className="list-items list-items-layout2 list-horizontal list-unstyled d-flex flex-wrap mt-40">
              <li>Eliminate Repeat Entry</li>
              <li>Simpliy Communication</li>
              <li>Drive Business Process</li>
              <li>Speed Up Transactions</li>
              <li>Structure Data &amp; Docs</li>
              <li>Automate Workflows</li>
            </ul>
          </div>
          {/* /.col-xl-5 */}
        </div>
        {/* /.row */}
        <div className="row align-items-center mt-60">
          <div className="col-sm-12 col-md-12 col-lg-7">
            <div className="about__img about__img-1">
              <img src={img1} alt="about" />
            </div>
            {/* /.about-img */}
          </div>
          {/* /.col-lg-5 */}
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="about__img">
              <img src={img1} alt="about" />
            </div>
            {/* /.about-img */}
          </div>
          {/* /.col-lg-5 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
