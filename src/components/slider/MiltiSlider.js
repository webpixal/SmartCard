import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/timeline/1.jpg";
import img2 from "../../assets/images/timeline/2.jpg";

export default function MiltiSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
  };
  //   data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "arrows": true, "dots": false, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 1}}, {"breakpoint": 768, "settings": {"slidesToShow": 1}}, {"breakpoint": 570, "settings": {"slidesToShow": 1}}]}'

  return (
    <div className="carousel-block">
      <div className="row">
        <Slider {...settings}>
          <div className="col-sm-12 col-md-12 col-lg-6">
            {/* timeline Item #1 */}
            <div className="timeline-item row align-items-end">
              <div className="timeline__img col-sm-6">
                <img src={img1} alt="timeline" />
              </div>
              <div className="timeline__content col-sm-6">
                <p className="timeline__desc">
                  Our support works around the clock to ensure your work is
                  secure and monitored safely access to over 99 IT professionals
                  working to help you
                </p>
                <h4 className="timeline__year mb-0">2005</h4>
              </div>
            </div>
            {/* /.timeline-item */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            {/* timeline Item #2 */}
            <div className="timeline-item row align-items-end">
              <div className="timeline__img col-sm-6">
                <img src={img2} alt="timeline" />
              </div>
              <div className="timeline__content col-sm-6">
                <p className="timeline__desc">
                  Providing consulting expertise on a specific technology,
                  strategizing on IT, providing a security assessment, or
                  managing IT infrastructure.
                </p>
                <h4 className="timeline__year mb-0">2010</h4>
              </div>
            </div>
            {/* /.timeline-item */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            {/* timeline Item #3 */}
            <div className="timeline-item row">
              <div className="timeline__content col-sm-6">
                <h4 className="timeline__year">2015</h4>
                <p className="timeline__desc">
                  We partner with you to enable your technology so you mfocus on
                  your organization’s mission leverage our talent, and
                  creativity.
                </p>
              </div>
              <div className="timeline__img col-sm-6">
                <img src={img1} alt="timeline" />
              </div>
            </div>
            {/* /.timeline-item */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            {/* timeline Item #4 */}
            <div className="timeline-item row">
              <div className="timeline__content col-sm-6">
                <h4 className="timeline__year">2020</h4>
                <p className="timeline__desc">
                  Our people are held to the highest level accountability to
                  ensure you are always satisfied with your results and
                  commitment
                </p>
              </div>
              <div className="timeline__img col-sm-6">
                <img src={img2} alt="timeline" />
              </div>
            </div>
            {/* /.timeline-item */}
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            {/* timeline Item #1 */}
            <div className="timeline-item row">
              <div className="timeline__content col-sm-6">
                <h4 className="timeline__year">2015</h4>
                <p className="timeline__desc">
                  We partner with you to enable your technology so you mfocus on
                  your organization’s mission leverage our talent, and
                  creativity.
                </p>
              </div>
              <div className="timeline__img col-sm-6">
                <img src={img1} alt="timeline" />
              </div>
            </div>
            {/* /.timeline-item */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            {/* timeline Item #2 */}
            <div className="timeline-item row">
              <div className="timeline__content col-sm-6">
                <h4 className="timeline__year">2020</h4>
                <p className="timeline__desc">
                  Our people are held to the highest level accountability to
                  ensure you are always satisfied with your results and
                  commitment
                </p>
              </div>
              <div className="timeline__img col-sm-6">
                <img src={img2} alt="timeline" />
              </div>
            </div>
            {/* /.timeline-item */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            {/* timeline Item #3 */}
            <div className="timeline-item row align-items-end">
              <div className="timeline__img col-sm-6">
                <img src={img1} alt="timeline" />
              </div>
              <div className="timeline__content col-sm-6">
                <p className="timeline__desc">
                  Our support works around the clock to ensure your work is
                  secure and monitored safely access to over 99 IT professionals
                  working to help you
                </p>
                <h4 className="timeline__year mb-0">2005</h4>
              </div>
            </div>
            {/* /.timeline-item */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            {/* timeline Item #4 */}
            <div className="timeline-item row align-items-end">
              <div className="timeline__img col-sm-6">
                <img src={img2} alt="timeline" />
              </div>
              <div className="timeline__content col-sm-6">
                <p className="timeline__desc">
                  Providing consulting expertise on a specific technology,
                  strategizing on IT, providing a security assessment, or
                  managing IT infrastructure.
                </p>
                <h4 className="timeline__year mb-0">2010</h4>
              </div>
            </div>
            {/* /.timeline-item */}
          </div>
        </Slider>
      </div>
    </div>
  );
}
