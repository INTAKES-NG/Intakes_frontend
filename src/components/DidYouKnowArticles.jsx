import React from "react";

import Logo from "../assets/newLogo.png";
import LogoWhite from "../assets/white-logo.png";
import person from "../assets/person.png";
import apple from "../assets/apple.png";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";
import { useState } from "react";

const DidYouKnowArticles = () => {
  // state for mouse over
  const [isHover, setIsOver] = useState(false);
  // mouse enter handler
  const handleMouseEnter = () => {
    setIsOver(true);
  };

  // handle mouse leave
  const handleMouseLeave = () => {
    setIsOver(false);
  };

  // style
  const articles = [
    {
      title: "There is more sugar in lemon than in strawberries",
      image: person,
      link: "/didYouKnow",
    },
    {
      title: "Avocado has the highest protein content of any fruit.",
      image: apple,
      link: "/didYouKnow",
    },
    {
      title: "Low-fat usually means “sugar added” and should be avoided.",
      image: person,
      link: "/didYouKnow",
    },
  ];

  const mappedArticles = articles.map((article) => {
    return (
      <SwiperSlide>
        <div
          style={{
            height: "200px",
            borderRadius: "8px",
            padding: "20px",
            background: isHover
              ? `linear-gradient(rgba(0, 0, 0, .8),rgba(0, 0, 0, 0.6)), url(${article.image}`
              : `linear-gradient(rgba(242, 204, 143, .8),rgba(242, 204, 143, 0.6)),url(${article.image}`,
            backgroundPosition: isHover? "center" : "center",
            backgroundSize: isHover? "cover" : "cover",
            backgroundRepeat: "no-repeat",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={isHover ? Logo : Logo}
            alt=""
            style={{
              position: "absolute",
              top: "3%",
              left: "5%",
              width: "60px",
              height: "50px",
            }}
          />
          <div>
            <h3
              style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "28px",
                color: isHover ? "white" : "rgba(63, 120, 30, 1)",
                textAlign: "center",
              }}
            >
              {article.title}
              {/* {detailsData?.content} */}
              {/* {article.title} */}
            </h3>
            <Link
              to={article.link}
              style={{
                background: isHover ? "rgba(63, 120, 30, 1)" : "transparent",
                color: "#fff",
                textDecoration: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                position: "absolute",
                bottom: "4%",
                right: "4%",
                fontSize: "18px",
                fontWeight: "500",
                border: isHover ? "none" : "1px solid rgba(63, 120, 30, 1)",
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.3}
        centeredSlides={true}
        // autoplay={false}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {mappedArticles}
      </Swiper>
    </div>
  );
};

export default DidYouKnowArticles;
