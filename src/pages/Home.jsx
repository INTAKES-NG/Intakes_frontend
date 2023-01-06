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

              {/* <a href="" className="hero-btn">
                <img src={play} alt="" className="play-btn" />
                Watch Video
              </a> */}
            </div>
            <div className="hero-img-section">
              <img src={hero} alt="" className="hero-img" />
            </div>
          </section>
        </header>
      </div>
      {/* absolute hero image */}
      <img src={ellipse} alt="" className="absolute-img" />
      {/* welcome section */}
      <section className="welcome-sec">
        <div className="container">
          <h3 className="title">Welcome</h3>
          {/*  */}
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
          <div style={{ margin: "50px 0px" }}>
            <DidYouKnowArticles />
          </div>
        </div>
      </section>
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
          {/* article slides */}
          <article className="article-slide">
            <Article />
          </article>
        </div>
      </section>
      {/* testimonial section */}
      <Healthy />
      {/* <section className="testimonial">
        <div className="container">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row">
                <div className="col-1">
                  <img src={halfCircle} alt="" className="absolute-bg" />
                  <div className="testimonial-text">
                    <img
                      src={testimonialImage1}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                    <h4>Nicole Elohor .S.</h4>
                    <p>
                      Being a student and an entrepreneur at th ame time makes
                      knowing the right combination of food a bit of a stress as
                      i’m busy all day, but thanks to INTAKE.NG for making it
                      less stressful with the health and food combination tips
                      and restaurant listings.
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="content-container">
                    <div className="row">
                      <img src={messageIcon} alt="" />
                      <h4>Testimonials about us</h4>
                    </div>
                    <p>
                      "Processed food is generally not as healthy as whole food.
                      As the food system has become more industrialized, the
                      health of the population has deteriorated. During food
                      processing, many of the benefitial nutrients in the food
                      are removed..."
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-1">
                  <img src={halfCircle} alt="" className="absolute-bg" />
                  <div className="testimonial-text">
                    <img
                      src={testimonialImage1}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                    <h4>Nicole Elohor .S.</h4>
                    <p>
                      Being a student and an entrepreneur at th ame time makes
                      knowing the right combination of food a bit of a stress as
                      i’m busy all day, but thanks to INTAKE.NG for making it
                      less stressful with the health and food combination tips
                      and restaurant listings.
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="content-container">
                    <div className="row">
                      <img src={messageIcon} alt="" />
                      <h4>Testimonials about us</h4>
                    </div>
                    <p>
                      "Processed food is generally not as healthy as whole food.
                      As the food system has become more industrialized, the
                      health of the population has deteriorated. During food
                      processing, many of the benefitial nutrients in the food
                      are removed..."
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-1">
                  <img src={halfCircle} alt="" className="absolute-bg" />
                  <div className="testimonial-text">
                    <img
                      src={testimonialImage1}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                    <h4>Nicole Elohor .S.</h4>
                    <p>
                      Being a student and an entrepreneur at th ame time makes
                      knowing the right combination of food a bit of a stress as
                      i’m busy all day, but thanks to INTAKE.NG for making it
                      less stressful with the health and food combination tips
                      and restaurant listings.
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="content-container">
                    <div className="row">
                      <img src={messageIcon} alt="" />
                      <h4>Testimonials about us</h4>
                    </div>
                    <p>
                      "Processed food is generally not as healthy as whole food.
                      As the food system has become more industrialized, the
                      health of the population has deteriorated. During food
                      processing, many of the benefitial nutrients in the food
                      are removed..."
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-1">
                  <img src={halfCircle} alt="" className="absolute-bg" />
                  <div className="testimonial-text">
                    <img
                      src={testimonialImage1}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                    <h4>Nicole Elohor .S.</h4>
                    <p>
                      Being a student and an entrepreneur at th ame time makes
                      knowing the right combination of food a bit of a stress as
                      i’m busy all day, but thanks to INTAKE.NG for making it
                      less stressful with the health and food combination tips
                      and restaurant listings.
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="content-container">
                    <div className="row">
                      <img src={messageIcon} alt="" />
                      <h4>Testimonials about us</h4>
                    </div>
                    <p>
                      "Processed food is generally not as healthy as whole food.
                      As the food system has become more industrialized, the
                      health of the population has deteriorated. During food
                      processing, many of the benefitial nutrients in the food
                      are removed..."
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section> */}
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
