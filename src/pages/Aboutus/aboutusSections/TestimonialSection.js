import React from "react";
import thumb3 from "../../../assets/images/testimonials/thumbs/1.png";
import map from "../../../assets/images/backgrounds/map.png";

export default function TestimonialSection() {
  return (
    <section className="testimonials pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={map} alt="map" />
            {/* Testimonial #1 */}
            <div className="testimonial-box">
              <div className="testimonial__thumb">
                <img src={thumb3} alt="author thumb" />
                <span className="pulsing-animation pulsing-animation-1" />
                <span className="pulsing-animation pulsing-animation-2" />
                <span className="pulsing-animation pulsing-animation-3" />
              </div>
              {/* /.testimonial-thumb */}
              <div className="testimonial__panel">
                <div className="testimonial__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </div>
              </div>
              {/* /.testimonial-panel */}
            </div>
            {/* /. testimonial-box */}
            {/* Testimonial #2 */}
            <div className="testimonial-box">
              <div className="testimonial__thumb">
                <img src={thumb3} alt="author thumb" />
                <span className="pulsing-animation pulsing-animation-1" />
                <span className="pulsing-animation pulsing-animation-2" />
                <span className="pulsing-animation pulsing-animation-3" />
              </div>
              {/* /.testimonial-thumb */}
              <div className="testimonial__panel">
                <div className="testimonial__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </div>
              </div>
              {/* /.testimonial-panel */}
            </div>
            {/* /. testimonial-box */}
            {/* Testimonial #3 */}
            <div className="testimonial-box">
              <div className="testimonial__thumb">
                <img src={thumb3} alt="author thumb" />
                <span className="pulsing-animation pulsing-animation-1" />
                <span className="pulsing-animation pulsing-animation-2" />
                <span className="pulsing-animation pulsing-animation-3" />
              </div>
              {/* /.testimonial-thumb */}
              <div className="testimonial__panel">
                <div className="testimonial__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </div>
              </div>
              {/* /.testimonial-panel */}
            </div>
            {/* /. testimonial-box */}
            {/* Testimonial #4 */}
            <div className="testimonial-box testimonial-hover-left">
              <div className="testimonial__thumb">
                <img src={thumb3} alt="author thumb" />
                <span className="pulsing-animation pulsing-animation-1" />
                <span className="pulsing-animation pulsing-animation-2" />
                <span className="pulsing-animation pulsing-animation-3" />
              </div>
              {/* /.testimonial-thumb */}
              <div className="testimonial__panel">
                <div className="testimonial__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </div>
              </div>
              {/* /.testimonial-panel */}
            </div>
            {/* /. testimonial-box */}
            {/* Testimonial #5 */}
            <div className="testimonial-box testimonial-hover-left">
              <div className="testimonial__thumb">
                <img src={thumb3} alt="author thumb" />
                <span className="pulsing-animation pulsing-animation-1" />
                <span className="pulsing-animation pulsing-animation-2" />
                <span className="pulsing-animation pulsing-animation-3" />
              </div>
              {/* /.testimonial-thumb */}
              <div className="testimonial__panel">
                <div className="testimonial__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </div>
              </div>
              {/* /.testimonial-panel */}
            </div>
            {/* /. testimonial-box */}
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <div className="pb-100 bg-slider-img-Banner-aboutus">
        <div className="container">
          <div className="cta d-flex align-items-center">
            <div className="cta__item d-flex align-items-center">
              <div className="cta__icon">
                <i className="icon-programmer" />
              </div>
              {/* /.cta__icon */}
              <div className="cta__content">
                <h4 className="cta__title">Small/Growing Business!</h4>
                <p className="cta__desc mb-0">
                  Professional IT support packages tailored to align with your
                  business objectives and meet your needs.
                </p>
              </div>
              {/* /.cta__content */}
            </div>
            {/* /.cta__item */}
            <div className="or-seperator">or</div>
            <div className="cta__item d-flex align-items-center">
              <div className="cta__content text-right">
                <h4 className="cta__title">Enterprise Level Organization</h4>
                <p className="cta__desc mb-0">
                  Professional IT support packages tailored to align with your
                  business objectives and meet your needs.
                </p>
              </div>
              {/* /.cta__content */}
              <div className="cta__icon">
                <i className="icon-developer" />
              </div>
              {/* /.cta__icon */}
            </div>
            {/* /.cta__item */}
          </div>
          {/* /.cta */}
          <p className="text__link text-center mt-40 mb-0">
            IT Management Solutions for your Business,
            <a href="#" className="btn btn__link btn__secondary btn__icon px-0">
              <span>Explore Our Plans</span> <i className="icon-arrow-right" />
            </a>
          </p>
        </div>
        {/* /.container */}
      </div>
    </section>
  );
}
