import React from "react";

export default function TitleSection() {
  return (
    <section className="page-title page-title-layout4 text-center bg-overlay bg-overlay-gradient bg-parallax bg-img-page-title">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
            <h1 className="pagetitle__heading mb-10">Awards</h1>
            <p className="pagetitle__desc">
              Trusted by the world's best organizations, for 15 years and
              running, it has been delivering smiles to hundreds of IT advisors,
              developers, users, and business owners.
            </p>
            <nav>
              <ol className="breadcrumb justify-content-center mt-30 mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="about-us.html">Company</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Awards
                </li>
              </ol>
            </nav>
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
