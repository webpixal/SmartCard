import React from "react";
import logoD from "../../assets/images/logo/logo-dark.png";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-light">
        <div className="footer-primary">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-3 footer-widget footer-widget-about">
                <div className="footer-widget__content">
                  <img src={logoD} alt="logo" className="mb-30" />
                </div>
                {/* /.footer-widget__content */}
              </div>
              {/* /.col-xl-3 */}
              <div className="col-sm-6 col-md-4 col-lg-2 footer-widget footer-widget-nav">
                <h6 className="footer-widget__title">Company</h6>
                <div className="footer-widget__content">
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="leadership-team.html">Meet Our Team</a>
                      </li>
                      <li>
                        <a href="blog.html">News &amp; Media</a>
                      </li>
                      <li>
                        <a href="projects-grid.html">Case Studies</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contacts</a>
                      </li>
                      <li>
                        <a href="#">Investors</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* /.footer-widget__content */}
              </div>
              {/* /.col-lg-2 */}
              <div className="col-sm-6 col-md-4 col-lg-2 footer-widget footer-widget-nav">
                <h6 className="footer-widget__title">Solutions</h6>
                <div className="footer-widget__content">
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">IT Management</a>
                      </li>
                      <li>
                        <a href="#">Cyber Security</a>
                      </li>
                      <li>
                        <a href="#">Cloud Computing</a>
                      </li>
                      <li>
                        <a href="#">IT Consulting</a>
                      </li>
                      <li>
                        <a href="#">Software Dev</a>
                      </li>
                      <li>
                        <a href="#">IT Support</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* /.footer-widget__content */}
              </div>
              {/* /.col-lg-2 */}
              <div className="col-sm-6 col-md-4 col-lg-2 footer-widget footer-widget-nav">
                <h6 className="footer-widget__title">Resources</h6>
                <div className="footer-widget__content">
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <a href="pricing.html">Pricing and plans</a>
                      </li>
                      <li>
                        <a href="#">Terms of Service</a>
                      </li>
                      <li>
                        <a href="faqs.html">Help &amp; FAQ</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Site map</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* /.footer-widget__content */}
              </div>
              {/* /.col-lg-2 */}
              <div className="col-sm-6 col-md-6 col-lg-3 footer-widget">
                <h6 className="footer-widget__title">Newsletter</h6>
                <div className="footer-widget__content">
                  <form className="footer-form">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                      <button type="submit" className="footer-form__submit">
                        <i className="icon-arrow-right" />
                      </button>
                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center mb-20">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="terms"
                      />
                      <label className="custom-control-label" htmlFor="terms">
                        I accept the privacy and terms.
                      </label>
                    </div>
                  </form>
                </div>
                {/* /.footer-widget__content */}
              </div>
              {/* /.col-lg-3 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.footer-primary */}
        <div className="footer-secondary">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-5 col-lg-5">
                <div className="footer__copyrights">
                  <span className="fz-14">
                    © 2020 Smart Data, All Rights Reserved. With Love by
                  </span>
                  <a
                    className="fz-14 color-primary"
                    href="http://themeforest.net/user/7oroof"
                  >
                    7oroof.com
                  </a>
                </div>
              </div>
              {/* /.col-lg-6 */}
              <div className="col-sm-12 col-md-2 col-lg-2 text-center">
                <button id="scrollTopBtn" className="my-2">
                  <i className="icon-arrow-up-2" />
                </button>
              </div>
              {/* /.col-lg-2 */}
              <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-wrap justify-content-end align-items-center">
                <ul className="social-icons list-unstyled mb-0 mr-30">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
                {/* /.social-icons */}
                <div>
                  <a href="#" className="btn btn__white btn__download mr-20">
                    <i className="fab fa-apple" />
                    <span>App Store</span>
                  </a>
                  <a href="#" className="btn btn__white btn__download">
                    <i className="fab fa-google-play" />
                    <span>Google Play</span>
                  </a>
                </div>
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.footer-secondary */}
      </footer>
      {/* /.Footer */}
      <div className="login-popup" id="login-popup">
        <div className="login-popup-wrapper">
          <form className="login-popup__form">
            <h3 className="login-popup__title">Login!</h3>
            <p className="login-popup__desc">
              Connect, organize and get things done to keep your IT business
              safe.
            </p>
            <div className="form-group mb-20">
              <i className="icon-mail input-icon" />
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group mb-20">
              <i className="icon-lock input-icon" />
              <input
                type="password"
                className="form-control"
                placeholder="********"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between mb-20">
              <div className="custom-control custom-checkbox d-flex align-items-center">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember Me!
                </label>
              </div>
              <a href="#" className="fz-14 font-weight-bold color-secondary">
                Forget Password?
              </a>
            </div>
            <button
              type="submit"
              className="btn btn__primary btn__block btn__xl"
            >
              Login
            </button>
          </form>
          <div className="d-flex justify-content-center align-items-center mt-20">
            <span className="color-white fz-14 font-weight-bold">
              Don’t Have An Account?
            </span>
            <button
              id="go-register"
              className="go-register fz-14 font-weight-bold"
            >
              <span>Register Here</span>
              <i className="icon-arrow-right" />
            </button>
          </div>
        </div>
      </div>
      {/* /.login-popup */}
      <div className="login-popup" id="register-popup">
        <div className="login-popup-wrapper">
          <form className="login-popup__form">
            <h3 className="login-popup__title">Register!</h3>
            <p className="login-popup__desc">
              Connect, organize and get things done to keep your IT business
              safe.
            </p>
            <div className="form-group mb-20">
              <i className="icon-mail input-icon" />
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group mb-20">
              <i className="icon-lock input-icon" />
              <input
                type="password"
                className="form-control"
                placeholder="********"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between mb-20">
              <div className="custom-control custom-checkbox d-flex align-items-center">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck2"
                />
                <label className="custom-control-label" htmlFor="customCheck2">
                  I read &amp; agree to <a href="#">Terms &amp; Conditions</a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn__primary btn__block btn__xl"
            >
              Register
            </button>
          </form>
          <div className="d-flex justify-content-center align-items-center mt-20">
            <span className="color-white fz-14 font-weight-bold">
              Have An Account?
            </span>
            <button id="go-login" className="go-login fz-14 font-weight-bold">
              <span>Login Here</span>
              <i className="icon-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
