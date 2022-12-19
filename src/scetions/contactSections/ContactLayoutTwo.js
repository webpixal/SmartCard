import React from "react";

export default function ContactLayoutTwo() {
  return (
    <section className="contact-layout2 pt-0 pb-80">
      <div className="container">
        <div className="row">
          {/* Contact panel #1 */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="contact-info-box">
              <h4 className="contact__info-box-title">London Office</h4>
              <ul className="contact__info-list list-unstyled">
                <li>
                  Email:{" "}
                  <a href="mailto:smartdata@7oroof.com">SmartData@7oroof.com</a>
                </li>
                <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                <li>
                  Phone: <a href="tel:5565454117">55 654 541 17</a>
                </li>
                <li>Hours: Mon-Fri: 8am – 7pm</li>
              </ul>
              {/* /.contact__info-list */}
            </div>
            {/* /.contact-info-box */}
          </div>
          {/* /.col-lg-4 */}
          {/* Contact panel #2 */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="contact-info-box">
              <h4 className="contact__info-box-title">Berlin Office</h4>
              <ul className="contact__info-list list-unstyled">
                <li>
                  Email:{" "}
                  <a href="mailto:smartdata@7oroof.com">SmartData@7oroof.com</a>
                </li>
                <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                <li>
                  Phone: <a href="tel:5565454117">55 654 541 17</a>
                </li>
                <li>Hours: Mon-Fri: 8am – 7pm</li>
              </ul>
              {/* /.contact__info-list */}
            </div>
            {/* /.contact-info-box */}
          </div>
          {/* /.col-lg-4 */}
          {/* Contact panel #3 */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="contact-info-box">
              <h4 className="contact__info-box-title">Manchester Office</h4>
              <ul className="contact__info-list list-unstyled">
                <li>
                  Email:{" "}
                  <a href="mailto:smartdata@7oroof.com">SmartData@7oroof.com</a>
                </li>
                <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                <li>
                  Phone: <a href="tel:5565454117">55 654 541 17</a>
                </li>
                <li>Hours: Mon-Fri: 8am – 7pm</li>
              </ul>
              {/* /.contact__info-list */}
            </div>
            {/* /.contact-info-box */}
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
