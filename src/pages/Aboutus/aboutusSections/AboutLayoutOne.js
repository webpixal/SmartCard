import React from "react";
import img1 from "../../../assets/images/about/singnture.png";
import img2 from "../../../assets/images/testimonials/thumbs/1.png";
import img3 from "../../../assets/images/about/1.jpg";

export default function AboutLayoutOne() {
  return (
    <section className="about-layout1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
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
            {/* /heading */}
            <div className="position-relative offset-xl-1">
              <i className="icon-quote" />
              <p className="mb-40">
                SmartData has been helping organizations throughout the World to
                manage their IT with our unique approach to technology
                management and consultancy solutions with appropriate view and
                permissions to requests, problems, changes, contracts, assets..
              </p>
              <ul className="list-items list-items-layout2 list-unstyled d-flex flex-wrap list-horizontal mb-50">
                <li>Eliminate Repeat Entry</li>
                <li>Simplify Communication</li>
                <li>Drive Business Process</li>
                <li>Speed Up Transactions</li>
                <li>Structure Data &amp; Docs</li>
                <li>Automate Workflows</li>
              </ul>
              <img src={img1} alt="singnture" />
            </div>
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
            <div className="about__img mb-40">
              <img src={img3} alt="about" />
              <blockquote className="blockquote d-flex align-items-end mb-0">
                <div className="blockquote__avatar">
                  <img src={img2} alt="thumb" />
                </div>
                <div className="blockquote__content">
                  <h4 className="blockquote__title mb-0">
                    As one of the world's largest ITService Providers with over
                    120 engineers and IT support staff are ready to help.
                  </h4>
                </div>
                {/* /.blockquote__content */}
              </blockquote>
              {/* /.blockquote */}
            </div>
            {/* /.about-img */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
