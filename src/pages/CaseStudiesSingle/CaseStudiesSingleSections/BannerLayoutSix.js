import React from "react";
import img3 from "../../../assets/images/banners/11.jpg";

export default function BannerLayoutSix() {
  return (
    <section className="banner-layout6 pb-0 bg-slider-img-Banner-multi">
      <div className="banner-bg bg-slider-img-Banner-multi">
        {/* <div className="bg-img">
          <img src="assets/images/backgrounds/1.jpg" alt="background" />
        </div> */}
      </div>
      <div className="container">
        <div className="row heading heading-light mb-60">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="divider divider-primary mb-20" />
            <h3 className="heading__title">
              Provides consultative approach on emerging technology.{" "}
            </h3>
          </div>
          {/* /col-lg-5 */}
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <div className="row">
              <div className="col-sm-6">
                <p className="heading__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </p>
              </div>
              {/* /.col-sm-6 */}
              <div className="col-sm-6">
                <p className="heading__desc">
                  SmartData been helping organizations and Providers through the
                  World to manage their IT with our unique approach to
                  technology management and consultancy solutions.{" "}
                </p>
              </div>
              {/* /.col-sm-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        <div className="row">
          <div className="col-12">
            <img src={img3} alt="banner" />
            <div className="video__btn-wrapper">
              <a
                className="video__btn video__btn-white popup-video"
                href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              >
                <div className="video__player">
                  <i className="fa fa-play" />
                </div>
                <span className="video__btn-title">
                  Watch Our Presentation!
                </span>
              </a>
            </div>
          </div>
          {/* /.col-xl-5 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
