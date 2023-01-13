import React from "react";
import {
  Article,
  DidYouKnowArticles,
  Footer,
  Healthy,
  Nav,
  NewsComponent,
  OurValues,
  StayInTouch,
} from "../components";

import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import ellipse from "../assets/ellipse-bg.png";
import messageIcon from "../assets/message-icon.png";
import download from "../assets/download-btn.png";

import thinking from "../assets/thinking-icon.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <Nav />
          <section className="hero row-header">
            <div className="hero-text-section">
              <h1>
                <span>Changing Your</span> Eating Habits
              </h1>
              <p>
                Always take care of your health starting from the menu that you
                consume everyday.
              </p>

              <a href="" className="hero-btn" download>
                <p>Download PDF</p>
                <img src={download} alt="" className="play-btn" />
              </a>
            </div>
            <div className="hero-img-section">
              <img src={hero} alt="" className="hero-img" />
            </div>
          </section>
        </header>
      </div>
      {/* absolute hero image */}
      <img src={ellipse} alt="" className="absolute-img" />
      {/* our values section */}
      <OurValues />
      {/* article section */}
      <section className="article">
        <div className="container">
          <div className="row row-header">
            <div className="row sub-row">
              <img src={messageIcon} alt="" />
              <p className="sub-title">Articles</p>
            </div>
            <Link
              to="/articles"
              style={{
                color: "rgba(63, 120, 30, 1)",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Load More &#8594;
            </Link>
          </div>
        </div>
        {/* article slides */}
        <article className="article-slide">
          <Article />
        </article>
      </section>
      {/* welcome section */}
      <section className="welcome-sec">
        <div className="container welcome-container">
          <div className="row row-header">
            <div className="row sub-row">
              <img src={thinking} alt="" />
              <p className="sub-title">Did You Know?</p>
            </div>
            <Link
              to="/didYouKnow"
              style={{
                color: "rgba(63, 120, 30, 1)",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Load More &#8594;
            </Link>
          </div>
          {/* carousel */}
          <div style={{ margin: "30px 0px" }}>
            <DidYouKnowArticles />
          </div>
        </div>
      </section>
      {/* testimonial section */}
      <Healthy />
      {/* news section */}
      <section className="news">
        <NewsComponent />
      </section>

      {/* stay in touch */}
      <StayInTouch />
      <Footer />
    </>
  );
};

export default Home;
