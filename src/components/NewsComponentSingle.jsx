import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/white-logo.png";
import { Footer, Nav, StayInTouch } from "../components";

const NewsComponentSingle = () => {
  const location = useLocation();
  const newsData = location?.state;
  console.log(newsData);
  return (
    <div className="">
      <div className="container">
        <Nav />
        <div className="">
          <div className="news-section">
            <div className="row">
              <div
                className=""
                style={{
                  flexBasis: "65%",
                  height: "360px",
                  backgroundImage: `url(${newsData?.image_url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "8px",
                }}
              >
                <img src={logo} alt="" />
              </div>
              <div
                className="news-article-section"
                style={{
                  flexBasis: "33%",
                  // border: "2px solid red",
                  height: "360px",
                }}
              ></div>
            </div>
            <div className="">
              <h1 className="news-title">{newsData?.title}</h1>
            </div>
            <div className="firstddyNews-case full-news-case sss">
              <div className="firstddyNews-case-right">
                <p
                  className="news-content"
                  style={{
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "43px",
                    letterSpacing: "2%",
                    color: "rgba(35, 67, 17, 1)",
                    margin: "10px 0",
                  }}
                >
                  {newsData?.content}
                </p>
                <span
                  style={{
                    textAlign: "right",
                    margin: "40px 0 10px",
                    color: "rgba(63, 120, 30, 1)",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "32px",
                    display: "block",
                  }}
                >
                  {newsData?.pubDate}
                </span>
              </div>
            </div>
          </div>
        </div>
        <StayInTouch />
      </div>
      <Footer />
    </div>
  );
};

export default NewsComponentSingle;
