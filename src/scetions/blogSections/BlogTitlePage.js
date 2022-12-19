import React from "react";

export default function BlogTitlePage({ title = "Our Blog" }) {
  return (
    <section className="page-title page-title-layout16 text-center bg-overlay bg-overlay-gradient bg-parallax">
      <div className="bg-img">
        <img src="assets/images/page-titles/12.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="pagetitle__heading mb-10">{title}</h1>
            <nav>
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
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
