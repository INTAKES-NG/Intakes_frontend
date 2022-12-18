import React from "react";
import { Footer, Nav, StayInTouch } from "../components";

import plate from "../assets/seafood-img.png";
import { Link } from "react-router-dom";

const ArticlePage4 = () => {
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
            <h3 className="news-title">Eat these carbs to live longer</h3>
            <p className="news-content">
              White bread may spare several years of your life. But studies show
              that whole-wheat bread may be a life extender.
            </p>
            <p className="news-content">
              It's all thanks to fibre. Fibre has long been known to improve
              both heart and digestive health. And now a new study reveals that
              fibre from whole grains may extend your lifespan.
            </p>
            <p className="news-content underline">Wide-ranging advantages</p>
            <p className="news-content">
              In a significant research of middle-aged adults, those who
              consumed the greatest whole-grain fibre experienced a 22%
              reduction in total mortality! Not bad at all. The longer-living
              men in the study consumed at least 30 grams of fibre daily, but
              the longer-living women received about 25 grams. The best
              life-extension effect was provided by whole grain fibre, for
              unknown reasons. How long do you expect to live? (Learn why your
              photo albums can contain a hint.)
            </p>
            <p className="news-content underline">Eat plenty of fibre</p>
            <p className="news-content">
              What makes whole-grain fibre so unique? According to the study, it
              possesses anti-inflammatory and antioxidant qualities that may
              help prevent death from disorders like infections, respiratory
              diseases, and cardiovascular diseases. Eat extra whole-wheat
              bread, brown rice, and whole-grain cereals like oatmeal and
              shredded wheat to get your fill of fibre-rich whole grains. Each
              slice of whole-wheat bread and each half cup of brown rice
              contains 2 grams of fibre. To ensure that you are consuming at
              least 2 grams of fibre each serving, check the labels on your
              cereals. (How to choose healthy bread options is provided here.)
            </p>
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

export default ArticlePage4;
