import React from "react";
import img1 from "../../../assets/images/blog/grid/1.jpg";
import img2 from "../../../assets/images/blog/grid/2.jpg";
import img3 from "../../../assets/images/blog/grid/3.jpg";

export default function BlogGridSection() {
  return (
    <section className="blog-grid pb-50">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-40">
              <h2 className="heading__subtitle">Recent Articles</h2>
              <h3 className="heading__title">Resource Library</h3>
            </div>
            {/* /.heading */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
        <div className="row">
          {/* Blog Item #1 */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="blog-single-post.html">
                  <img src={img1} alt="blog image" />
                </a>
              </div>
              {/* /.blog-img */}
              <div className="post__content">
                <div className="post__meta d-flex flex-wrap">
                  <div className="post__meta-cat">
                    <a href="#">Consulting</a>
                    <a href="#">Sales</a>
                  </div>
                  {/* /.blog-meta-cat */}
                  <span className="post__meta-date">May 13, 2020</span>
                </div>
                <h4 className="post__title">
                  <a href="#">
                    Five Ways to Develop a World Class Sales Operations Function
                  </a>
                </h4>
                <p className="post__desc">
                  Outsourcing IT infrastructure is a concept that has been
                  around for a while. Characterized in terms of technicians and
                  engineers, workstations and servers, the idea of outsourcing
                  your basic IT needs...
                </p>
                <a
                  href="blog-single-post.html"
                  className="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.blog-content */}
            </div>
            {/* /.post-item */}
          </div>
          {/* /.col-lg-4 */}
          {/* Blog Item #2 */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="blog-single-post.html">
                  <img src={img2} alt="blog image" />
                </a>
              </div>
              {/* /.blog-img */}
              <div className="post__content">
                <div className="post__meta d-flex flex-wrap">
                  <div className="post__meta-cat">
                    <a href="#">Tech</a>
                    <a href="#">Communications</a>
                  </div>
                  {/* /.blog-meta-cat */}
                  <span className="post__meta-date">April 17, 2020</span>
                </div>
                <h4 className="post__title">
                  <a href="#">
                    Succession Risks That Threaten Your Leadership Strategy
                  </a>
                </h4>
                <p className="post__desc">
                  Today’s organizations need a quality bench of leaders to drive
                  business outcomes and satisfy employees, customers and
                  investors who now demand more transparency and
                  accountability...
                </p>
                <a
                  href="blog-single-post.html"
                  className="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.blog-content */}
            </div>
            {/* /.post-item */}
          </div>
          {/* /.col-lg-4 */}
          {/* Blog Item #3 */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="blog-single-post.html">
                  <img src={img3} alt="blog image" />
                </a>
              </div>
              {/* /.blog-img */}
              <div className="post__content">
                <div className="post__meta d-flex flex-wrap">
                  <div className="post__meta-cat">
                    <a href="#">Digital Business</a>
                    <a href="#">Cloud</a>
                  </div>
                  {/* /.blog-meta-cat */}
                  <span className="post__meta-date">March 20, 2020</span>
                </div>
                <h4 className="post__title">
                  <a href="#">
                    What Do Employee Engagement Surveys Tell You About Employee?
                  </a>
                </h4>
                <p className="post__desc">
                  Outsourcing IT infrastructure is a concept that has been
                  around for a while. Characterized in terms of technicians and
                  engineers, workstations and servers, the idea of outsourcing
                  your basic IT needs...
                </p>
                <a
                  href="blog-single-post.html"
                  className="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i className="icon-arrow-right" />
                </a>
              </div>
              {/* /.blog-content */}
            </div>
            {/* /.post-item */}
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
