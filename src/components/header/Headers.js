import React, { useState, useEffect } from "react";
import logoL from "../../assets/images/logo/logo-light.png";
import logoD from "../../assets/images/logo/logo-dark.png";

export default function Headers() {
  const [scroll, setScroll] = useState(false);
  const [toggleIsMenu, settoggleIsMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    const handleScroll = (event) => {
      if (windowSize.innerWidth >= 992) {
        setScroll(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const onMenuClick = () => {
    settoggleIsMenu(!toggleIsMenu);
  };
  return (
    <header className="header header-transparent">
      <nav
        className={
          scroll
            ? "navbar navbar-expand-lg sticky-navbar is-sticky"
            : "navbar navbar-expand-lg sticky-navbar"
        }
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src={logoL} className="logo-light" alt="logo" />
            <img src={logoD} className="logo-dark" alt="logo" />
          </a>
          <button
            onClick={() => onMenuClick()}
            className="navbar-toggler"
            type="button"
          >
            <span className="menu-lines">
              <span />
            </span>
          </button>
          <div
            className={
              toggleIsMenu
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse menu-opened"
            }
            id="mainNavigation"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav__item  has-dropdown">
                <a
                  href="index.html"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link active"
                >
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="index.html" className="nav__item-link">
                      Home Main
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="home-modern.html" className="nav__item-link">
                      Home Modern
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="home-classic.html" className="nav__item-link">
                      Home Classic
                    </a>
                  </li>
                  {/* /.nav-item */}
                </ul>
                {/* /.dropdown-menu */}
              </li>
              {/* /.nav-item */}
              <li className="nav__item  has-dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="about-us.html" className="nav__item-link">
                      About Us
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="why-us.html" className="nav__item-link">
                      Why Choose Us
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="leadership-team.html" className="nav__item-link">
                      Leadership Team
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="awards.html" className="nav__item-link">
                      Award &amp; Recognition
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="pricing.html" className="nav__item-link">
                      Pricing &amp; Plans
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="faqs.html" className="nav__item-link">
                      Help &amp; FAQs
                    </a>
                  </li>{" "}
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="careers.html" className="nav__item-link">
                      Careers
                    </a>
                  </li>
                  {/* /.nav-item */}
                </ul>
                {/* /.dropdown-menu */}
              </li>
              {/* /.nav-item */}
              <li className="nav__item  has-dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  IT Solutions
                </a>
                <ul className="dropdown-menu wide-dropdown-menu">
                  <li className="nav__item">
                    <div className="row mx-0">
                      <div className="col-sm-6 dropdown-menu-col">
                        <a
                          href="it-solutions.html"
                          className="nav__item-link dropdown-menu-title"
                        >
                          IT Solutions
                        </a>
                        <ul className="nav flex-column">
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              IT Management
                            </a>
                          </li>{" "}
                          {/* /.nav-item */}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              Cyber Security
                            </a>
                          </li>{" "}
                          {/* /.nav-item */}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              Cloud Computing
                            </a>
                          </li>{" "}
                          {/* /.nav-item */}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              IT Consulting
                            </a>
                          </li>{" "}
                          {/* /.nav-item */}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              Software Dev
                            </a>
                          </li>{" "}
                          {/* /.nav-item */}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              IT Support
                            </a>
                          </li>
                          {/* /.nav-item */}
                        </ul>
                      </div>
                      {/* /.col-sm-6 */}
                      <div className="col-sm-6 dropdown-menu-col">
                        <a
                          href="industries.html"
                          className="nav__item-link dropdown-menu-title"
                        >
                          Industries
                        </a>
                        <ul className="nav flex-column">
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Education, Non-Profit
                            </a>
                          </li>{" "}
                          {/* /.nav-item */}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Accounting, Finance
                            </a>
                          </li>{" "}
                          {/* /.nav-item */}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Government &amp; Public
                            </a>
                          </li>{" "}
                          {/* /.nav-item */}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Energy &amp; Utilities
                            </a>
                          </li>{" "}
                          {/* /.nav-item */}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Legal, Law Firms
                            </a>
                          </li>{" "}
                          {/* /.nav-item */}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Manufacturing
                            </a>
                          </li>
                          {/* /.nav-item */}
                        </ul>
                      </div>
                      {/* /.col-sm-6 */}
                    </div>
                    {/* /.row */}
                  </li>
                  {/* /.nav-item */}
                </ul>
                {/* /.dropdown-menu */}
              </li>
              {/* /.nav-item */}
              <li className="nav__item  has-dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  News&amp;Media
                </a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="blog.html" className="nav__item-link">
                      Our Blog
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="blog-single-post.html" className="nav__item-link">
                      Single Blog Post
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="case-studies-grid.html" className="nav__item-link">
                      Case Studies Grid
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a
                      href="case-studies-carousel.html"
                      className="nav__item-link"
                    >
                      Case Studies Carousel
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a
                      href="case-studies-classic.html"
                      className="nav__item-link"
                    >
                      Case Studies Classic
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a
                      href="case-studies-single.html"
                      className="nav__item-link"
                    >
                      Single Case Study
                    </a>
                  </li>
                  {/* /.nav-item */}
                </ul>
                {/* /.dropdown-menu */}
              </li>
              {/* /.nav-item */}
              <li className="nav__item  has-dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Features
                </a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="coming-soon.html" className="nav__item-link">
                      Coming Soon
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="404.html" className="nav__item-link">
                      404 Page
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="#" className="nav__item-link  open-register-popup">
                      Register
                    </a>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <a href="#" className="nav__item-link  open-login-popup">
                      Login
                    </a>
                  </li>
                  {/* /.nav-item */}
                </ul>
                {/* /.dropdown-menu */}
              </li>
              {/* /.nav-item */}
              <li className="nav__item">
                <a href="contact-us.html" className="nav__item-link">
                  Contacts
                </a>
              </li>
              {/* /.nav-item */}
            </ul>
            {/* /.navbar-nav */}
          </div>
          {/* /.navbar-collapse */}
          <ul className="navbar-actions list-unstyled mb-0 d-flex align-items-center">
            <li className="d-none d-xl-block">
              <a href="request-quote.html" className="btn action__btn-contact">
                Request A Quote
              </a>
            </li>
            <li>
              <button className="action__btn action__btn-login open-login-popup">
                <i className="icon-user" />
                <span>Login</span>
              </button>
            </li>
          </ul>
          {/* /.navbar-actions */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navabr */}
    </header>
  );
}
