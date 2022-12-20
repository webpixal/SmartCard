import React from "react";

export default function TitlePage() {
  return (
    <section
      className="page-title page-title-layout15 text-center"
      style={{ marginTop: "0px" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <nav>
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="blog.html">Blog</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Five Ways to Develop a World Sales Operations Function
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
