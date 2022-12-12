import React from "react";
import Slider from "react-slick";

export default function OfferingSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-server" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">
              IT Management <br /> Services
            </h4>
            <p className="service__desc">
              IT management service that manages and oversees the IT
              infrastructure of any civil organization responsible for network
              and operations which includes data{" "}
            </p>
            <ul className="list-items list-unstyled mb-30">
              <li>Business IT alignment</li>
              <li> IT financial management</li>
              <li> IT service management</li>
            </ul>
            <a href="it-solutions-single.html" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
          {/* /.service-content */}
        </div>
        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-cyberspace" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">
              Cyber Security
              <br /> Services
            </h4>
            <p className="service__desc">
              Drive your business and manage risk with a global industry leader
              in cybersecurity, cloud, and managed security services and extend
              your team with leading experts.
            </p>
            <ul className="list-items list-unstyled mb-30">
              <li>Internet security</li>
              <li>Automotive security</li>
              <li>Cyberwarfare</li>
            </ul>
            <a href="it-solutions-single.html" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
          {/* /.service-content */}
        </div>

        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-cloud-computing" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">
              Cloud Computing
              <br /> Services
            </h4>
            <p className="service__desc">
              Cloud computing is on-demand availability of computer system
              resources, especially data storage computing power, without direct
              active management by the user.
            </p>
            <ul className="list-items list-unstyled mb-30">
              <li>Private cloud services</li>
              <li>Public cloud services</li>
              <li>Hybrid cloud services</li>
            </ul>
            <a href="it-solutions-single.html" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
          {/* /.service-content */}
        </div>

        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-permission" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">
              IT Consulting <br /> Services
            </h4>
            <p className="service__desc">
              TTrying to solve all your IT challenges internally can become
              costly and a major distraction, Leveraging knowledgeable IT
              consulting firms like ushelps business.{" "}
            </p>
            <ul className="list-items list-unstyled mb-30">
              <li>Scoping &amp; planning</li>
              <li>Process &amp; system design</li>
              <li>Project management support</li>
            </ul>
            <a href="it-solutions-single.html" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
          {/* /.service-content */}
        </div>

        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-code" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">
              Software Dev
              <br /> Services
            </h4>
            <p className="service__desc">
              With shorter product cycles, innovation, and mergers contributing
              to constant change, you are faced making business decisions every
              day to advance.
            </p>
            <ul className="list-items list-unstyled mb-30">
              <li>Implementation</li>
              <li>Testing &amp; documenting</li>
              <li>Deployment &amp; maintenance</li>
            </ul>
            <a href="it-solutions-single.html" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
          {/* /.service-content */}
        </div>

        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-internet" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">
              Backup &amp; Recovery
              <br /> Services
            </h4>
            <p className="service__desc">
              While you can’t predict unexpected events, we’ll ensure the right
              precautions are in place to minimize downtime and keep you moving
              in the right direction.
            </p>
            <ul className="list-items list-unstyled mb-30">
              <li>Compression &amp; Deduplication</li>
              <li>Duplication &amp; Encryption</li>
              <li>Multiplexing &amp; Refactoring</li>
            </ul>
            <a href="it-solutions-single.html" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
          {/* /.service-content */}
        </div>

        <div></div>
      </Slider>
    </div>
  );
}
