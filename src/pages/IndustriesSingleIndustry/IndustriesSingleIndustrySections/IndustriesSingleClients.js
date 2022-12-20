import React from "react";
import Minislider from "../../../components/slider/Minislider";

export default function IndustriesSingleClients() {
  return (
    <section className="clients border-top pt-50 pb-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <Minislider />
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
