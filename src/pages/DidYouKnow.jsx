import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/white-logo.png'
import { Footer, Nav, StayInTouch } from "../components";

const DidYouKnow = () => {
  const data = JSON.parse(localStorage.getItem('healthArticle'))
  const [articleData, setArticleData] = useState(data ? data : [])
  const [loading, setLoading] = useState(data ? false : true)

  const fetchArticles = async () => {
    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=9ba2824ea5c84dd986cf38929e46120e')
      // const res = await axios.get('https://newsapi.org/v2/everything?q=health&from=2022-12-06&sortBy=latest&apiKey=9ba2824ea5c84dd986cf38929e46120e')
      setLoading(false)
      if (res.data.status === "ok") {
        localStorage.setItem('healthArticle', JSON.stringify(res.data.articles))
        setArticleData(res.data.articles)
      } else {
        alert(res.data.message)
      }

    } catch (error) {
      setLoading(false)
      alert(error.message)
    }
  }


  useEffect(() => {
    fetchArticles()
  }, [])

  if (loading) {
    return <div>
      <div className="container">
        <Nav />
        <div className="didyouknow-container">
          <h1>Loading...</h1>
        </div>
      </div >
    </div>
  }

  return (
    <div>
      <div className="container">
        <Nav />
        <div className="didyouknow-container">
          <h1>Did You Know?</h1>
          <div className="didyouknow-container-inner">

            <div className="firstddyNews-case">
              <div className="firstddyNews-case-left" style={{
                backgroundImage: `url(${articleData[10]?.urlToImage})`
              }}>
                <img src={logo} alt="" />
              </div>

              <div className="firstddyNews-case-right">
                <span>{articleData[10]?.publishedAt}</span>
                <Link to={`/didYouKnow/${articleData[10]?.title}`} state={articleData[10]}>
                  <h1>{articleData[10]?.title}</h1>
                </Link>
                <Link to={`/didYouKnow/${articleData[10]?.title}`} state={articleData[10]}>

                  <p>{articleData[10]?.description}</p>
                </Link>
              </div>
            </div>


            <div className="secondddyNews-case">

              {articleData?.map((article) => {
                return <Link key={article.title} to={`/didYouKnow/${article.title}`} state={article}>
                  <div className="secondddyNews-item">
                    <div className="secondddyNews-top" style={{
                      backgroundImage: `url(${article.urlToImage})`
                    }}>
                      <img src={logo} alt="" />
                    </div>
                    <div className="firstddyNews-bottom">
                      <span>{article.publishedAt}</span>

                      <h1>{article.title}</h1>

                      <p>{article.description}</p>
                    </div>
                  </div>
                </Link>
              })}

            </div>



          </div>
        </div>

        <StayInTouch />
      </div >
      <Footer />
    </div>
  );
};

export default DidYouKnow;
