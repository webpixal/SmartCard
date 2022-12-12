import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import logoL from "../assets/images/logo/logo-light.png";
import logoD from "../assets/images/logo/logo-dark.png";
import Aboutone from "../assets/images/about/2.jpg";
import miniimg from "../assets/images/clients/1.png";
import SimpleSlider from "../components/slider/Slider";
import Minislider from "../components/slider/Minislider";
import featurebgimg from "../assets/images/backgrounds/14.jpg";
import bannerimgthree from "../assets/images/banners/3.jpg";
import OfferingSlider from "../components/slider/OfferingSlider";
import PortfolioSlider from "../components/slider/PortfolioSlider";
import bannerimg from "../assets/images/banners/7.jpg";
import singnture from "../assets/images/about/singnture.png";
import Awards from "../components/slider/Awards";
import img1 from "../assets/images/blog/grid/1.jpg";
import img2 from "../assets/images/blog/grid/2.jpg";
import img3 from "../assets/images/blog/grid/3.jpg";
import img4 from "../assets/images/banners/8.jpg";

export default function Index() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div class="wrapper">
        <header className="header header-transparent">
          <nav className="navbar navbar-expand-lg sticky-navbar">
            <div className="container">
              <a className="navbar-brand" href="index.html">
                <img src={logoL} className="logo-light" alt="logo" />
                <img src={logoD} className="logo-dark" alt="logo" />
              </a>
              <button className="navbar-toggler" type="button">
                <span className="menu-lines">
                  <span />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="mainNavigation">
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
                        <a
                          href="leadership-team.html"
                          className="nav__item-link"
                        >
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
                        <a
                          href="blog-single-post.html"
                          className="nav__item-link"
                        >
                          Single Blog Post
                        </a>
                      </li>
                      {/* /.nav-item */}
                      <li className="nav__item">
                        <a
                          href="case-studies-grid.html"
                          className="nav__item-link"
                        >
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
                        <a
                          href="#"
                          className="nav__item-link  open-register-popup"
                        >
                          Register
                        </a>
                      </li>
                      {/* /.nav-item */}
                      <li className="nav__item">
                        <a
                          href="#"
                          className="nav__item-link  open-login-popup"
                        >
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
                  <a
                    href="request-quote.html"
                    className="btn action__btn-contact"
                  >
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
        <SimpleSlider />

        {/* ========================
About Layout 4
    =========================== */}
        <section className="about-layout4 pt-130 pb-0">
          <div className="container">
            <div className="row heading">
              <div className="col-12">
                <div className="d-flex align-items-center mb-20">
                  <div className="divider divider-primary mr-30" />
                  <h2 className="heading__subtitle mb-0">
                    Timely Service Delivery &amp; Incident Resolutions!!
                  </h2>
                </div>
              </div>
              {/* /.col-12 */}
              <div className="col-sm-12 col-md-12 col-lg-6">
                <h3 className="heading__title mb-40">
                  Manages service delivery across various business like, HR,
                  Legal and other IT departments!!
                </h3>
              </div>
              {/* /.col-lg-6 */}
              <div className="col-sm-12 col-md-12 col-lg-6">
                <p>
                  SmartData has been helping organizations throughout the World
                  to manage their IT with our unique approach to technology
                  management and consultancy solutions. Provide users with
                  appropriate view and access permissions to requests, problems,
                  changes, contracts, assets, solutions, and reports with our
                  experienced professionals.
                </p>
                <p>
                  As one of the world's largest ITService Providers, our deep
                  pool of certified engineers and IT staff are ready to help you
                  to keep your IT business safe &amp; ensure high availability.
                </p>
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="about__img">
                  <img src={Aboutone} alt="about" />
                </div>
                {/* /.about-img */}
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
              {/* /.col-lg-6 */}
              <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between">
                <ul className="list-items list-items-layout2 list-horizontal list-unstyled d-flex flex-wrap mt-40">
                  <li>Eliminate Repeat Entry</li>
                  <li>Simpliy Communication</li>
                  <li>Drive Business Process</li>
                  <li>Speed Up Transactions</li>
                  <li>Structure Data &amp; Docs</li>
                  <li>Automate Workflows</li>
                </ul>
                <div className="clients">
                  <p className="text__link text-center mb-10">
                    Trusted By The World's
                    <a
                      href="it-solutions.html"
                      className="btn btn__link btn__primary btn__underlined"
                    >
                      Best Organizations
                    </a>
                  </p>
                  <Minislider />
                  {/* /.carousel */}
                </div>
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.About Layout 4 */}
        {/* ========================
  Services Carousel
    =========================== */}
        <section className="services-layout2 services-carousel pt-130 bg-gray">
          <div className="container">
            <div className="row heading mb-40">
              <div className="col-12">
                <div className="d-flex align-items-center">
                  <div className="divider divider-primary mr-30" />
                  <h2 className="heading__subtitle mb-0">
                    Nationwide Service, Local Expertise
                  </h2>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7">
                <h3 className="heading__title">
                  Offering the latest software and IT services to our customers!
                </h3>
              </div>
              {/* /col-lg-5 */}
              <div className="col-sm-12 col-md-12 col-lg-5">
                <p className="heading__desc">
                  Improve efficiency, leverage tech, and provide better customer
                  experiences with the modern technology services available
                  allover the world. Our skilled personnel, utilising the latest
                  processing software, combined with decades of experience.
                </p>
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-12">
                <OfferingSlider />
                {/* /.carousel */}
              </div>
              {/* /.col-12 */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-12 btn-wrapper">
                <a
                  href="#"
                  className="btn btn__secondary btn__bordered btn__icon"
                >
                  <span>Explore All Services</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.col-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.Services Layout 2 */}
        {/* ======================
    Features Layout 1
   
    ========================= */}
        <section className="features-layout1 pb-0">
          <div className="features-bg"></div>
          <div className="container">
            <div className="row heading heading-light mb-30">
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
                      As one of the world's largest ITService Providers with
                      over 120 engineers and IT support staff are ready to help.
                    </p>
                    <a
                      href="#"
                      className="btn btn__primary btn__primary-style2 btn__icon mt-30 mb-30"
                    >
                      <span>Our Pricing</span>
                      <i className="icon-arrow-right" />
                    </a>
                  </div>
                  {/* /.col-sm-6 */}
                  <div className="col-sm-6">
                    <p className="heading__desc">
                      SmartData been helping organizations and Providers through
                      the World to manage their IT with our unique approach to
                      technology management and consultancy solutions.{" "}
                    </p>
                  </div>
                  {/* /.col-sm-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
            <div className="row">
              {/* Feature item #1 */}
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="feature-item text-center">
                  <div className="feature__icon">
                    <i className="icon-software" />
                  </div>
                  <h4 className="feature__title">Software Asset</h4>
                  <p className="feature__desc">
                    All aspects of your software assets including purchasing,
                    deployment &amp; maintenance.
                  </p>
                  <a href="#" className="btn__link">
                    <i className="icon-arrow-right icon-outlined" />
                  </a>
                </div>
                {/* /.feature-item */}
              </div>
              {/* /.col-lg-3 */}
              {/* Feature item #2 */}
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="feature-item text-center">
                  <div className="feature__icon">
                    <i className="icon-dos" />
                  </div>
                  <h4 className="feature__title">Privileged Access</h4>
                  <p className="feature__desc">
                    Extend proven Tech best practices to HR, finance, and other
                    service delivery areas.
                  </p>
                  <a href="#" className="btn__link">
                    <i className="icon-arrow-right icon-outlined" />
                  </a>
                </div>
                {/* /.feature-item */}
              </div>
              {/* /.col-lg-3 */}
              {/* Feature item #3 */}
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="feature-item text-center">
                  <div className="feature__icon">
                    <i className="icon-operating-system" />
                  </div>
                  <h4 className="feature__title">Software License</h4>
                  <p className="feature__desc">
                    Build dynamic request templates with associated workflows,
                    and tasks.
                  </p>
                  <a href="#" className="btn__link">
                    <i className="icon-arrow-right icon-outlined" />
                  </a>
                </div>
                {/* /.feature-item */}
              </div>
              {/* /.col-lg-3 */}
              {/* Feature item #4 */}
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="feature-item text-center">
                  <div className="feature__icon">
                    <i className="icon-machine-learning" />
                  </div>
                  <h4 className="feature__title">Enterprise Service</h4>
                  <p className="feature__desc">
                    Our technology allows you to offer the latest software to
                    your possible customers!
                  </p>
                  <a href="#" className="btn__link">
                    <i className="icon-arrow-right icon-outlined" />
                  </a>
                </div>
                {/* /.feature-item */}
              </div>
              {/* /.col-lg-3 */}
            </div>
            {/* /.row */}
            <div className="row mt-40">
              <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between">
                <div className="row row-no-gutter read-note">
                  <div className="col-sm-4">
                    <div className="rating mb-10">
                      <i className="fas fa-star color-primary" />
                      <i className="fas fa-star color-primary" />
                      <i className="fas fa-star color-primary" />
                      <i className="fas fa-star color-primary" />
                      <i className="fas fa-star color-primary" />
                    </div>
                  </div>
                  {/* /.col-lg-4 */}
                  <div className="col-sm-8">
                    <p className="read-note__text color-white">
                      <span className="font-weight-bold text-underlined">
                        99.9% Customer Satisfaction
                      </span>
                      based on 750+ reviews and 20,000 Objective Resource
                    </p>
                  </div>
                  {/* /.col-lg-8 */}
                </div>
                {/* /.row */}
                <div className="row">
                  <div className="col-sm-6">
                    <p className="mb-30 font-weight-bold sub__desc">
                      As one of the world's largest ITService Providers with
                      over 120 engineers and IT support staff are ready to help.
                    </p>
                    <a
                      href="#"
                      className="btn btn__primary btn__bordered btn__icon mb-30"
                    >
                      <span>Request Demo</span>
                      <i className="icon-arrow-right" />
                    </a>
                  </div>
                  {/* /.col-sm-6 */}
                  <div className="col-sm-6">
                    <ul className="list-items list-unstyled mb-30">
                      <li>450,000 client’s interactions </li>
                      <li>Help challenge critical activities</li>
                      <li>Simplify &amp; Automate Workflows</li>
                      <li>Peer perspectives and advice</li>
                    </ul>
                  </div>
                  {/* /.col-sm-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.col-lg-6 */}
              <div className="col-sm-12 col-md-12 col-lg-6">
                <img src={bannerimgthree} alt="banner" />
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.Features Layout 1 */}
        {/* =========================== 
portfolio Grid
    ============================= */}
        <section className="portfolio-grid portfolio-grid-carousel pb-40">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="heading mb-50">
                  <div className="d-flex align-items-center">
                    <div className="divider divider-primary mr-30" />
                    <h2 className="heading__subtitle mb-0">Success Stories</h2>
                  </div>
                  <h3 className="heading__title mb-0">Latest Case Studies</h3>
                </div>
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-12 test">
                <PortfolioSlider />
                {/* /.carousel */}
              </div>
              {/* /.col-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.portfolio Grid  */}
        {/* =========================
 Banner layout 5
=========================== */}
        <section className="banner-layout5 banner-layout5-sticky bg-parallax pt-130 pb-0 bg-slider-img-Banner checking">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 d-flex flex-column justify-content-between pb-80">
                <div className="heading heading-light mb-50 sticky-top">
                  <div className="divider divider-white" />
                  <h3 className="heading__title mb-30">
                    Easy solutions for all difficult IT problems, keep business
                    safe &amp; ensure high availability.
                  </h3>
                </div>
                {/* /.heading */}
                <div className="row">
                  <div className="col-sm-6">
                    <div className="contact-info">
                      <div className="contact__icon">
                        <i className="icon-map-marker" />
                      </div>
                      <ul className="contact__list list-unstyled">
                        <li>
                          2307 Beverley Rd Brooklyn, New York 11226 United
                          States.
                        </li>
                      </ul>
                    </div>
                    {/* /.contact-item*/}
                  </div>
                  {/* /.col-sm-6 */}
                  <div className="col-sm-6">
                    <div className="contact-item">
                      <div className="contact__icon">
                        <i className="icon-mail" />
                      </div>
                      <ul className="contact__list list-unstyled">
                        <li>
                          <a href="mailto:SmartData@7oroof.com">
                            Email: SmartData@7oroof.com
                          </a>
                        </li>
                        <li>
                          <a href="tel:5565454117">Phone: +55 654 541 17</a>
                        </li>
                      </ul>
                    </div>
                    {/* /.contact-item*/}
                  </div>
                  {/* /.col-sm-6 */}
                  <div className="col-sm-6" />
                  {/* /.col-sm-6 */}
                </div>
                {/* /.row*/}
              </div>
              {/* /.col-xl-6 */}
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
                <div className="banner__content bg-slider-img-Banner-two">
                  <div className="scroll__icon">
                    <i className="icon-mouse" />
                  </div>
                  <div className="row heading heading-light">
                    <div className="col-sm-6">
                      <h3 className="heading__title mb-30">
                        450,000 client’s interactions!
                      </h3>
                    </div>
                    {/* /.col-sm-6 */}
                    <div className="col-sm-6">
                      <p className="heading__desc mb-20">
                        Provide users with appropriate view access to requests,
                        problems, changes, contracts &amp; solutions with
                        experienced professionals.
                      </p>
                      <p className="heading__desc mb-20">
                        As one of the world's largest ITService Providers, we
                        are ready to help.
                      </p>
                      <a
                        href="#"
                        className="btn btn__white btn__bordered btn__xl btn__icon"
                      >
                        <span>Download Brochure</span>
                        <i className="icon-arrow-right" />
                      </a>
                    </div>
                    {/* /.col-sm-6 */}
                  </div>
                  {/* /.row */}
                  <div className="row counters-wrapper counters-light mt-70">
                    {/* counter item #1 */}
                    <div className="col-sm-4">
                      <div className="counter-item">
                        <h4 className="counter">6,154</h4>
                        <p className="counter__desc">
                          Projects And Software Developed in 2021
                        </p>
                      </div>
                      {/* /.counter-item */}
                    </div>
                    {/* /.col-sm-4 */}
                    {/* counter item #2 */}
                    <div className="col-sm-4">
                      <div className="counter-item">
                        <h4 className="counter">2,512</h4>
                        <p className="counter__desc">
                          Qualified Employees And Developers With Us
                        </p>
                      </div>
                      {/* /.counter-item */}
                    </div>
                    {/* /.col-sm-4 */}
                    {/* counter item #3 */}
                    <div className="col-sm-4">
                      <div className="counter-item">
                        <h4 className="counter">1,784</h4>
                        <p className="counter__desc">
                          Satisfied Clients We Have Served Globally
                        </p>
                      </div>
                      {/* /.counter-item */}
                    </div>
                    {/* /.col-sm-4 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.banner__content */}
                <div className="semi-banner bg-gray">
                  <div className="row row-no-gutter">
                    <div className="col-sm-6">
                      <div className="semi-banner__content">
                        <div className="heading">
                          <h3 className="heading__title mb-30">
                            Timely Service, and incident resolutions!!
                          </h3>
                          <p className="heading_desc mb-30">
                            Improve efficiency, leverage tech, and provide
                            better customer experiences with the modern
                            technology services available allover the world.{" "}
                          </p>
                          <p className="heading_desc mb-30">
                            Our skilled personnel, utilising the latest
                            processing software, combined with decades of
                            experience.
                          </p>
                        </div>
                        {/* /.heading */}
                        <img src={singnture} alt="singnture" />
                      </div>
                    </div>
                    {/* /.col-sm-6 */}
                    <div className="col-sm-6 d-none d-md-block">
                      <img src={bannerimg} alt="banner" className="w-100" />
                    </div>
                    {/* /.col-sm-6 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.semi-banner */}
                <div className="semi-banner bg-gray">
                  <div className="row row-no-gutter">
                    <div className="col-sm-6">
                      <div className="cta-banner bg-primary">
                        <div className="cta__icon color-white">
                          <i className="icon-developer" />
                        </div>
                        <h4 className="cta__title color-white">Since 1999</h4>
                        <p className="cta__desc color-white mb-25">
                          Provide users with appropriate view and access to
                          requests, problems, changes, contracts, solutions, and
                          reports.
                        </p>
                        <a
                          href="#"
                          className="btn btn__link btn__white btn__icon px-0"
                        >
                          <span>Find Your Solution</span>{" "}
                          <i className="icon-arrow-right" />
                        </a>
                      </div>
                    </div>
                    {/* /.col-sm-6 */}
                    <div className="col-sm-6">
                      <div className="semi-banner__content pb-0">
                        <div className="heading">
                          <h3 className="heading__title mb-30">
                            We have decades of work experience!
                          </h3>
                        </div>
                        {/* /.heading */}
                        <h4 className="banner__subheading">
                          Consulting &amp; Insights
                        </h4>
                        <p className="heading_desc">
                          Our objective insights steer you toward the right
                          decisions on issues that matter.
                        </p>
                        <h4 className="banner__subheading">
                          Research &amp; Advisory
                        </h4>
                        <p className="heading_desc">
                          Our combination of research, problem solving and
                          hands-on experience.
                        </p>
                        <h4 className="banner__subheading">Strategic Advice</h4>
                        <p className="heading_desc">
                          Tools to help turn strategy into decisions, and
                          execute for measurable results.
                        </p>
                      </div>
                    </div>
                    {/* /.col-sm-6 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.semi-banner */}
                <section className="awards bg-secondary">
                  <div className="row heading heading-light mb-60">
                    <div className="col-sm-6">
                      <h3 className="heading__title">
                        Our awards and recognitions
                      </h3>
                    </div>
                    {/* /col-lg-5 */}
                    <div className="col-sm-6">
                      <p className="heading__desc">
                        Trusted by the world's best organizations, for 21 years
                        and running, it has been delivering smiles to hundreds
                        of IT advisors, developers, users, and business owners.
                      </p>
                    </div>
                    {/* /.col-lg-5 */}
                  </div>
                  {/* /.row */}
                  <div className="row awards-wrapper">
                    <div className="col-sm-12">
                      <div className="awards-carousel-wrapper">
                        <Awards />
                        {/* /.carousel  */}
                      </div>
                      {/* /.awards-carousel-wrapper */}
                    </div>
                    {/* /.col-12 */}
                  </div>
                  {/* /.row */}
                </section>
              </div>
              {/* /.col-xl-4 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.Banner layout 5 */}
        {/* ======================
Blog Grid
    ========================= */}
        <section className="blog-grid pb-50">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                <div className="heading text-center mb-40">
                  <h2 className="heading__subtitle">Recent Articles</h2>
                  <h3 className="heading__title">Resource Library</h3>
                </div>
                {/* /.heading */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
            <div className="row">
              {/* Blog Item #1 */}
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="post-item">
                  <div className="post__img">
                    <a href="blog-single-post.html">
                      <img src={img1} alt="blog image" />
                    </a>
                  </div>
                  {/* /.blog-img */}
                  <div className="post__content">
                    <div className="post__meta d-flex flex-wrap">
                      <div className="post__meta-cat">
                        <a href="#">Consulting</a>
                        <a href="#">Sales</a>
                      </div>
                      {/* /.blog-meta-cat */}
                      <span className="post__meta-date">May 13, 2020</span>
                    </div>
                    <h4 className="post__title">
                      <a href="#">
                        Five Ways to Develop a World Class Sales Operations
                        Function
                      </a>
                    </h4>
                    <p className="post__desc">
                      Outsourcing IT infrastructure is a concept that has been
                      around for a while. Characterized in terms of technicians
                      and engineers, workstations and servers, the idea of
                      outsourcing your basic IT needs...
                    </p>
                    <a
                      href="blog-single-post.html"
                      className="btn btn__secondary btn__link"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right" />
                    </a>
                  </div>
                  {/* /.blog-content */}
                </div>
                {/* /.post-item */}
              </div>
              {/* /.col-lg-4 */}
              {/* Blog Item #2 */}
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="post-item">
                  <div className="post__img">
                    <a href="blog-single-post.html">
                      <img src={img2} alt="blog image" />
                    </a>
                  </div>
                  {/* /.blog-img */}
                  <div className="post__content">
                    <div className="post__meta d-flex flex-wrap">
                      <div className="post__meta-cat">
                        <a href="#">Tech</a>
                        <a href="#">Communications</a>
                      </div>
                      {/* /.blog-meta-cat */}
                      <span className="post__meta-date">April 17, 2020</span>
                    </div>
                    <h4 className="post__title">
                      <a href="#">
                        Succession Risks That Threaten Your Leadership Strategy
                      </a>
                    </h4>
                    <p className="post__desc">
                      Today’s organizations need a quality bench of leaders to
                      drive business outcomes and satisfy employees, customers
                      and investors who now demand more transparency and
                      accountability...
                    </p>
                    <a
                      href="blog-single-post.html"
                      className="btn btn__secondary btn__link"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right" />
                    </a>
                  </div>
                  {/* /.blog-content */}
                </div>
                {/* /.post-item */}
              </div>
              {/* /.col-lg-4 */}
              {/* Blog Item #3 */}
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="post-item">
                  <div className="post__img">
                    <a href="blog-single-post.html">
                      <img src={img3} alt="blog image" />
                    </a>
                  </div>
                  {/* /.blog-img */}
                  <div className="post__content">
                    <div className="post__meta d-flex flex-wrap">
                      <div className="post__meta-cat">
                        <a href="#">Digital Business</a>
                        <a href="#">Cloud</a>
                      </div>
                      {/* /.blog-meta-cat */}
                      <span className="post__meta-date">March 20, 2020</span>
                    </div>
                    <h4 className="post__title">
                      <a href="#">
                        What Do Employee Engagement Surveys Tell You About
                        Employee?
                      </a>
                    </h4>
                    <p className="post__desc">
                      Outsourcing IT infrastructure is a concept that has been
                      around for a while. Characterized in terms of technicians
                      and engineers, workstations and servers, the idea of
                      outsourcing your basic IT needs...
                    </p>
                    <a
                      href="blog-single-post.html"
                      className="btn btn__secondary btn__link"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right" />
                    </a>
                  </div>
                  {/* /.blog-content */}
                </div>
                {/* /.post-item */}
              </div>
              {/* /.col-lg-4 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.blog Grid */}
        {/* =========================
 Banner layout 2
=========================== */}
        <section className="banner-layout2 pb-0 bg-overlay bg-overlay-primary">
          <div className="bg-slider-img-Banner"></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-inner">
                <div className="heading heading-light">
                  <h3 className="heading__title mb-30">
                    Satisfied Users Over The Globe
                  </h3>
                </div>
                <div className="testimonials testimonials-wrapper">
                  <div className="slider-with-navs">
                    {/* Testimonial #1 */}
                    <div className="testimonial-item">
                      <p className="testimonial__desc color-white">
                        If you’re looking for a rewarding career and the chance
                        to make an impact, you’ve come to the right place. We
                        will transform your business through our techniques!
                      </p>
                      <div className="testimonial__meta">
                        <h4 className="testimonial__meta-title">
                          Ahmed Abdallah
                        </h4>
                        <p className="testimonial__meta-desc">
                          Digital Media Manager
                        </p>
                      </div>
                      {/* /.testimonial-meta */}
                    </div>
                    {/* /. testimonial-item */}
                    {/* Testimonial #2 */}
                    <div className="testimonial-item">
                      <p className="testimonial__desc color-white">
                        If you’re looking for a rewarding career and the chance
                        to make an impact, you’ve come to the right place. We
                        will transform your business through our techniques!{" "}
                      </p>
                      <div className="testimonial__meta">
                        <h4 className="testimonial__meta-title">John Peter</h4>
                        <p className="testimonial__meta-desc">7oroof Inc</p>
                      </div>
                      {/* /.testimonial-meta */}
                    </div>
                    {/* /. testimonial-item */}
                    {/* Testimonial #3 */}
                    <div className="testimonial-item">
                      <p className="testimonial__desc color-white">
                        If you’re looking for a rewarding career and the chance
                        to make an impact, you’ve come to the right place. We
                        will transform your business through our techniques!
                      </p>
                      <div className="testimonial__meta">
                        <h4 className="testimonial__meta-title">Ayman</h4>
                        <p className="testimonial__meta-desc">7oroof Inc</p>
                      </div>
                      {/* /.testimonial-meta */}
                    </div>
                    {/* /. testimonial-item */}
                    {/* Testimonial #2 */}
                    <div className="testimonial-item">
                      <p className="testimonial__desc color-white">
                        {" "}
                        If you’re looking for a rewarding career and the chance
                        to make an impact, you’ve come to the right place. We
                        will transform your business through our techniques!{" "}
                      </p>
                      <div className="testimonial__meta">
                        <h4 className="testimonial__meta-title">John Peter</h4>
                        <p className="testimonial__meta-desc">7oroof Inc</p>
                      </div>
                      {/* /.testimonial-meta */}
                    </div>
                    {/* /. testimonial-item */}
                    {/* Testimonial #3 */}
                    <div className="testimonial-item">
                      <p className="testimonial__desc color-white">
                        My project was a simple &amp; small task, but the
                        persistence and determination turned it into an awesome
                        and great project which make me happy .
                      </p>
                      <div className="testimonial__meta">
                        <h4 className="testimonial__meta-title">John Peter</h4>
                        <p className="testimonial__meta-desc">7oroof Inc</p>
                      </div>
                      {/* /.testimonial-meta */}
                    </div>
                    {/* /. testimonial-item */}
                  </div>
                  <div className="slider-nav">
                    <div className="testimonial__thumb">
                      <img
                        src="assets/images/testimonials/thumbs/1.png"
                        alt="author thumb"
                      />
                    </div>
                    {/* /.testimonial-thumb */}
                    <div className="testimonial__thumb">
                      <img
                        src="assets/images/testimonials/thumbs/2.png"
                        alt="author thumb"
                      />
                    </div>
                    {/* /.testimonial-thumb */}
                    <div className="testimonial__thumb">
                      <img
                        src="assets/images/testimonials/thumbs/3.png"
                        alt="author thumb"
                      />
                    </div>
                    {/* /.testimonial-thumb */}
                    <div className="testimonial__thumb">
                      <img
                        src="assets/images/testimonials/thumbs/2.png"
                        alt="author thumb"
                      />
                    </div>
                    {/* /.testimonial-thumb */}
                    <div className="testimonial__thumb">
                      <img
                        src="assets/images/testimonials/thumbs/3.png"
                        alt="author thumb"
                      />
                    </div>
                    {/* /.testimonial-thumb */}
                  </div>
                  {/* /.slcik-nav */}
                </div>
                {/* /.testimonials */}
                <div className="divider divider-light w-100 mt-60 mb-60" />
                <div className="heading heading-light">
                  <h3 className="heading__title mb-30">Our Trusted Clients</h3>
                </div>
                <div className="clients">
                  <Minislider />
                  {/* /.carousel */}
                </div>
              </div>
              {/* /.col-xl-6 */}
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="contact-panel">
                  <form
                    className="contact-panel__form"
                    method="post"
                    action="assets/php/contact.php"
                    id="contactForm"
                  >
                    <div className="row">
                      <div className="col-12">
                        <h4 className="contact-panel__title mb-20">
                          Request A Quote
                        </h4>
                        <p className="contact-panel__desc mb-30">
                          Our deep pool of certified engineers and IT staff are
                          ready to help you to keep your IT business safe &amp;
                          ensure high availability.
                        </p>
                      </div>{" "}
                      {/* /.col-12 */}
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
                          <select className="form-control">
                            <option value={0}>Inquiry</option>
                            <option value={1}>IT Management Services 2</option>
                            <option value={2}>IT Management Services 3</option>
                          </select>
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
                          />
                        </div>
                      </div>
                      {/* /.col-lg-6 */}
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Additional Details!"
                            id="contact-message"
                            name="contact-message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center mb-20">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="acceptTerms"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="acceptTerms"
                          >
                            I accept the privacy and terms.
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn__primary btn__xl btn__block"
                        >
                          Submit Request{" "}
                        </button>
                        <div className="contact-result" />
                      </div>
                      {/* /.col-12 */}
                    </div>
                    {/* /.row */}
                  </form>
                </div>
              </div>
              {/* /.col-xl-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.Banner layout 2 */}
        {/* ========================
Footer
    ========================== */}
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
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
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
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
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck2"
                  >
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
        {/* /.login-popup */}
        {/* /.wrapper */}
      </div>
    </>
  );
}
