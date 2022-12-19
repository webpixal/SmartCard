import React from "react";
import MiniSlider from '../../components/slider/Minislider'

export default function SolutionClient() {
  return (
    <section className="clients pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="text__link text-center mb-30">
              Trusted By The World's
              <a
                href="it-solutions.html"
                className="btn btn__link btn__primary btn__underlined"
              >
                Best Organizations
              </a>
            </p>
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
        <div className="row align-items-center">
          <div className="col-12">
            <MiniSlider/>
            {/* /.carousel */}
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
