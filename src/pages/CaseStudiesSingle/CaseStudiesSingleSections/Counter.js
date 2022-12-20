import React from "react";

export default function Counter() {
  return (
    <section className="counters pt-0">
      <div className="container">
        <div className="row">
          {/* counter item #1 */}
          <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <div className="counter-item">
              <h4 className="counter">6,154</h4>
              <p className="counter__desc">
                Projects And Software Developed in 2021
              </p>
            </div>
            {/* /.counter-item */}
          </div>
          {/* /.col-lg-3 */}
          {/* counter item #2 */}
          <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <div className="counter-item">
              <h4 className="counter">2,512</h4>
              <p className="counter__desc">
                Qualified Employees And Developers With Us
              </p>
            </div>
            {/* /.counter-item */}
          </div>
          {/* /.col-lg-3 */}
          {/* counter item #3 */}
          <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <div className="counter-item">
              <h4 className="counter">1,784</h4>
              <p className="counter__desc">
                Satisfied Clients We Have Served Globally
              </p>
            </div>
            {/* /.counter-item */}
          </div>
          {/* /.col-lg-3 */}
          {/* counter item #4 */}
          <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <div className="counter-item">
              <h4 className="counter">0,25</h4>
              <p className="counter__desc">
                Years Of Experience In The IT &amp; Software Industry
              </p>
            </div>
            {/* /.counter-item */}
          </div>
          {/* /.col-lg-3 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
