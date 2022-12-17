import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/white-logo.png";
import { Footer, Nav, StayInTouch } from "../components";

const DidYouKnowSingle = () => {
  const location = useLocation();
  const detailsData = location?.state;
  console.log(location);

  return (
    <div className="wrapper">
      <div className="container">
        <Nav />
        <div className="didyouknow-container">
          <div className="didyouknow-container-inner">
            <div className="firstddyNews-case">
              <div
                className="firstddyNews-case-left"
                style={{
                  backgroundImage: `url(${detailsData?.image_url})`,
                }}
              >
                <img src={logo} alt="" />
              </div>
              <div className="firstddyNews-case-right">
                <h1>{detailsData?.title}</h1>
              </div>
            </div>
            <div className="firstddyNews-case full-news-case">
              <div className="firstddyNews-case-right">
                {/* <p>{detailsData?.content}</p> */}

                <span style={{ marginTop: "30px" }}>
                  Author: {detailsData?.creator}
                  {/* Author: {detailsData?.author} */}
                </span>
                <span style={{ marginTop: "10px" }}>
                  {/* Source: {detailsData?.source.name} */}
                </span>
                <span style={{ marginBottom: "30px" }}>
                  Date Posted: {detailsData?.pubDate}
                  {/* Date Posted: {detailsData?.publishedAt} */}
                </span>
                <p>{detailsData?.content}</p>
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

export default DidYouKnowSingle;
