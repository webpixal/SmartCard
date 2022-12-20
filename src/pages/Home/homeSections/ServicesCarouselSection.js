import React from "react";
import OfferingSlider from "../../../components/slider/OfferingSlider";

export default function ServicesCarouselSection() {
  return (
    <section className="services-layout2 services-carousel pt-130 bg-gray">
      <div className="container">
        <div className="row heading mb-40">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <div className="divider divider-primary mr-30" />
              <h2 className="heading__subtitle mb-0">
                Nationwide Service, Local Expertise
              </h2>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7">
            <h3 className="heading__title">
              Offering the latest software and IT services to our customers!
            </h3>
          </div>
          {/* /col-lg-5 */}
          <div className="col-sm-12 col-md-12 col-lg-5">
            <p className="heading__desc">
              Improve efficiency, leverage tech, and provide better customer
              experiences with the modern technology services available allover
              the world. Our skilled personnel, utilising the latest processing
              software, combined with decades of experience.
            </p>
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-12">
            <OfferingSlider />
            {/* /.carousel */}
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-12 btn-wrapper">
            <a href="#" className="btn btn__secondary btn__bordered btn__icon">
              <span>Explore All Services</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
