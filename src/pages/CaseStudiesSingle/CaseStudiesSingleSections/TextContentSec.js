import React from "react";

export default function TextContentSec() {
  return (
    <section className="text-content pt-90 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
            <div className="heading mb-80">
              <div className="d-flex align-items-center mb-20">
                <div className="divider divider-primary mr-30" />
                <h2 className="heading__subtitle mb-0">Challenge</h2>
              </div>
              <h3 className="heading__title">
                We were able to immediately assist with the client’s emergency,
                a new solution was implemented.
              </h3>
            </div>
            {/* /.heading */}
          </div>
          {/* /.col-xl-7 */}
        </div>
        {/* /.row */}
        <div className="text__block-content row">
          <div className="col-sm-12 col-md-6 col-lg-5 offset-lg-1">
            <p className="text__block-desc">
              The report provided to the client covered all of the topics in our
              standard ITA, along with a high-level look at the client’s network
              and suggestions for strategic direction. To help implement the
              plan’s recommendations and carry out further strategic consulting,
              we provided a tailored managed IT services plan.
            </p>
            <p className="text__block-desc">
              By having a concrete document that both Dataprise and our client’s
              leadership can reference, both sides of the partnership are
              equally informed and kept up-to-date on current and upcoming
              steps.
            </p>
            <p className="text__block-desc">
              We were able to immediately assist with the client’s emergency.
              Thanks to our team, a new solution was quickly scoped and
              implemented. Once the critical situation was resolved, work on the
              ITA roadmap resumed.
            </p>
            <p className="text__block-desc">
              Provide users with appropriate view and access permissions to
              requests, problems, changes, contracts, assets, solutions, and
              reports with our experienced professionals.{" "}
            </p>
          </div>
          {/* /.col-lg-5 */}
          <div className="col-sm-12 col-md-6 col-lg-4 offset-lg-1">
            <p className="text__block-desc">
              Easy solutions for all difficult IT problems to ensure
              availability to hundreds of IT advisors, users, and business
              owners.
            </p>
            <p className="text__block-desc">
              Thanks to our team, a new solution was quickly scoped and
              implemented. Once the critical situation was resolved, work
              resumed.
            </p>
            <ul className="list-items list-unstyled">
              <li>450,000 client’s interactions </li>
              <li>Help challenge critical activities</li>
              <li>Simplify &amp; Automate Workflows</li>
              <li>Peer perspectives and advice</li>
            </ul>
          </div>
          {/* /.col-lg-5 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
