import React from "react";
import Slider from "react-slick";
import One from "../../assets/images/sliders/1.jpg";
import Two from "../../assets/images/sliders/2.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    // appendDots: (dots) => (
    //   <div>
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
  };

  return (
    <div className="slider">
      <div className="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0">
        <Slider {...settings}>
          <div className="bg-slider-img">
            <div className="slide-item align-v-h bg-overlay bg-overlay-gradient">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                    <div className="slide__content">
                      <h2 className="slide__title">
                        We Run All Kinds Of IT Services That Vow Your Success
                      </h2>
                      <p className="slide__desc">
                        We are experienced professionals who understand that It
                        services is changing, and are true partners who care
                        about your success. Our team provides a consultative
                        approach on emerging technology.
                      </p>
                      <a href="#" className="btn btn__primary btn__icon mr-30">
                        <span>More About Us</span>
                        <i className="icon-arrow-right" />
                      </a>
                      <a href="projects-grid.html" className="btn btn__white">
                        Our Services
                      </a>
                    </div>
                    {/* /.slide-content */}
                  </div>
                  {/* /.col-xl-7 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
          </div>
          <div className="bg-img-two">
            <div className="slide-item align-v-h bg-overlay bg-overlay-gradient">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                    <div className="slide__content">
                      <h2 className="slide__title">
                        Keep Business Safe And Ensure High Availability.
                      </h2>
                      <p className="slide__desc">
                        We are experienced professionals who understand that It
                        services is changing, and are true partners who care
                        about your success. Our team provides a consultative
                        approach on emerging technology.
                      </p>
                      <a href="#" className="btn btn__primary btn__icon mr-30">
                        <span>More About Us</span>
                        <i className="icon-arrow-right" />
                      </a>
                      <a href="projects-grid.html" className="btn btn__white">
                        Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
