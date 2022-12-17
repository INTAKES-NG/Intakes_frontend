import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import newsIcon from "../assets/news-icon.png";
import greenIcon from "../assets/green-nav-arrow.png";
import WhiteIcon from "../assets/white-nav-arrow.png";

// loader
import { FallingLines } from "react-loader-spinner";

const NewsComponent = () => {
  // states
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch news function
  const fetchNews = async () => {
    try {
      const res = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_14368ab2138fb393bf9885224c719363db2aa&country=us,gb,ng&category=health" /**food */
      );
      setLoading(false);
      console.log(res);
      if (res.data.status === "success") {
        setNewsData(res.data.results);
        //   console.log(newsData);
      } else {
        console.log(res.data.message);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  // useEffect to fetch the data
  useEffect(() => {
    fetchNews();
  }, []);

  // loader
  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="row sub-row">
            <img src={newsIcon} alt="" />
            <p className="sub-title">News</p>
          </div>
          <Link
            to="/news"
            style={{
              color: "rgba(63, 120, 30, 1)",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            Load More &#8594;
          </Link>
        </div>
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row row-header">
        <div className="row sub-row">
          <img src={newsIcon} alt="" />
          <p className="sub-title">News</p>
        </div>
        <Link
          to="/news"
          style={{
            color: "rgba(63, 120, 30, 1)",
            fontWeight: "500",
            textDecoration: "none",
          }}
        >
          Load More &#8594;
        </Link>
      </div>
      <div className="news-container-wrapper">
        <div className="news-container">
          {/* news items */}
          {/* first news item */}
          <div className="news-item news-item-col-1">
            <div className="news-row">
              <div
                style={{
                  backgroundImage: `url(${newsData[0]?.image_url})`,
                  height: "298px",
                  width: "320px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  flexBasis: "40%",
                }}
              ></div>
              <div className="text-col">
                <Link to={`/new/${newsData[0]?.title}`} state={newsData[0]}>
                  <h3 className="news-title">{newsData[0]?.title}</h3>
                </Link>

                <p className="news-description">{newsData[0]?.description}</p>
                <div className="inner-row">
                  <div className="news-date">{newsData[0].pubDate}</div>
                  <div className="news-link">
                    <Link
                      to={`/new/${newsData[0]?.title}`}
                      state={newsData[0]}
                    >
                      <img
                        src={greenIcon}
                        alt=""
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second news item */}
          <div className="news-item news-item-col-2">
            <div className="row">
              <div
                style={{
                  backgroundImage: `url(${newsData[1]?.image_url})`,
                  height: "120px",
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="col-2">
                <Link to={`/new/${newsData[1]?.title}`} state={newsData[1]}>
                  <h3 className="news-title">{newsData[1]?.title}</h3>
                </Link>

                <p className="news-description">{newsData[1]?.description}</p>
                <div className="inner-row">
                  <div className="news-date">{newsData[1].pubDate}</div>
                  <div className="news-link">
                    <Link
                      to={`/new/${newsData[1]?.title}`}
                      state={newsData[1]}
                    >
                      <img
                        src={WhiteIcon}
                        alt=""
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third */}
        <div className="news-container news-container-2">
          {/* third news item */}
          <div className="news-item news-item-col-1">
            <div className="news-row">
              <div
                style={{
                  backgroundImage: `url(${newsData[2]?.image_url})`,
                  height: "299px",
                  width: "320px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  flexBasis: "40%",
                }}
              ></div>
              <div className="text-col">
                <Link to={`/new/${newsData[2]?.title}`} state={newsData[2]}>
                  <h3 className="news-title">{newsData[2]?.title}</h3>
                </Link>

                <p className="news-description">{newsData[2]?.description}</p>
                <div className="inner-row">
                  <div className="news-date">{newsData[2].pubDate}</div>
                  <div className="news-link">
                    <Link
                      to={`/new/${newsData[2]?.title}`}
                      state={newsData[2]}
                    >
                      <img
                        src={greenIcon}
                        alt=""
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* fourth news item */}
          <div className="news-item news-item-col-2">
            <div className="row">
              <div
                style={{
                  backgroundImage: `url(${newsData[4]?.image_url})`,
                  height: "120px",
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="col-2">
                <Link to={`/new/${newsData[4]?.title}`} state={newsData[4]}>
                  <h3 className="news-title">{newsData[4]?.title}</h3>
                </Link>

                <p className="news-description">{newsData[4]?.description}</p>
                <div className="inner-row">
                  <div className="news-date">{newsData[4].pubDate}</div>
                  <div className="news-link">
                    <Link
                      to={`/new/${newsData[4]?.title}`}
                      state={newsData[4]}
                    >
                      <img
                        src={WhiteIcon}
                        alt=""
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsComponent;
