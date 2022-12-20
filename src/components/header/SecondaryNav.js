import React, { useState, useEffect } from "react";

export default function SecondaryNav() {
  const [scroll, setScroll] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    const handleScroll = (event) => {
      if (windowSize.innerWidth >= 992) {
        setScroll(window.scrollY > 100);
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

  return (
    <section
      className={
        scroll
          ? "secondary-nav secondary-nav-sticky sticky-top py-0"
          : "secondary-nav sticky-top py-0"
      }>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="nav nav-tabs justify-content-center">
              <a href="about-us.html" className="nav__link active">
                About Us
              </a>
              <a href="why-us.html" className="nav__link">
                Why Choose Us
              </a>
              <a href="leadership-team.html" className="nav__link">
                Leadership Team
              </a>
              <a href="awards.html" className="nav__link">
                Awards &amp; Recognition
              </a>
              <a href="pricing.html" className="nav__link">
                Pricing &amp; Plans
              </a>
              <a href="faqs.html" className="nav__link">
                Help &amp; FAQs
              </a>
              <a href="careers.html" className="nav__link">
                Careers
              </a>
            </nav>
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
