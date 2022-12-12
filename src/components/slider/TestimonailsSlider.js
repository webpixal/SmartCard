import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import thumb1 from "../../assets/images/testimonials/thumbs/1.png";
import thumb2 from "../../assets/images/testimonials/thumbs/2.png";
import thumb3 from "../../assets/images/testimonials/thumbs/3.png";

export const TestimonailsSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <div className="testimonials testimonials-wrapper">
      <div className="slider-with-navs">
        <Slider arrows={false} asNavFor={nav2} ref={slider1}>
          {/* Testimonial #1 */}
          <div className="testimonial-item">
            <p className="testimonial__desc color-white">
              If you’re looking for a rewarding career and the chance to make an
              impact, you’ve come to the right place. We will transform your
              business through our techniques!
            </p>
            <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">Ahmed Abdallah</h4>
              <p className="testimonial__meta-desc">Digital Media Manager</p>
            </div>
            {/* /.testimonial-meta */}
          </div>
          {/* /. testimonial-item */}
          {/* Testimonial #2 */}
          <div className="testimonial-item">
            <p className="testimonial__desc color-white">
              If you’re looking for a rewarding career and the chance to make an
              impact, you’ve come to the right place. We will transform your
              business through our techniques!{" "}
            </p>
            <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">John Peter</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </div>
            {/* /.testimonial-meta */}
          </div>
          {/* /. testimonial-item */}
          {/* Testimonial #3 */}
          <div className="testimonial-item">
            <p className="testimonial__desc color-white">
              If you’re looking for a rewarding career and the chance to make an
              impact, you’ve come to the right place. We will transform your
              business through our techniques!
            </p>
            <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">Ayman</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </div>
            {/* /.testimonial-meta */}
          </div>
          {/* /. testimonial-item */}
          {/* Testimonial #2 */}
          <div className="testimonial-item">
            <p className="testimonial__desc color-white">
              {" "}
              If you’re looking for a rewarding career and the chance to make an
              impact, you’ve come to the right place. We will transform your
              business through our techniques!{" "}
            </p>
            <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">John Peter</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </div>
            {/* /.testimonial-meta */}
          </div>
          {/* /. testimonial-item */}
          {/* Testimonial #3 */}
          <div className="testimonial-item">
            <p className="testimonial__desc color-white">
              My project was a simple &amp; small task, but the persistence and
              determination turned it into an awesome and great project which
              make me happy .
            </p>
            <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">John Peter</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </div>
            {/* /.testimonial-meta */}
          </div>
          {/* /. testimonial-item */}
        </Slider>
      </div>
      <div className="slider-nav">
        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}>
          <div className="testimonial__thumb">
            <img src={thumb1} alt="author thumb" />
          </div>
          {/* /.testimonial-thumb */}
          <div className="testimonial__thumb">
            <img src={thumb2} alt="author thumb" />
          </div>
          {/* /.testimonial-thumb */}
          <div className="testimonial__thumb">
            <img src={thumb3} alt="author thumb" />
          </div>
          {/* /.testimonial-thumb */}
          <div className="testimonial__thumb">
            <img src={thumb2} alt="author thumb" />
          </div>
          {/* /.testimonial-thumb */}
          <div className="testimonial__thumb">
            <img src={thumb3} alt="author thumb" />
          </div>
          {/* /.testimonial-thumb */}
        </Slider>
      </div>
    </div>
  );
};
