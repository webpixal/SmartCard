import React from "react";

export default function SecondaryNav() {
  return (
    <section className="secondary-nav sticky-top py-0">
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
