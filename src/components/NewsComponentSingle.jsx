import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/white-logo.png";
import { Footer, Nav, StayInTouch } from "../components";

const NewsComponentSingle = () => {
  const location = useLocation();
  const newsData = location?.state;
  return (
    <div className="single-news-wrapper">
      <div className="container">
        <Nav />
        <div className="didyouknow-container">
          <div className="didyouknow-container-inner">
            <div className="firstddyNews-case">
              <div
                className="firstddyNews-case-left"
                style={{
                  backgroundImage: `url(${newsData?.image_url})`,
                }}
              >
                <img src={logo} alt="" />
              </div>
              <div className="firstddyNews-case-right">
                <h1>{newsData?.title}</h1>
              </div>
            </div>
            <div className="firstddyNews-case full-news-case">
              <div className="firstddyNews-case-right">
                {/* <p>{newsData?.content}</p> */}

                <span style={{ marginTop: "30px" }}>
                  Author: {newsData?.creator}
                </span>
                <span style={{ marginTop: "10px" }}>
                  {/* Source: {newsData?.source.name} */}
                </span>
                <span style={{ marginBottom: "30px" }}>
                  Date Posted: {newsData?.pubDate}
                  {/* Date Posted: {newsData?.publishedAt} */}
                </span>
                <p>{newsData?.content}</p>
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
