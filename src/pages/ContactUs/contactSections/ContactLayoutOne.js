import React from "react";

export default function ContactLayoutOne() {
  return (
    <section className="contact-layout1 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-7 mb-3">
            <form
              className="contact-form"
              method="post"
              action="assets/php/contact.php"
              id="contactForm"
            >
              <div className="row">
                <div className="col-sm-12">
                  <h4 className="contact-panel__title">Get In Touch</h4>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      id="contact-name"
                      name="contact-name"
                      required=""
                    />
                  </div>
                </div>
                {/* /.col-lg-6 */}
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="contact-email"
                      name="contact-email"
                      required=""
                    />
                  </div>
                </div>
                {/* /.col-lg-6 */}
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      id="contact-Phone"
                      name="contact-phone"
                      required=""
                    />
                  </div>
                </div>
                {/* /.col-lg-6 */}
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Website"
                      id="contact-website"
                      name="contact-website"
                    />
                  </div>
                </div>
                {/* /.col-lg-6 */}
                <div className="col-12">
                  <div className="form-group mb-20">
                    <textarea
                      className="form-control"
                      placeholder="Additional Details!"
                      id="contact-message"
                      name="contact-message"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn__primary btn__xhight mt-10"
                  >
                    Submit Request
                  </button>
                  <div className="contact-result" />
                </div>
                {/* /.col-12 */}
              </div>
              {/* /.row */}
            </form>
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1 mb-3">
            <div className="contact-info d-flex flex-column justify-content-between">
              <div className="bg-img">
                <img src="assets/images/contact/1.jpg" alt="banner" />
              </div>
              <div>
                <h4 className="contact-info__title">
                  450,000 client’s interactions!
                </h4>
                <p className="contact-info__desc">
                  Provide users with appropriate view access to requests,
                  problems, changes, contracts &amp; solutions with experienced
                  professionals.
                </p>
                <p className="contact-info__desc">
                  As one of the world's largest ITService Providers, we are
                  ready to help.
                </p>
              </div>
              <a
                href="contact-us.html"
                className="btn btn__white btn__bordered btn__icon"
              >
                <span>Download Brochure</span>
                <i className="icon-arrow-right" />
              </a>
            </div>
            {/* /.contact-info */}
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
