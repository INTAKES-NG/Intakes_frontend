import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/white-logo.png";
import hero from "../assets/hero.png";
import { Footer, Nav, StayInTouch } from "../components";

// loader spinner
import { Circles } from "react-loader-spinner";

const DidYouKnow = () => {
  // const data = JSON.parse(localStorage.getItem("healthArticle"));
  const [articleData, setArticleData] = useState([]);
  // const [articleData, setArticleData] = useState(data ? data : []);
  const [loading, setLoading] = useState(true);
  // const [loading, setLoading] = useState(data ? false : true);

  const fetchArticles = async () => {
    try {
      // const res = await axios.get(
      //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=9ba2824ea5c84dd986cf38929e46120e"
      // );
      const res = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_143403e90291c1254eb6fea9b9c31f620dc34&country=us,gb,ng&category=health"
      );
      // const res = await axios.get('https://newsapi.org/v2/everything?q=health&from=2022-12-06&sortBy=latest&apiKey=9ba2824ea5c84dd986cf38929e46120e')
      setLoading(false);
      if (res.data.status === "success") {
        /**from ok */
        localStorage.setItem(
          "healthArticle",
          JSON.stringify(res.data.results) /**from articles */
        );
        setArticleData(res.data.results);
        // } else {
        //   alert(res.data.message);
        // }
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div>
        <div className="container">
          <Nav />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50vh",
            }}
          >
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="did-you-know-wrapper">
      <div>
        <div className="container">
          <Nav />
          <div className="didyouknow-container">
            <h1>Did You Know?</h1>
            <div className="didyouknow-container-inner">
              <div className="firstddyNews-case">
                <div
                  className="firstddyNews-case-left"
                  style={{
                    backgroundImage: `url(${articleData[1]?.image_url})`,
                    // backgroundImage: {articleData[1]?.urlToImage ? (`url(${articleData[1]?.urlToImage}))` : (``)},
                    // backgroundImage: {articleData[1]?.urlToImage ? (`url(${articleData[1]?.urlToImage}))` : (``)},
                  }}
                >
                  <img src={logo} alt="" />
                </div>

                <div className="firstddyNews-case-right">
                  {/* <span>{articleData[1]?.publishedAt}</span> */}
                  <span>{articleData[1]?.pubDate}</span>
                  <Link
                    to={`/didYouKnow/${articleData[1]?.title}`}
                    state={articleData[1]}
                  >
                    <h1>{articleData[1]?.title}</h1>
                  </Link>
                  <Link
                    to={`/didYouKnow/${articleData[1]?.title}`}
                    state={articleData[1]}
                  >
                    <p>{articleData[1]?.description}</p>
                  </Link>
                </div>
              </div>

              <div className="secondddyNews-case">
                {articleData?.map((article) => {
                  return (
                    <Link
                      key={article.title}
                      to={`/didYouKnow/${article.title}`}
                      state={article}
                    >
                      <div className="secondddyNews-item">
                        <div
                          className="secondddyNews-top"
                          style={{
                            backgroundImage: `url(${article.image_url})`,
                            // backgroundImage: `url(${article.urlToImage})`,
                          }}
                        >
                          <img src={logo} alt="" />
                        </div>
                        <div className="firstddyNews-bottom">
                          <span>{article.pubDate}</span>
                          {/* <span>{article.publishedAt}</span> */}

                          <h1>{article.title}</h1>

                          <p>{article.description}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <StayInTouch />
        </div>
        <Footer />
      </div>
    </div>
  );
};

// const res = await axios.get(
//   "https://newsdata.io/api/1/news?apikey=pub_14270221e8e65f436efc8b39c976a1200c75e&country=ng&category=health"
// );

export default DidYouKnow;
