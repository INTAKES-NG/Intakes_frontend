import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Footer, Nav, StayInTouch } from "../components";
import "../styles/News.module.css";
import { FallingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const News = () => {
  // states
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // function to fetch the news
  const fetchNews = async () => {
    // fetch news
    try {
      const res = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_14368ab2138fb393bf9885224c719363db2aa&country=us,gb,ng&category=food,health"
      ); /**food */
      setLoading(false);

      if (res.data.status === "success") {
        setNewsData(res.data.results);
        console.log(newsData);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  // useEffect hook
  useEffect(() => {
    fetchNews();
  }, []);

  // If loading
  if (loading) {
    return (
      <div className="article-page-wrapper">
        <div className="container">
          <Nav />
          <div
            className="latest-news-header-section"
            style={{ margin: "40px 0 20px" }}
          >
            <h3>Latest Headlines</h3>
          </div>
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
          <StayInTouch />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="article-page-wrapper">
      <div className="container">
        <Nav />
        <div
          className="latest-news-header-section"
          style={{ margin: "40px 0 20px" }}
        >
          <h3>Latest Headlines</h3>
        </div>
        <div className="news-section">
          <div className="row">
            <div
              className="news-image-section"
              style={{
                flexBasis: "65%",
                height: "360px",
                backgroundImage: `url(${newsData[5]?.image_url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "8px",
              }}
            ></div>
            <div
              className="news-article-section"
              style={{
                flexBasis: "30%",
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
            <h3 className="news-title">{newsData[5]?.title}</h3>
            <p style={{}} className="news-content">
              {newsData[5]?.content}
            </p>
            <p
              className="date"
              style={{
                textAlign: "right",
                margin: "40px 0 10px",
                color: "rgba(63, 120, 30, 1)",
                fontWeight: "600",
                fontSize: "12px",
                lineHeight: "32px",
              }}
            >
              {newsData[6]?.pubDate}
            </p>
            <hr style={{ background: "rgba(63, 120, 30, 1)", height: "3px" }} />
          </div>
          <div className="top-pick-footer-section">
            <h3
              style={{ margin: "30px 0 40px" }}
              className="todays-pick-header"
            >
              TODAY’S TOP PICKS
            </h3>
            <div className="top-pick-row">
              <Link
                to={`/new/${newsData[0]?.title}`}
                state={newsData[0]}
                className="top-pick-item"
              >
                <img src={newsData[0]?.image_url} alt="image" />
                <h5>{newsData[0]?.title}</h5>
              </Link>
              {/*  */}
              <Link
                to={`/new/${newsData[1]?.title}`}
                state={newsData[1]}
                className="top-pick-item"
              >
                <img src={newsData[1]?.image_url} alt="image" />
                <h5>{newsData[1]?.title}</h5>
              </Link>
              {/*  */}
              <Link
                to={`/new/${newsData[3]?.title}`}
                state={newsData[3]}
                className="top-pick-item"
              >
                <img src={newsData[3]?.image_url} alt="image" />
                <h5>{newsData[3]?.title}</h5>
              </Link>
              {/*  */}
              <Link
                to={`/new/${newsData[4]?.title}`}
                state={newsData[4]}
                className="top-pick-item"
              >
                <img src={newsData[4]?.image_url} alt="image" />
                <h5>{newsData[4]?.title}</h5>
              </Link>
            </div>
          </div>
        </div>
        <StayInTouch />
      </div>
      <Footer />
    </div>
  );
};

export default News;
