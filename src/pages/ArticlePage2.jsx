import React from "react";
import { Footer, Nav, StayInTouch } from "../components";

import plate from "../assets/fruit-juice-img.png";
import newsImg from "../assets/news-img-1.png";

const ArticlePage2 = () => {
  return (
    <div className="article-page-wrapper">
      <div className="container">
        <Nav />
        <div
          className="latest-news-header-section"
          style={{ margin: "40px 0 20px" }}
        >
          <h3
            style={{
              width: "100%",
              background: "rgba(129, 178, 154, 1)",
              color: "rgba(243, 240, 221, 1)",
              textTransform: "uppercase",
              padding: "10px 20px",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
              fontFamily: "Lato",
            }}
          >
            Latest Headlines
          </h3>
        </div>
        <div className="news-section">
          <div className="row">
            <div
              className="news-image-section"
              style={{
                flexBasis: "65%",
                height: "360px",
                backgroundImage: `url(${plate})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "8px",
              }}
            ></div>
            <div
              className="news-article-section"
              style={{
                flexBasis: "33%",
                border: "2px solid red",
                height: "360px",
              }}
            ></div>
          </div>
          <div className="news-content-section">
            <h3 className="news-title">
              3 Foods To Avoid For A Healthier Lifestyle
            </h3>
            <p className="news-content">
              Eating healthy is a continious lifestyle, it helps protect you
              against lots of life threatening desises such as diabetes, heart
              dieses and cancer. Here are three foods to avoid to maintain a
              healthy lifestyle.
            </p>
            <ul>
              <li className="news-content-list">
                Refined Sugar
              </li>
              <p className="news-content">
                Consuming refined foods or drinks with refined sugar like soda,
                cookies, cakes and pastries can be very harmful to the body and
                can hinder you from getting you your desired health goals.
              </p>
              <li className="news-content-list">Refined food</li>
              <p className="news-content">
                Refined food are foods with little to no fibers in them. Fibers
                are very vital part of our diet as they help aid digestion and
                promote gut health.
              </p>
              <li className="news-content-list">Saturated Fat</li>
              <p className="news-content">
                Too much of fried fatty foods can be a major cause of obesity.
                Consuming fried fatty , can increase cholestrol levels which can
                increase the chances of getting heart problems and other
                disorders.
              </p>
            </ul>
          </div>
          <div className="top-pick-footer-section">
            <div className="row"></div>
          </div>
        </div>
        <StayInTouch />
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage2;
