import React from "react";
import MiniSlider from "../../../components/slider/Minislider";

export default function PricingClient() {
  return (
    <section className="clients border-top pt-50 pb-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <MiniSlider />
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
