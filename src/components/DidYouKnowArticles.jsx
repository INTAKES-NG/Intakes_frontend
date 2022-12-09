import React from "react";

import Logo from "../assets/logo.png";
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
      title: "Unprocessed Food Is Healthiest",
      image: person,
      link: "/",
    },
    {
      title: "Supplements Can Never Fully Replace Real Foods",
      image: apple,
      link: "/",
    },
    {
      title: "Unprocessed Food Is Healthiest",
      image: person,
      link: "/",
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
              ? `linear-gradient(rgba(242, 204, 143, .8),rgba(242, 204, 143, 0.6)), url(${article.image}`
              : `url(${article.image}`,
            backgroundPosition: `isHover? "center" : "center"`,
            backgroundSize: "cover",
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
            src={isHover ? LogoWhite : Logo}
            alt=""
            style={{
              position: "absolute",
              top: "3%",
              left: "5%",
              width: "50px",
              height: "50px",
            }}
          />
          <div>
            <h3
              style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "28px",
                color: isHover
                  ? "rgba(63, 120, 30, 1)"
                  : "rgba(242, 204, 143, 1)",
              }}
            >
              {article.title}
              {/* {detailsData?.content} */}
              {/* {article.title} */}
            </h3>
            <Link
              to={article.link}
              style={{
                background: "rgba(63, 120, 30, 1)",
                color: "#fff",
                textDecoration: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                position: "absolute",
                bottom: "4%",
                right: "4%",
                fontSize: "18px",
                fontWeight: "500",
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
        slidesPerView={1.5}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
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
