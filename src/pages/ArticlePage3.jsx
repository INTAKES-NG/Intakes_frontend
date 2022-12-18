import React from "react";
import { Footer, Nav, StayInTouch } from "../components";

import plate from "../assets/fruit-juice-img.png";
import { Link } from "react-router-dom";

const ArticlePage3 = () => {
  return (
    <div className="article-page-wrapper">
      <div className="container">
        <Nav />
        <div
          className="latest-news-header-section"
          style={{ margin: "40px 0 20px" }}
        ></div>
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
                flexBasis: "25%",
                height: "360px",
              }}
            >
              <h3
                style={{
                  color: "rgba(35, 67, 17, 1)",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Articles
              </h3>
              <Link
                to="/article-3-food-to-avoid-for-a-healthier-lifestyle"
                style={{
                  color: "rgba(35, 67, 17, 1)",
                  fontSize: "20px",
                  fontWeight: "400",
                  display: "block",
                  padding: "10px 0",
                }}
              >
                3 Foods To Avoid For A Healthier Lifestyle
              </Link>
              <Link
                to="/article-6-Tips-to-control-food-sizes"
                style={{
                  color: "rgba(35, 67, 17, 1)",
                  fontSize: "20px",
                  fontWeight: "400",
                  display: "block",
                  padding: "10px 0",
                }}
              >
                6 Tips to control food sizes
              </Link>
              <Link
                to="/articles-Eat-these-carbs-to-live-longer"
                style={{
                  color: "rgba(35, 67, 17, 1)",
                  fontSize: "20px",
                  fontWeight: "400",
                  display: "block",
                  padding: "10px 0",
                }}
              >
                Eat these carbs to live longer
              </Link>
              <Link
                to="/articles"
                style={{
                  color: "rgba(35, 67, 17, 1)",
                  fontSize: "20px",
                  fontWeight: "400",
                  display: "block",
                  padding: "10px 0",
                }}
              >
                An Excess of Salty Food Seasons the Body With Stress, Study Says
              </Link>
            </div>
          </div>
          <div className="news-content-section">
            <h3 className="news-title">6 Tips to control food sizes</h3>
            <p className="news-content">
              Measuring out every meal can become a daunting task. Yet it is an
              important ritual that helps you control the amount of food you
              eat. There are simple things we can do to help eat the right
              serving size.
            </p>
            <p className="news-content">
              To control your portion sizes when you are eating at home, try the
              following tips:
            </p>
            <ul>
              <li className="news-content-list">
                Avoid eating from a the bag.
              </li>
              <p className="news-content">
                Always eat the serving size on the food package, as eating
                straight from the bag could tempt uou into eating more than the
                recommended food portion. You could be tempted to eat too much.
                Use the serving size on the package to portion out the snack
                into small bags or bowls.
              </p>
              <li className="news-content-list">
                Half of your plate should contain green vegetables.{" "}
              </li>
              <p className="news-content">
                Filling half of your plate with green vegetables before you
                serve the rest of your entree is one of the easiest methods of
                portion control.
              </p>
              <li className="news-content-list">
                Serve food on smaller plates.
              </li>
              <p className="news-content">
                Eat with smaller plate instead of a dinner plate.
              </p>
              <li className="news-content-list">
                Substitute lower-fat varieties of food.
              </li>
              <p className="news-content">
                Instead of whole-fat cream cheese, sour cream, and milk, buy
                low-fat or skim instead.
              </p>
              <li className="news-content-list">Do not eat mindlessly</li>
              <p className="news-content">
                Pay attention to your meal, so that you will know when you have
                had enough.
              </p>
              <li className="news-content-list">
                Snack between meals if desired
              </li>
              <p className="news-content">
                If you are hungry between meals, eat a healthy, high-fiber snack
                such as a piece of fruit, small salad, or bowl of broth-based
                soup. Snacks that pair protein and carbohydrates with fiber will
                leave you more satisfied.
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

export default ArticlePage3;
