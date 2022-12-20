import React from "react";

export default function PortFolioSingle() {
  return (
    <section className=" portfolio-single py-0">
      <div
        className="contain-fluid px-0 bg-slider-img-Banner-portfolio-single"
        style={{ height: "600px" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="portfolio-item text-center mb-0">
              <div className="portfolio__icon mb-0 mx-auto">
                <i className="icon-mouse" />
              </div>
            </div>
            {/* /.portfolio-item  */}
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
