import React from "react";
import img2 from "../../../assets/images/banners/5.jpg";

export default function BannerLayoutThree() {
  return (
    <section
      id="banner3"
      className="banner-layout3 pb-70 bg-slider-img-Banner-multi"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 fancybox-light">
            <div className="heading heading-light mb-60">
              <h3 className="heading__title mb-30">
                Keep business safe &amp; ensure high availability.
              </h3>
              <p className="heading__desc">
                As one of the world's largest ITService Providers, our deep pool
                of certified engineers and IT staff are ready to help you to
                keep your IT business safe &amp; ensure high availability.
              </p>
            </div>
            {/* /.heading */}
            {/* fancybox item #1 */}
            <div className="fancybox-item d-flex flex-wrap">
              <div className="fancybox__icon">
                <i className="icon-coding" />
              </div>
              {/* /.fancybox__icon */}
              <div className="fancybox__content">
                <h4 className="fancybox__title">Knowledge Base</h4>
                <p className="fancybox__desc">
                  Software assets including purchasing, deployment &amp;
                  maintenance. Manage all aspects of your software assets
                  including purchasing, deployment, maintenance, utilization,
                  and disposal.
                </p>
                <a href="#" className="btn btn__white btn__link">
                  <span>Read More</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.fancybox-content */}
            </div>
            {/* /.fancybox-item */}
            {/* fancybox item #2 */}
            <div className="fancybox-item d-flex flex-wrap">
              <div className="fancybox__icon">
                <i className="icon-programming2" />
              </div>
              {/* /.fancybox__icon */}
              <div className="fancybox__content">
                <h4 className="fancybox__title">Custom Requests</h4>
                <p className="fancybox__desc">
                  Build and publish dynamic request templates with associated
                  workflows, all aspects of your software assets including
                  purchasing, deployment, maintenance, utilization, and
                  disposal.
                </p>
                <a href="#" className="btn btn__white btn__link">
                  <span>Read More</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.fancybox-content */}
            </div>
            {/* /.fancybox-item */}
            {/* fancybox item #3 */}
            <div className="fancybox-item d-flex flex-wrap">
              <div className="fancybox__icon">
                <i className="icon-script" />
              </div>
              {/* /.fancybox__icon */}
              <div className="fancybox__content">
                <h4 className="fancybox__title">License Management</h4>
                <p className="fancybox__desc">
                  Build and publish dynamic request templates with associated
                  workflows, all aspects of your software assets including
                  purchasing, deployment, maintenance, utilization, and
                  disposal.
                </p>
                <a href="#" className="btn btn__white btn__link">
                  <span>Read More</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.fancybox-content */}
            </div>
            {/* /.fancybox-item */}
          </div>
          {/* /.col-xl-5 */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
            <div className="sticky-top">
              <div className="banner-img">
                <img src={img2} alt="banner" />
                <a
                  className="video__btn video__btn-white popup-video"
                  href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                >
                  <div className="video__player">
                    <i className="fa fa-play" />
                  </div>
                </a>
              </div>
              <div className="d-flex flex-wrap justify-content-end read-note mt-40">
                <div className="rating mb-10 mr-50">
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                </div>
                <p className="read-note__text color-white">
                  <span className="font-weight-bold text-underlined">
                    99.9% Customer Satisfaction
                  </span>
                  based on 750+ reviews and 20,000 Objective Resource
                </p>
              </div>
            </div>
          </div>
          {/* /.col-xl-7 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
