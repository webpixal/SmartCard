import React, { useState, useEffect } from "react";
import logoL from "../../assets/images/logo/logo-light.png";
import logoD from "../../assets/images/logo/logo-dark.png";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

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
          <Link className="navbar-brand" to="/">
            <img src={logoL} className="logo-light" alt="logo" />
            <img src={logoD} className="logo-dark" alt="logo" />
          </Link>
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
                <Link
                  to="/"
                  data-toggle="dropdown"
                  className="nav__item-link active"
                >
                  Home
                </Link>

                {/* /.dropdown-menu */}
              </li>
              {/* /.nav-item */}
              <li className="nav__item  has-dropdown">
                <p
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Company
                </p>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <Link to="/about-us" className="nav__item-link">
                      About Us
                    </Link>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <Link to="/why-us" className="nav__item-link">
                      Why Choose Us
                    </Link>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <Link to="/leadership-team" className="nav__item-link">
                      Leadership Team
                    </Link>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <Link to="/awards" className="nav__item-link">
                      Award &amp; Recognition
                    </Link>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <Link to="/pricing" className="nav__item-link">
                      Pricing &amp; Plans
                    </Link>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <Link to="/faqs" className="nav__item-link">
                      Help &amp; FAQs
                    </Link>
                  </li>{" "}
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <Link to="/careers" className="nav__item-link">
                      Careers
                    </Link>
                  </li>
                  {/* /.nav-item */}
                </ul>
                {/* /.dropdown-menu */}
              </li>
              {/* /.nav-item */}
              <li className="nav__item  has-dropdown">
                <a
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  IT Solutions
                </a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <div className="row mx-0">
                      <div className="col-sm-6 dropdown-menu-col">
                        <Link
                          to="/it-solutions"
                          className="nav__item-link dropdown-menu-title"
                        >
                          IT Solutions
                        </Link>
                        <Link
                          to="/it-solutions-single-page"
                          className="nav__item-link dropdown-menu-title"
                        >
                          IT Solutions Single
                        </Link>
                        {/* <ul className="nav flex-column">
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html">
                              IT Management
                            </a>
                          </li>{" "}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html">
                              Cyber Security
                            </a>
                          </li>{" "}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html">
                              Cloud Computing
                            </a>
                          </li>{" "}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html">
                              IT Consulting
                            </a>
                          </li>{" "}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html">
                              Software Dev
                            </a>
                          </li>{" "}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html">
                              IT Support
                            </a>
                          </li>
                        </ul> */}
                      </div>
                      {/* /.col-sm-6 */}
                      <div className="col-sm-6 dropdown-menu-col">
                        <Link
                          to="/industries"
                          className="nav__item-link dropdown-menu-title"
                        >
                          Industries
                        </Link>
                        <ul className="nav flex-column">
                          <li className="nav__item">
                            <Link
                              to="/industries-single-industry"
                              className="nav__item-link"
                            >
                              Single Industry
                            </Link>
                          </li>{" "}
                          {/* <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Accounting, Finance
                            </a>
                          </li>{" "}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Government &amp; Public
                            </a>
                          </li>{" "}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Energy &amp; Utilities
                            </a>
                          </li>{" "}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Legal, Law Firms
                            </a>
                          </li>{" "}
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Manufacturing
                            </a>
                          </li> */}
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

              <li className="nav__item">
                <Link to="/contact-us" className="nav__item-link">
                  Contacts
                </Link>
              </li>
              {/* /.nav-item */}
            </ul>
            {/* /.navbar-nav */}
          </div>
          {/* /.navbar-collapse */}
          <ul className="navbar-actions list-unstyled mb-0 d-flex align-items-center">
            <li className="d-none d-xl-block">
              <a className="btn action__btn-contact">Request A Quote</a>
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
