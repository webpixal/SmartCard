import React from "react";
import img from "../../assets/images/services/4.jpg";

export default function ServicesLayoutOne() {
  return (
    <section className="services-layout1 bg-gray pt-130 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-50">
              <h2 className="heading__subtitle">
                Nationwide Service, Local Expertise
              </h2>
              <h3 className="heading__title">
                View &amp; access permissions to requests, solutions, and
                reports with our experienced Staff!
              </h3>
            </div>
            {/* /.heading */}
          </div>
          {/* /.col-lg-8 */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="service-item">
              <div className="service__content">
                <h4 className="service__title">
                  Education And <br /> Non-Profit
                </h4>
                <p className="service__desc">
                  Drive your business and manage risk with a global industry
                  leader in cybersecurity, cloud, and managed security services
                  and extend your team with leading experts.
                </p>
                <a
                  href="services-it-solutions-single.html"
                  className="btn btn__secondary"
                >
                  <span>Read More</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.service__content */}
              <div className="service__img">
                <img src={img} alt="service" className="w-100" />
              </div>
              {/* /.service__img */}
            </div>
            {/* /.service-item */}
          </div>
          {/* /.col-lg-4 */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="service-item">
              <div className="service__content">
                <h4 className="service__title">
                  Accounting And <br /> Finance
                </h4>
                <p className="service__desc">
                  Cloud computing is the on-demand availability of computer
                  system resources, especially data storage and computing power,
                  without direct active management{" "}
                </p>
                <a
                  href="services-it-solutions-single.html"
                  className="btn btn__secondary"
                >
                  <span>Read More</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.service__content */}
              <div className="service__img">
                <img src={img} alt="service" className="w-100" />
              </div>
              {/* /.service__img */}
            </div>
            {/* /.service-item */}
          </div>
          {/* /.col-lg-4 */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="service-item">
              <div className="service__content">
                <h4 className="service__title">
                  Government And <br /> Public
                </h4>
                <p className="service__desc">
                  Trying to solve all your IT challenges internally can become
                  costly and a major distraction, Leveraging knowledgeable IT
                  consulting firms like ushelps
                </p>
                <a
                  href="services-it-solutions-single.html"
                  className="btn btn__secondary"
                >
                  <span>Read More</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.service__content */}
              <div className="service__img">
                <img src={img} alt="service" className="w-100" />
              </div>
              {/* /.service__img */}
            </div>
            {/* /.service-item */}
          </div>
          {/* /.col-lg-4 */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="service-item">
              <div className="service__content">
                <h4 className="service__title">
                  Energy And
                  <br /> Utilities
                </h4>
                <p className="service__desc">
                  With shorter product cycles, rapid innovation, and mergers
                  contributing to constant change, you are faced with making
                  business decisions every day
                </p>
                <a
                  href="services-it-solutions-single.html"
                  className="btn btn__secondary"
                >
                  <span>Read More</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.service__content */}
              <div className="service__img">
                <img src={img} alt="service" className="w-100" />
              </div>
              {/* /.service__img */}
            </div>
            {/* /.service-item */}
          </div>
          {/* /.col-lg-4 */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="service-item">
              <div className="service__content">
                <h4 className="service__title">
                  Legal Stuff And <br /> Law Firms
                </h4>
                <p className="service__desc">
                  While you can’t predict unexpected events, we’ll ensure the
                  right precautions are in place to minimize downtime and keep
                  you moving in the right direction.
                </p>
                <a
                  href="services-it-solutions-single.html"
                  className="btn btn__secondary"
                >
                  <span>Read More</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.service__content */}
              <div className="service__img">
                <img src={img} alt="service" className="w-100" />
              </div>
              {/* /.service__img */}
            </div>
            {/* /.service-item */}
          </div>
          {/* /.col-lg-4 */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="service-item service-item-custom bg-img-page-title-service ">
              <div>
                <h4 className="service__title">
                  450,000 client’s interactions!
                </h4>
                <p className="service__desc mb-30">
                  Provide users with appropriate view access to requests,
                  problems, changes, contracts &amp; solutions with experienced
                  professionals.
                </p>
                <p className="service__desc mb-30">
                  As one of the world's largest ITService Providers, we are
                  ready to help.
                </p>
              </div>
              <a
                href="services-it-solutions-single.html"
                className="btn btn__white btn__bordered btn__icon btn__xl"
              >
                <span>Download Brochure</span>
                <i className="icon-arrow-right" />
              </a>
            </div>
            {/* /.service-item */}
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
