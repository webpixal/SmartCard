import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="nav nav-tabs justify-content-center">
              <Link to="/about-us" className="nav__link active">
                About Us
              </Link>
              <Link to="/why-us" className="nav__link">
                Why Choose Us
              </Link>
              <Link to="/leadership-team" className="nav__link">
                Leadership Team
              </Link>
              <Link to="/awards" className="nav__link">
                Awards &amp; Recognition
              </Link>
              <Link to="/pricing" className="nav__link">
                Pricing &amp; Plans
              </Link>
              <Link to="/faqs" className="nav__link">
                Help &amp; FAQs
              </Link>
              <Link to="/careers" className="nav__link">
                Careers
              </Link>
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
