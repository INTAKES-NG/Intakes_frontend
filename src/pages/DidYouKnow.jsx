import { React, useState } from "react";
import logo from "../assets/newLogo.png";
import {
  Footer,
  Nav,
  StayInTouch,
  getDidYouKnow,
  Pagination,
  paginate,
} from "../components";

const DidYouKnow = () => {
  const [articles, setArticles] = useState(getDidYouKnow);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const article = paginate(articles, currentPage, pageSize);

  const mappedArticles = article.map((item) => {
    return (
      <div className="did-you-know-item" key={item._id}>
        <div className="relative-img" style={{ width: "100%", height: "100%" }}>
          <img src={item.image} alt="" style={{ width: "100%" }} />
        </div>
        <div className="absolute-contents">
          <div className="flex-item">
            <img src={logo} alt="logo" />
            <h3 className="title">{item.title}</h3>
          </div>
        </div>
      </div>
    );
  });

  // handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // change page
  };

  return (
    <div className="did-you-know did-you-know-wrapper">
      <div className="container">
        <Nav />
        <h1 className="heading">Did You Know ?</h1>
        <div className="content-wrapper grid">{mappedArticles}</div>
        <Pagination
          itemsCount={articles.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <StayInTouch />
      </div>
      <Footer />
    </div>
  );
};

export default DidYouKnow;
