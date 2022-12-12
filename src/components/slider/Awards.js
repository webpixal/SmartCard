import React from "react";
import Slider from "react-slick";
import miniimg from "../../assets/images/awards/icons/1.png";
import Two from "../../assets/images/awards/icons/2.png";
import Three from "../../assets/images/awards/icons/3.png";
import four from "../../assets/images/awards/icons/4.png";

export default function Awards() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {/* fancybox item #1 */}
      <div className="fancybox-item">
        <div className="fancybox__icon-img">
          <img src={miniimg} alt="icon" />
        </div>
        {/* /.fancybox__icon-img */}
        <div className="fancybox__content">
          <h4 className="fancybox__title">CSS Design Award</h4>
          <p className="fancybox__desc">
            A web design &amp; development award platform for digital folk,
            UI/UX peeps and inspiring leaders of the web.
          </p>
        </div>
        {/* /.fancybox-content */}
      </div>
      {/* /.fancybox-item */}
      {/* fancybox item #2 */}
      <div className="fancybox-item">
        <span className="pinned-ribbon" />
        <div className="fancybox__icon-img">
          <img src={Two} alt="icon" />
        </div>
        {/* /.fancybox__icon-img */}
        <div className="fancybox__content">
          <h4 className="fancybox__title">W3 Design Award</h4>
          <p className="fancybox__desc">
            Awards celebrates digital by honoring outstanding Websites, Web
            Marketing, Video, Sites, Apps &amp; Social content.
          </p>
        </div>
        {/* /.fancybox-content */}
      </div>
      {/* /.fancybox-item */}
      {/* fancybox item #3 */}
      <div className="fancybox-item">
        <div className="fancybox__icon-img">
          <img src={Three} alt="icon" />
        </div>
        {/* /.fancybox__icon-img */}
        <div className="fancybox__content">
          <h4 className="fancybox__title">The FWA Award</h4>
          <p className="fancybox__desc">
            Showcasing innovation every day since 2000, our mission is to
            showcase cutting edge creativity, regardless
          </p>
        </div>
        {/* /.fancybox-content */}
      </div>
      {/* /.fancybox-item */}
      {/* fancybox item #4 */}
      <div className="fancybox-item">
        <div className="fancybox__icon-img">
          <img src={four} alt="icon" />
        </div>
        {/* /.fancybox__icon-img */}
        <div className="fancybox__content">
          <h4 className="fancybox__title">WWW Awards</h4>
          <p className="fancybox__desc">
            The awards that recognize the talent and effort of the best web
            designers, developers and agencies in the world.
          </p>
        </div>
        {/* /.fancybox-content */}
      </div>
      <div></div>
      <div></div>
      <div></div>
      {/* /.fancybox-item */}
    </Slider>
  );
}
