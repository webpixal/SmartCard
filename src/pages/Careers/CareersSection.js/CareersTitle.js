import React from "react";
import bg from "../../../assets/images/page-titles/7.jpg";

export default function CareersTitle() {
  return (
    <section
      className="page-title page-title-layout4 text-center bg-overlay bg-overlay-gradient bg-parallax bg-img-page-title-Careers"
      style={{
        background: `url(${bg})`
      }}>
      {/* <div className="bg-img">
        <img src="assets/images/page-titles/7.jpg" alt="background" />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="pagetitle__heading">Careers</h1>
            <p className="pagetitle__desc">
              Trusted by the world's best organizations, for 21 years and
              running, it has been delivering smiles to hundreds of IT advisors,
              developers, users, and business owners.
            </p>
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
